import { DateTime } from 'luxon';
import { MdxImage } from '@lib/common';
import { HTMLAttributes } from 'react';
import { ImgPlaceholder } from '@lib/placeholder';
import Img from '@components/Img';

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
          className="bg-white"
          placeholderProps={{ className: 'bg-white' }}
          placeholder={coverImagePlaceholder}
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
