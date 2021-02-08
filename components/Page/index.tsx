import { NextSeo, NextSeoProps } from 'next-seo';
import classnames from 'clsx';
import { HTMLAttributes } from 'react';

export interface PageProps extends NextSeoProps {
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

const Page: React.FC<PageProps> = ({ children, containerProps, ...seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <div {...containerProps} className={classnames(containerProps?.className, 'pb-3')}>
        {children}
      </div>
    </>
  );
};

export default Page;
