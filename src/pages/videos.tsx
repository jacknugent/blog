import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import YouTubeVideo from "../components/YouTubeVideo"
import YouTubeThumbnail from "../components/YouTubeThumbnail"

function videos() {
  const videoInfo = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            videoId
            localThumbnail {
              childImageSharp {
                fluid(maxWidth: 960) {
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
    margin: 0.5rem;
    flex-grow: 1;
    width: 33%;
  `
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
            <div css={videoContainer} onClick={e => console.log("hello!")}>
              <YouTubeThumbnail
                fluid={x.node.localThumbnail.childImageSharp.fluid}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default videos
