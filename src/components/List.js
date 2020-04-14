import React from 'react';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { Flex, Text } from 'rebass';
import { Link } from './Link';

export const List = (props) => (
  <Flex
    {...props}
    justifyContent="center"
    flexWrap="wrap"
    flexDirection={['column', 'row']}
    sx={{ listStyleType: 'none' }}
  />
);

export const HeaderImage = ({ to, ...imageProps }) => {
  const image = (
    <Img
      css={css`
        object-fit: contain;
        width: 100%;
        height: 200px;
      `}
      {...imageProps}
    />
  );
  if (!!to) {
    return <Link to={to}>{image}</Link>;
  }
  return image;
};

export const Body = (props) => (
  <Flex
    {...props}
    flexDirection="column"
    p={3}
    sx={{
      textAlign: 'center',
      flexGrow: 1
    }}
  />
);

export const Dates = ({ children, ...props }) => (
  <Text
    {...props}
    sx={{
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: "''",
        width: '100%',
        height: '1px',
        left: 0,
        bottom: '-5px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }
    }}
    mb={3}
  >
    {children}
  </Text>
);

export const Title = ({ to, children, ...props }) => {
  return (
    <Text as="h3" {...props}>
      {!!to ? (
        <Link color="text" sx={{ '&:hover': { color: 'primary', textDecoration: 'none' } }} to={to}>
          {children}
        </Link>
      ) : (
        children
      )}
    </Text>
  );
};

export const Description = (props) => <Text {...props} mt={3} />;

export const ListItem = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      mt={[0, 3, 4]}
      mx={[0, 3, 4]}
      mb={[3, 0]}
      width={[1, 1 / 3]}
      bg="white"
      sx={{ boxShadow: 'list' }}
    >
      {children}
    </Flex>
  );
};
