require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Jack Nugent`,
    description: `I am a Software Engineer and Content Creator. I consult for Fortune 500 Companies and have a YouTube Channel with over 800,000 subscribers and 20 Million Views.`,
    author: `@jacknugent`
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-emotion` },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-plugin-force-trailing-slashes` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/utils/media/images/blog-icon.png` // This path is relative to the root of the site.
      }
    },
    { resolve: `gatsby-transformer-remark` },
    { resolve: `gatsby-transformer-yaml` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/utils`
      }
    },
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: "UCWTFGPpNQ0Ms6afXhaWDiRw",
        apiKey: process.env.GATSBY_YOUTUBE_API,
        maxVideos: 1000 // Defaults to 50
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    // {
    //   resolve: "gatsby-source-dynamodb",
    //   options: {
    //     typeName: "VideoRanking",
    //     accessKeyId: process.env.GATSBY_DYNAMO_DB_ID,
    //     secretAccessKey: process.env.GATSBY_DYNAMO_DB_KEY,
    //     region: "us-east-1",
    //     params: {
    //       TableName: "nysi-votes"
    //     }
    //   }
    // },
    { resolve: `gatsby-plugin-offline` },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jacknugent.io",
        sitemap: "https://jacknugent.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    }
  ]
};
