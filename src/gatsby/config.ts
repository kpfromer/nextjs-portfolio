import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const fullName = 'Kyle Pfromer';
const [firstName, lastName] = fullName.split(' ');

const googleAnalyticsOptions = !!process.env.GOOGLE_ANALYTICS
  ? {
      trackingId: process.env.GOOGLE_ANALYTICS,
    }
  : {};

const config: GatsbyConfig = {
  siteMetadata: {
    author: {
      fullName,
      firstName,
      lastName,
    },
    description: "Kyle Pfromer's Portfolio and Blog.",
    title: 'Kyle Pfromer',
    siteUrl: 'https://kylepfromer.com',
    socialLinks: {
      stackOverflow: 'https://stackoverflow.com/users/3448490/kyle-pfromer',
      linkedin: 'https://www.linkedin.com/in/kyle-pfromer/',
      github: 'https://github.com/kpfromer',
      email: 'kpfromer2@gmail.com',
    },
  },
  plugins: [
    // Source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, '../../content/blog'),
        // path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, '../../content/assets'),
        // path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // Images/Blog
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,

      options: {
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,

    // Projects
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.resolve(__dirname, '../../content/data'),
      },
    },
    `gatsby-transformer-json`,
    // Experience,
    {
      resolve: `gatsby-transformer-yaml-full`,
      options: {
        plugins: [
          `mdx-yaml-full`,
          `gatsby-yaml-full-markdown`, // Enable !markdown tags
        ],
      },
    },

    // Misc
    // SEO
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: '%s | Kyle Pfromer',
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.kylepfromer.com/',
          site_name: 'Kyle Pfromer',
          title: 'Kyle Pfromer',
          description: "Kyle Pfromer's Portfolio and Blog.",
          images: [
            {
              url: 'https://kylepfromer.org/images/default-seo-image.jpg', // Relative to static folder
              width: 800,
              height: 533,
              alt: 'Crested Butte Mountains',
            },
          ],
        },
        twitter: {
          handle: '@kpfromer',
          site: '@kpfromer',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: googleAnalyticsOptions,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kyle Pfromer',
        short_name: 'Pfromer',
        description: "Kyle's blog.",
        lang: 'en',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#e3872d',
        display: 'standalone',
        icon: 'content/assets/favicon.png',
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
  ],
};

export default config;
