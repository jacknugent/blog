require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jack Nugent`,
    description: `I am a Software Engineer and Film Critic. I consult for Fortune 500 Companies and have a YouTube Channel with over 750,000 subscribers and 20 Million Views.`,
    author: `@jacknugent`,
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-emotion` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/utils/stripe-gallery/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog_images`,
        path: `${__dirname}/src/utils/markdown-pages/images`,
      },
    },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/utils/blog-icon.png`, // This path is relative to the root of the site.
      },
    },
    { resolve: `gatsby-plugin-typescript` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/utils/markdown-pages`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    { resolve: `gatsby-transformer-yaml` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/utils/`,
      },
    },
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: "UCWTFGPpNQ0Ms6afXhaWDiRw",
        apiKey: process.env.GATSBY_YOUTUBE_API,
        maxVideos: 100, // Defaults to 50
      },
    },
    { resolve: `gatsby-plugin-offline` },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jacknugent.io",
        sitemap: "https://jacknugent.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
