import Card from '@components/Card';
import { FiGithub } from 'react-icons/fi';
import IconButton from '@components/IconButton';
import Img from 'next/image';
import NextLink from 'next/link';
import { ProjectData } from '@lib/projects';

export type ProjectProps = React.ComponentProps<typeof Card> & ProjectData;

const Project: React.FC<ProjectProps> = ({
  title,
  dates,
  description,
  image,
  imageAlt,
  github,
  ...props
}) => {
  return (
    <Card {...props}>
      <div className="overflow-hidden rounded-lg">
        <Img layout="responsive" {...image} alt={imageAlt} className="bg-white" />
      </div>

      <div className="mt-3">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        <p className="text-md my-2 pb-1 border-b border-black dark:border-white border-opacity-20">
          {dates}
        </p>
        <p>{description}</p>
      </div>

      <div className="flex-grow" />

      <div className="flex mt-2">
        <NextLink href={github} passHref>
          <IconButton
            as="a"
            overrideClassName
            className="m-auto rounded-lg inline-block p-3 bg-gray-200 text-black hover:bg-gray-300 dark:hover:bg-gray-500 dark:text-white dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors ease-in-out"
            icon={<FiGithub />}
            aria-label="Github Project"
            //  @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
          />
        </NextLink>
      </div>
    </Card>
  );
};

export default Project;
