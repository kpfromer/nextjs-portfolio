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
    siteUrl: 'http://kylepfromer.com',
    socialLinks: {
      stackOverflow: 'https://stackoverflow.com/users/3448490/kyle-pfromer',
      linkedin: 'https://www.linkedin.com/in/kyle-pfromer/',
      github: 'https://github.com/kpfromer',
      email: 'kpfromer2@gmail.com'
    },
    theme: {
      primary: '#e3872d',
      secondary: '#041230'
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    // Misc
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },

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
