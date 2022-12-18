import path from 'path';
import { getMdxImage, MdxImage } from './common';
import { getYaml } from './yaml';

export interface ProjectData {
  title: string;
  dates: string;
  description: string;
  image: MdxImage;
  imageAlt?: string;
  github: string;
}

export async function getProjects(): Promise<ProjectData[]> {
  const data = await getYaml<(Omit<ProjectData, 'image'> & { image: string })[]>(
    path.join('content', 'data', 'projects.yaml'),
  );

  if (!data) throw new Error('Invalid projects file');

  return await Promise.all(
    data.map(async (project) => ({
      ...project,
      image: await getMdxImage(path.join('/projects', project.image)),
    })),
  );
}
