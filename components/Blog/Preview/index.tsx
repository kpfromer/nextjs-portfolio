import { BlogPostFrontmatter } from '@lib/blog';
import { DateTime } from 'luxon';
import { HTMLProps } from 'react';
import Img from 'next/image';
import { ImgPlaceholder } from '@lib/placeholder';
import classnames from 'clsx';

export type PreviewProps = HTMLProps<HTMLDivElement> &
  BlogPostFrontmatter & {
    coverImagePlaceholder: ImgPlaceholder;
  };

const Preview: React.FC<PreviewProps> = ({
  title,
  coverImage,
  coverImagePlaceholder,
  coverImageAlt,
  created,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(
        'flex flex-col bg-white dark:bg-gray-700 rounded-md p-4 h-full border border-gray-300',
        props.className,
      )}
    >
      <div className="overflow-hidden rounded-lg">
        <Img
          className="bg-white"
          layout="responsive"
          {...coverImagePlaceholder}
          {...coverImage}
          alt={coverImageAlt}
        />
      </div>

      <div className="flex-grow" />

      <div className="mt-3">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-md mt-2">{DateTime.fromISO(created).toFormat('DDD')}</p>
      </div>
    </div>
  );
};

export default Preview;
