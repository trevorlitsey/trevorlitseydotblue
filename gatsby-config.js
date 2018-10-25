module.exports = {
  siteMetadata: {
    title: 'trevor litsey',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'trevorlitsey.com',
        short_name: 'trevor',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/josef.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
