require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/static`,
  siteMetadata: {
    title: `Jakub Słowik | Front-end developer & designer portfolio`,
    description: `Front-end developer and graphic designer creating modern websites and web applications.`,
    author: `Jakub Słowik`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `jakubslowik`,
        accessToken: `${process.env.API_KEY}`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/config/typography/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jakub Słowik | Front-end developer & designer portfolio`,
        short_name: `Jakub Słowik Portfolio`,
        start_url: `/`,
        background_color: `#341f7d`,
        theme_color: `#341f7d`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-circle.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
