import Image from 'next/image';
import clsx from 'classnames';
import { HTMLAttributes, useCallback, useState } from 'react';
import React from 'react';
import styles from './styles.module.css';

export type ImgPlaceholder = string;

const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined] as const;

type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined] as const;
type LoadingValue = typeof VALID_LOADING_VALUES[number];
type ImgElementStyle = NonNullable<JSX.IntrinsicElements['img']['style']>;

export type ImgProps = (Omit<
  JSX.IntrinsicElements['img'],
  'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading' | 'style'
> & {
  src: string;

  fadeIn?: boolean;
  durationFadeIn?: number;

  placeholder: ImgPlaceholder;

  placeholderProps?: HTMLAttributes<HTMLImageElement>;
  containerProps?: HTMLAttributes<HTMLDivElement>;

  quality?: number | string;
  priority?: boolean;
  loading?: LoadingValue;
  unoptimized?: boolean;
  objectFit?: ImgElementStyle['objectFit'];
  objectPosition?: ImgElementStyle['objectPosition'];
}) &
  (
    | {
        width?: never;
        height?: never;
        layout: 'fill';
      }
    | {
        width: number | string;
        height: number | string;
        layout?: Exclude<LayoutValue, 'fill'>;
      }
  );

const Img: React.FC<ImgProps> = ({
  src,
  width,
  height,
  layout = 'intrinsic',
  fadeIn = true,
  durationFadeIn = 500,
  placeholder,
  containerProps,
  placeholderProps,
  ...rest
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const shouldReveal = !fadeIn || imgLoaded;

  const imagePlaceholderStyle = {
    filter: 'blur(12px)',
    transform: 'scale(1.2)',
    // transition: `opacity ${durationFadeIn}ms ease 0s`,
    // opacity: shouldReveal ? 0 : 1,
    ...placeholderProps?.style,
  };

  const onLoad = useCallback((event) => {
    // https://github.com/vercel/next.js/discussions/18386
    if (event.target.srcset) {
      // Image is ready
      setImgLoaded(true);
      if (rest.onLoad) rest.onLoad(event);
    }
  }, []);

  return (
    <div
      {...containerProps}
      className={clsx(
        containerProps?.className,
        'relative',
        layout === 'intrinsic' ? 'inline-block' : 'block',
        'overflow-hidden',
      )}
    >
      {placeholder && (
        <img
          {...placeholderProps}
          aria-hidden="true"
          alt=""
          src={placeholder}
          className={clsx(
            placeholderProps?.className,
            'absolute',
            'inset-0',
            'w-full',
            'h-full',
            'object-cover',
            'object-center',
          )}
          style={imagePlaceholderStyle}
        />
      )}

      {layout !== 'fill' ? (
        <Image
          {...rest}
          className={clsx(
            rest.className,
            'block',
            styles.image,
            imgLoaded ? styles.reveal : styles.hide,
          )}
          src={src}
          width={width}
          height={height}
          layout={layout}
          onLoad={onLoad}
        />
      ) : (
        <Image
          {...rest}
          className={clsx(rest.className, styles.image, imgLoaded ? styles.reveal : styles.hide)}
          src={src}
          layout={layout}
          onLoad={onLoad}
        />
      )}
    </div>
  );
};

export default Img;
