import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { Link } from './common/Link';
import { ListItem, HeaderImage, Body, Dates, Title, Description } from './List';
import { Box } from 'rebass';
import { FlexProps } from 'theme-ui';

interface Props {
  title: string;
  dates: string;
  description: string;
  image: any;
  github: string;
}

// TODO: tech used tags
export const Project: React.FC<Props & FlexProps> = ({
  title,
  dates,
  description,
  image,
  github,
  ...props
}) => {
  return (
    <ListItem {...props}>
      {!!image && <HeaderImage fluid={image.childImageSharp.fluid} />}
      <Body>
        <Dates>{dates}</Dates>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Box sx={{ flexGrow: 1 }} mb={3} />
        <IconContext.Provider value={{ size: '32px' }}>
          <Link outside to={github}>
            <Box
              color="black"
              sx={{
                transition: 'color 0.2s ease-in',
                '&:hover': {
                  color: 'primary',
                },
              }}
            >
              <FaGithub />
            </Box>
          </Link>
        </IconContext.Provider>
      </Body>
    </ListItem>
  );
};
