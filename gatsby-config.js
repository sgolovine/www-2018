module.exports = {
  siteMetadata: {
    title: `glvn.co`,
    description: `Website for Sunny Golovine`,
    author: `Sunny Golovine`,
  },
  plugins: [
    {
      source: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby=transformer-remark`,
  ],
}
