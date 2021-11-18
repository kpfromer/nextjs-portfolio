import { NextSeo, NextSeoProps } from 'next-seo';

import { HTMLAttributes } from 'react';
import classnames from 'clsx';

export interface PageProps extends NextSeoProps {
  noContainer?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

const Page: React.FC<PageProps> = ({ children, noContainer = false, containerProps, ...seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      {noContainer ? (
        children
      ) : (
        <div {...containerProps} className={classnames(containerProps?.className, 'pb-3')}>
          {children}
        </div>
      )}
    </>
  );
};

export default Page;
