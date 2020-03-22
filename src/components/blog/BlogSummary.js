import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div``;

const Details = styled.div`
  text-align: center;
  padding: 30px 50px 50px 50px;
`;

const Dates = styled.div`
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    left: 0px;
    bottom: -5px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  position: relative;
  margin-bottom: 20px;

  // a {
  //   text-decoration: none;
  //   color: #ff5e5f; // todo: primary color
  // }
`;

const Title = styled.div`
  h3 {
    font-size: 18px;
    // a {
    //   text-decoration: none;
    //   color: #000;
    //   transition: all 0.3s ease;

    //   &:hover {
    //     color: #ff5e5f;
    //   }
    // }
  }
`;

export default ({ image, date, title, to }) => {
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
    <Container>
      {!!image && (
        <Link to={to}>
          <Img
            css={css`
              object-fit: cover;
              width: 100%;
              height: 200px;
            `}
            fluid={image.childImageSharp.fluid}
          />
        </Link>
      )}
      <Details>
        <Dates>
          <p>{date}</p>
        </Dates>
        <Title>
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
            {title}
          </Link>
        </Title>
      </Details>
    </Container>
  );
};
