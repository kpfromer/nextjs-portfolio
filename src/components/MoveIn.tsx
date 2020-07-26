import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Box, BoxProps, Flex } from 'rebass';

interface Props {
  triggerOnce?: boolean;
}

export const MoveIn: React.FC<Props & BoxProps> = ({ triggerOnce = false, children, ...rest }) => {
  const [ref, inView] = useInView({
    triggerOnce,
    rootMargin: '-100px 0px',
    threshold: 0
  });

  const props = useSpring({
    to: inView
      ? {
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0px)'
        }
      : {
          opacity: 0,
          transform: 'translate3d(0px, 100px, 0px)'
        }
  });
  return (
    <Box
      as={animated.div}
      {...rest}
      style={{
        willChange: 'opacity, transform',
        ...props
      }}
    >
      <Flex ref={ref} flexDirection="column" sx={{ height: '100%' }}>
        {children}
      </Flex>
    </Box>
  );
};
