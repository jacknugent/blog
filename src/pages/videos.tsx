import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
                fluid(maxWidth: 600) {
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
    margin-left: calc(-100vw / 2 + 960px / 2 + 0.5rem);
    margin-right: calc(-100vw / 2 + 960px / 2 + 0.5rem);
    @media (max-width: 960px) {
      margin-left: -1rem;
      margin-right: -1rem;
    }
  `
  const videoContainer = css`
    margin: 0.5rem;
    flex-grow: 1;
    width: 25%;

    @media (max-width: 1200px) {
      width: 33%;
    }
    @media (max-width: 960px) {
      width: 100%;
    }
  `

  return (
    <Layout>
      <div
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <SEO title="Videos" />
        <div css={youtubeVideoGallery}>
          {videoInfo.map((x: any, i: number) => (
            <div css={videoContainer} onClick={() => console.log("helo")}>
              <YouTubeVideo
                key={"youtube_video_" + i}
                id={x.node.videoId}
                fluid_url={x.node.localThumbnail.childImageSharp.fluid}
              ></YouTubeVideo>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default videos
