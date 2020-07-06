import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
  title: string;
  image?: string;
}

export const SEO: React.FC<Props> = ({ description, lang = 'en', meta = [], title, image }) => {
  const { site }: any = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              fullName
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = !!image ? { name: 'twitter:image', content: image } : {};

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.fullName
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        metaImage
      ].concat(meta)}
    />
  );
};
