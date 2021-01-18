import NextImage from 'next/image';
import { DateTime } from 'luxon';
import { MdxImage } from '@lib/common';
import { HTMLAttributes } from 'react';

export interface PostProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  coverImage: MdxImage;
  coverImageAlt?: string;
  created: string;
}

const Post: React.FC<PostProps> = ({
  title,
  coverImage,
  coverImageAlt,
  created,
  children,
  ...props
}) => {
  const info = [
    DateTime.fromISO(created).toFormat('DDD'),
    // category &&  `in ${category}`, ...tags
  ].filter((value) => !!value);

  return (
    <div {...props}>
      <div className="overflow-hidden rounded-lg bg-white">
        <NextImage layout="responsive" {...coverImage} alt={coverImageAlt} />
      </div>

      <div className="mt-4">
        <div className="text-3xl md:text-5xl font-bold">{title}</div>
        <div className="mt-2">{info.join(' | ')}</div>
      </div>

      <hr className="my-2 mb-4 text-gray-500" />

      {children}
    </div>
  );
};

export default Post;
