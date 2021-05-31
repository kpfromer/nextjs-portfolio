import { getYaml } from './yaml';
import { serialize } from 'next-mdx-remote/serialize';
import { otherMdxComponents } from '@utils/mdx';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const types = ['work', 'startup', 'club'] as const;
type ExperienceTypes = typeof types[number];

interface Experience {
  companyName: string;
  title: string;
  location: string;
  logo?: string;
  type: ExperienceTypes;
  content?: MDXRemoteSerializeResult<Record<string, unknown>>;
}

interface RawExperienceData {
  titles: Record<ExperienceTypes, string>;
  experience: Experience[];
}

export type ExperienceData = { name: ExperienceTypes; items: Experience[] }[];

const promiseForEach = async <O, R>(
  list: O[],
  func: (value: O, index: number) => Promise<R>,
): Promise<R[]> => {
  const items: R[] = [];

  for (let i = 0; i < list.length; ++i) {
    items.push(await func(list[i], i));
  }

  return items;
};

export async function getExperience(): Promise<ExperienceData> {
  const yamlData = await getYaml<RawExperienceData>('content/data/experience.yaml');

  // Groups items by title
  const experienceData = await promiseForEach(
    Object.entries(yamlData.titles),
    async ([type, title]) => {
      // Attaches mdx rendered content to experience items
      const items = (await promiseForEach(
        yamlData.experience.filter((experience) => experience.type === type),
        async (experience) => {
          if (experience.content) {
            return {
              ...experience,
              // content from yaml is a string
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              content: await serialize(experience.content as any as string),
            };
          }

          return experience;
        },
      )) as Experience[];

      return {
        name: title,
        items,
      };
    },
  );

  return experienceData as unknown as ExperienceData;
}
