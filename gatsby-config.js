module.exports = {
  siteMetadata: {
    title: "Hoang Khac Nguyen",
    description:
      "Hoang Khac Nguyen's curriculum vitae, CV, resume. Frontend developer.",
    author: "Hoang Khac Nguyen",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hoang Khac Nguyen`,
        short_name: `Hoang`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#00acb6`,
        display: `browser`,
        icon: `src/assets/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.hoangkn.com",
        enableS3StaticWebsiteHosting: false,
      },
    },
  ],
}
