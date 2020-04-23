module.exports = {
  siteMetadata: {
    title: `glvn.co`,
    description: `Website for Sunny Golovine`,
    author: `Sunny Golovine`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/cms/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/cms/components/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'assets',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-typescript`,
  ],
}
