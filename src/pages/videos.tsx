import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import YouTubeVideo from "../components/YouTubeVideo"

function videos() {
  const videoInfo = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            videoId
            localThumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allYoutubeVideo.edges

  const youtubeVideoGallery = css`
    display: flex;
    flex-wrap: wrap;
  `
  const videoContainer = css`
    flex-grow: 1;
    width: 33%;
    height: 100%;
  `

  console.log(videoInfo)
  return (
    <Layout>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        <SEO title="Videos" />
        <div css={youtubeVideoGallery}>
          {videoInfo.map((x: any, i: number) => (
            <div css={videoContainer}>
              <YouTubeVideo
                key={i}
                id={x.node.videoId}
                fluid_url={x.node.localThumbnail.childImageSharp.fluid}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default videos
