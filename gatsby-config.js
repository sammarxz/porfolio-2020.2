module.exports = {
  siteMetadata: {
    title: `Sam Marxz - Product Designer and Developer based in Brazil.`,
    description: `Personal portfolio of Sam Marxz. A Product Designer and Web Developer based in Brazil.`,
    author: `@sammarxz`,
    about: {
      name: `Sam Marxz`,
      role: `Produt Designer && Web Developer.`,
      working: `Currently working as front-end developer @mcontigo.`,
      location: `Based in Brazil`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Marxz - Product Designer and Web Developer based in Brazil.`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
