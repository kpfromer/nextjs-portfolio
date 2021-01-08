import classnames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FiGithub } from 'react-icons/fi';
import IconButton from '@components/IconButton';
import { ProjectData } from '@lib/projects';

export interface ProjectProps
  extends Omit<HTMLMotionProps<'div'>, keyof ProjectData>,
    ProjectData {}

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
    <motion.div
      {...props}
      className={classnames(
        'flex flex-col bg-white dark:bg-gray-700 rounded-md p-4 h-full',
        props.className,
      )}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      }}
      whileHover={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="overflow-hidden rounded-lg bg-white">
        <NextImage layout="responsive" {...image} alt={imageAlt} />
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
            className="m-auto"
            icon={<FiGithub />}
            aria-label="Github Project"
            //  @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
          />
        </NextLink>
      </div>
    </motion.div>
  );
};

export default Project;
