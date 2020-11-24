import React, { ReactNode } from 'react';
import { Box, FlexProps, Flex, Heading, Text } from 'rebass';

interface Props {
  companyName: ReactNode;
  title: ReactNode;
  location?: string;
}

export const Separator: React.FC<
  Omit<FlexProps, 'css'> & { align?: 'left' | 'center' | 'right' }
> = ({ children, align = 'left', ...rest }) => {
  const divider = (
    <Flex flexGrow={1}>
      <Box
        my="auto"
        sx={{
          flexGrow: 1,
          height: '2px',
          backgroundColor: '#0000001a',
        }}
      />
    </Flex>
  );

  switch (align) {
    case 'left':
      return (
        <Flex my={3} {...rest}>
          <Heading mr={3} fontSize={3}>
            {children}
          </Heading>
          {divider}
        </Flex>
      );
    case 'center':
      return (
        <Flex my={3} {...rest}>
          {divider}
          <Heading mx={3} fontSize={3}>
            {children}
          </Heading>
          {divider}
        </Flex>
      );
    case 'right':
      return (
        <Flex my={3} {...rest}>
          {divider}
          <Heading ml={3} fontSize={3}>
            {children}
          </Heading>
        </Flex>
      );
  }
};

export const WorkExperience: React.FC<Props> = ({ companyName, title, location, children }) => {
  const items = [
    <Heading key={-1} fontSize={3}>
      {title}
    </Heading>,
  ];
  if (location) items.push(<Heading fontSize={3}>{location}</Heading>);

  return (
    <Flex mb={4}>
      <Box>
        <Heading fontSize={5} mb={2} color="primary">
          {companyName}
        </Heading>

        <Flex flexDirection="row" mb={2}>
          {items.reduce(
            (acc, value, index) =>
              acc.length === 0
                ? [value]
                : [
                    ...acc,
                    <Heading fontSize={3} key={index} ml={2} mr={2}>
                      ·
                    </Heading>,
                    value,
                  ],
            [] as JSX.Element[],
          )}
        </Flex>

        <Box>{typeof children === 'string' ? <Text>{children}</Text> : children}</Box>
      </Box>
    </Flex>
  );
};
