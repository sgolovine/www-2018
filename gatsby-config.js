module.exports = {
  siteMetadata: {
    title: `glvn.co`,
    description: `Website for Sunny Golovine`,
    author: `Sunny Golovine`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
