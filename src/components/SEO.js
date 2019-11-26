import React from 'react';
import { useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            theme {
              primary
            }
          }
        }
      }
    `
  );
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content={data.site.siteMetadata.theme.primary} />
      <meta name="Description" content="Kyle Pfromer's Portfolio." />
      <title>Kyle Pfromer</title>
    </Helmet>
  );
};
