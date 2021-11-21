import { NextSeo, NextSeoProps } from 'next-seo';

import Container from '@components/Container';
import tw from 'tailwind-styled-components';

const PageContainer = tw.div`
  pb-3
  px-2
  sm:px-3
  md:px-0
`;

export interface PageProps extends NextSeoProps {
  noContainer?: boolean;
  containerProps?: React.ComponentProps<typeof PageContainer>;
  header?: React.ReactChild;
}

const Page: React.FC<PageProps> = ({
  children,
  noContainer = false,
  containerProps,
  header,
  ...seo
}) => {
  return (
    <>
      <NextSeo {...seo} />
      {header}
      {noContainer ? (
        children
      ) : (
        <PageContainer {...containerProps}>
          <Container>{children}</Container>
        </PageContainer>
      )}
    </>
  );
};

export default Page;
