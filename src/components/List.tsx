import React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { Flex, Text, FlexProps, TextProps } from 'rebass';
import { Link } from './Link';
import { MoveIn } from './MoveIn';

export const List: React.FC<FlexProps> = (props) => (
  <Flex
    {...props}
    justifyContent="center"
    flexWrap="wrap"
    flexDirection={['column', 'row']}
    sx={{ listStyleType: 'none' }}
  />
);

interface HeaderImageProps {
  to?: string;
}

export const HeaderImage: React.FC<HeaderImageProps & GatsbyImageProps> = ({
  to,
  ...imageProps
}) => {
  const image = (
    <Img
      style={{
        objectFit: 'contain',
        width: '100%',
        height: '200px'
      }}
      {...imageProps}
    />
  );
  if (!!to) {
    return <Link to={to}>{image}</Link>;
  }
  return image;
};

export const Body: React.FC<FlexProps> = (props) => (
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

export const Dates: React.FC<TextProps> = ({ children, ...props }) => (
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

interface TitleProps {
  to?: string;
}

export const Title: React.FC<TitleProps & TextProps> = ({ to, children, ...props }) => {
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

export const Description: React.FC<TextProps> = (props) => <Text {...props} mt={3} />;

export const ListItem: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      flexDirection="column"
      mt={[0, 3, 4]}
      mx={[0, 3, 4]}
      mb={[3, 0]}
      width={[1, 1 / 3]}
      {...props}
    >
      <MoveIn triggerOnce bg="white" sx={{ boxShadow: 'list', flexGrow: 1 }}>
        {children}
      </MoveIn>
    </Flex>
  );
};
