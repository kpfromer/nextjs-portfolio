import { BoxProps } from '@chakra-ui/react';
import NextImage from 'next/image';
import { DateTime } from 'luxon';
import { MdxImage } from '@lib/common';
import { motion } from 'framer-motion';

export interface PreviewProps extends BoxProps {
  title: string;

  coverImage: MdxImage;
  // ogImage?: string;

  created: string;
  // updated?: string;

  // category?: string;
  // tags?: string[];
}

const Preview: React.FC<PreviewProps> = ({ title, coverImage, created, ...props }) => {
  return (
    //@ts-ignore
    <motion.div
      {...props}
      className="flex flex-col bg-white dark:bg-gray-700 rounded-md p-4 h-full"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      }}
      whileHover={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="overflow-hidden rounded-lg bg-white">
        <NextImage layout="responsive" {...coverImage} />
      </div>

      <div className="flex-grow" />

      <div className="mt-3">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        <p className="text-md mt-2">{DateTime.fromISO(created).toFormat('DDD')}</p>
      </div>
    </motion.div>
  );
};

export default Preview;
