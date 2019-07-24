import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import YouTubeVideo from "../components/YouTubeVideo"

function videos() {
  const videoIDs = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            videoId
            thumbnail {
              url
            }
          }
        }
      }
    }
  `).allYoutubeVideo.edges

  return (
    <Layout>
      <SEO title="Videos" />
      {videoIDs.map((x: any, i: number) => (
        <YouTubeVideo key={i} id={x.node.videoId} url={x.node.thumbnail.url} />
      ))}
    </Layout>
  )
}

export default videos
