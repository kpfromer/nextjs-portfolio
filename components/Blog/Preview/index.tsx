import { BlogPostFrontmatter } from '@lib/blog';
import Card from '@components/Card';
import { DateTime } from 'luxon';
import Img from 'next/image';
import { ImgPlaceholder } from '@lib/placeholder';

export type PreviewProps = React.ComponentProps<typeof Card> &
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
    <Card {...props}>
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
    </Card>
  );
};

export default Preview;
