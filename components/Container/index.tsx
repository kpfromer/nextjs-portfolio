import { Box, BoxProps } from '@chakra-ui/react';

export interface ContainerProps extends BoxProps {}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Box>
      <Box maxW={900} px={[2, 2, 0]} mx="auto" {...props}>
        {children}
      </Box>
    </Box>
  );
};

export default Container;
