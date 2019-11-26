module.exports = {
  siteMetadata: {
    firstName: 'Kyle',
    lastName: 'Pfromer',
    theme: {
      primary: '#e3872d',
      secondary: '#041230'
    }
    // social: { TODO:
    //   linkedin
    //   github
    //   stackoverflow
    // }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
