require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ['trips'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY
        }
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`
  ]
};
