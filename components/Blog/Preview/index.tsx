import {
  Box,
  BoxProps,
  chakra,
  forwardRef,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { DateTime } from 'luxon';
import { MdxImage } from '@lib/common';
import { motion, isValidMotionProp, ForwardRefComponent, HTMLMotionProps } from 'framer-motion';

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  }),
) as React.FC<HTMLMotionProps<'div'> & Omit<BoxProps, keyof HTMLMotionProps<'div'>>>;

export interface PreviewProps extends BoxProps {
  title: string;

  coverImage: MdxImage;
  // ogImage?: string;

  created: string;
  // updated?: string;

  // category?: string;
  // tags?: string[];
}

const Preview: React.FC<PreviewProps> = ({ title, coverImage, created, ...props }) => {
  const bg = useColorModeValue('white', 'gray.700');

  return (
    //@ts-ignore
    <MotionBox
      boxShadow="base"
      rounded="md"
      p={4}
      display="flex"
      flexDir="column"
      whileHover={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      bg={bg}
      {...props}
    >
      {/* <Image as={NextImage} borderRadius="lg" {...coverImage} /> */}
      {/* TODO: border radius */}

      <Box overflow="hidden" borderRadius="lg" bg="white">
        <NextImage layout="responsive" {...coverImage} />
      </Box>

      <Spacer />

      <Box mt={3}>
        <Heading fontSize={['xl', '2xl']}>{title}</Heading>
        <Text fontSize="md" mt={2}>
          {DateTime.fromISO(created).toFormat('DDD')}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default Preview;
