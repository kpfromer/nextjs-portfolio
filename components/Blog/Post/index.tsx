import { Box, BoxProps, Divider, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { DateTime } from 'luxon';
import { MdxImage } from '@lib/common';

export interface PostProps extends BoxProps {
  title: string;
  coverImage: MdxImage;
  created: string;
}

const Post: React.FC<PostProps> = ({ title, coverImage, created, children, ...props }) => {
  const info = [
    DateTime.fromISO(created).toFormat('DDD'),
    // category &&  `in ${category}`, ...tags
  ].filter((value) => !!value);

  return (
    <Box {...props}>
      <Box overflow="hidden" borderRadius="lg" bg="white">
        <NextImage layout="responsive" {...coverImage} />
      </Box>

      <Box mt={4}>
        <Heading fontSize={['3xl', '5xl']}>{title}</Heading>
        <Text mt={2}>{info.join(' | ')}</Text>
      </Box>

      <Divider mt={2} mb={4} />

      {children}
    </Box>
  );
};

export default Post;
