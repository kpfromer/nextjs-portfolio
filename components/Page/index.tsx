import { Box, BoxProps } from '@chakra-ui/react';
import { NextSeo, NextSeoProps } from 'next-seo';

export interface PageProps extends NextSeoProps {
  containerProps?: BoxProps;
}

const Page: React.FC<PageProps> = ({ children, containerProps, ...seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <Box {...containerProps} pb={3}>
        {children}
      </Box>
    </>
  );
};

export default Page;
