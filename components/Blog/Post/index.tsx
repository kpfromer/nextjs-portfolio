import { DateTime } from 'luxon';
import { HTMLAttributes } from 'react';
import Img from 'next/image';
import { ImgPlaceholder } from '@lib/placeholder';
import { MdxImage } from '@lib/common';

export interface PostProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  coverImage: MdxImage;
  coverImagePlaceholder: ImgPlaceholder;
  coverImageAlt?: string;
  created: string;
}

const Post: React.FC<PostProps> = ({
  title,
  coverImage,
  coverImagePlaceholder,
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
    <article {...props}>
      <div className="overflow-hidden rounded-lg bg-white">
        <Img
          layout="responsive"
          {...coverImage}
          {...coverImagePlaceholder}
          className="bg-white"
          alt={coverImageAlt}
        />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mt-4">
          <div className="text-3xl md:text-5xl font-bold">{title}</div>
          <div className="mt-2">{info.join(' | ')}</div>
        </div>

        <hr className="my-2 mb-4 text-gray-500" />

        <div className="prose dark:prose-dark">{children}</div>
      </div>
    </article>
  );
};

export default Post;
