import { DateTime } from 'luxon';
import { HTMLMotionProps, motion } from 'framer-motion';
import classnames from 'classnames';
import { BlogPostFrontmatter } from '@lib/blog';
import { ImgPlaceholder } from '@lib/placeholder';
import Img from '@components/Img';

export interface PreviewProps
  extends Omit<HTMLMotionProps<'div'>, keyof BlogPostFrontmatter>,
    BlogPostFrontmatter {
  coverImagePlaceholder: ImgPlaceholder;
}

const Preview: React.FC<PreviewProps> = ({
  title,
  coverImage,
  coverImagePlaceholder,
  coverImageAlt,
  created,
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
      <div className="overflow-hidden rounded-lg">
        <Img
          className="bg-white"
          placeholderProps={{ className: 'bg-white' }}
          layout="responsive"
          placeholder={coverImagePlaceholder}
          {...coverImage}
          alt={coverImageAlt}
        />
      </div>

      <div className="flex-grow" />

      <div className="mt-3">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-md mt-2">{DateTime.fromISO(created).toFormat('DDD')}</p>
      </div>
    </motion.div>
  );
};

export default Preview;
