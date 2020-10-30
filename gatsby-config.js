module.exports = {
  siteMetadata: {
    title: `glvn.co`,
    description: `Website for Sunny Golovine`,
    author: `Sunny Golovine`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jsonData`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-matomo`,
      options: {
        siteId: `2`,
        matomoUrl: `https://stats.glvn.co/matomo`,
        siteUrl: `https://glvn.co`,
      },
    },
  ],
}
