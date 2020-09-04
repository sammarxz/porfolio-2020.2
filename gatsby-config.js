module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'g2upo3jx',
        dataset: 'production'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sam Marxz - Product Designer and Web Developer based in Brazil.',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    }
  ]
}
