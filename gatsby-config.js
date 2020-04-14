const googleAnalyticsOptions = !!process.env.GOOGLE_ANALYTICS
  ? {
      trackingId: process.env.GOOGLE_ANALYTICS
    }
  : {};

module.exports = {
  siteMetadata: {
    author: {
      // TODO: cleanup?
      fullName: 'Kyle Pfromer',
      firstName: 'Kyle',
      lastName: 'Pfromer'
    },
    description: "Kyle Pfromer's Portfolio and Blog.",
    title: 'Kyle Pfromer',
    siteUrl: 'https://kylepfromer.com',
    socialLinks: {
      stackOverflow: 'https://stackoverflow.com/users/3448490/kyle-pfromer',
      linkedin: 'https://www.linkedin.com/in/kyle-pfromer/',
      github: 'https://github.com/kpfromer',
      email: 'kpfromer2@gmail.com'
    }
  },
  plugins: [
    // Source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
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
              maxWidth: 1000
            }
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    // Misc
    `gatsby-plugin-preact`,
    `gatsby-plugin-emotion`,
    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: googleAnalyticsOptions
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
};
