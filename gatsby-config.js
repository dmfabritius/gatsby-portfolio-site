module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './static/images/',
      },
      __key: 'images',
    },
  ],
};
