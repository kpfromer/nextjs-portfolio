import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../../utils/typography';
import breakpoints from '../../../utils/breakpoints';
import Img from 'gatsby-image';

export const List = styled.ul`
  margin: 0;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  ${breakpoints.regular} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ListItemContainer = styled.li`
  margin: 0px 0px 50px 0px;
  margin-bottom: 10px;
  flex-basis: 100%;

  ${breakpoints.regular} {
    margin-bottom: 0;
    margin: ${rhythm(0.75)};
    width: 33.3333%;
    flex-grow: 1;
    max-width: 333px;
  }
`;

const Container = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

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

export const Body = styled.div`
  text-align: center;
  padding: 30px 50px 50px 50px;
`;

export const Dates = styled.div`
  position: relative;
  margin-bottom: 20px;
  font-size: ${rhythm(0.6)};

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    left: 0px;
    bottom: -5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Title = ({ to, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          theme {
            primary
          }
        }
      }
    }
  `);

  return (
    <h3
      css={css`
        font-size: ${rhythm(0.75)};
      `}
    >
      {!!to ? (
        <Link
          css={css`
            color: #000;
            text-decoration: none;
            transition: all 0.3s ease;
            &:hover {
              color: ${data.site.siteMetadata.theme.primary};
            }
          `}
          to={to}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </h3>
  );
};

export const Description = styled.p`
  font-size: ${rhythm(0.6)};
`;

export const ListItem = ({ children }) => {
  return (
    <ListItemContainer>
      <Container>{children}</Container>
    </ListItemContainer>
  );
};
