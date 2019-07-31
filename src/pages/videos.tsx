import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import YouTubeVideo from "../components/YouTubeVideo"

function videos() {
  const [clickedVideo, setClickedVideo] = useState(null)

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    margin-left: calc(-100vw / 2 + 960px / 2 + 1rem);
    margin-right: calc(-100vw / 2 + 960px / 2 + 1rem);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 960px) {
      grid-template-columns: repeat(1, 1fr);
      margin-left: -1rem;
      margin-right: -1rem;
    }
  `
  const videoContainer = css``

  const handleIFrameClick = (e: any, i: number) => {
    const video_width = window.innerWidth / 3 - 18
    const aspect_ratio = 16 / 9
    const video_height = video_width / aspect_ratio
    const row = Math.floor(i / 3)
    const first_in_row = Number.isInteger(i / 3) ? 0 : 1

    console.log("row", row)
    console.log(first_in_row, "first_in_row")
    const expanded_video = video_height * 2 + 9

    setClickedVideo(i)
    window.scroll({
      top: 98 + (row + first_in_row) * (video_height + 9),
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <div
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <SEO title="Videos" />
        <div css={youtubeVideoGallery}>
          {videoInfo.map((x: any, i: number) => {
            const video = (
              <YouTubeVideo
                key={"youtube_video_" + i}
                id={x.node.videoId}
                fluid_url={x.node.localThumbnail.childImageSharp.fluid}
              ></YouTubeVideo>
            )

            return i === clickedVideo ? (
              <div
                css={[
                  videoContainer,
                  css`
                    grid-column: 1 / 4;
                    grid-row: ${i / 4} / ${i / 3 + 4};
                    // -webkit-transition: width 0.5s; /* Safari prior 6.1 */
                    // transition: width 0.5s;
                    -webkit-transition: max-width 0.5s; /* Safari prior 6.1 */
                    transition: max-width 0.5s;
                  `,
                ]}
                onClick={() => {}}
              >
                {video}
              </div>
            ) : (
              <div
                css={videoContainer}
                onClick={e => {
                  handleIFrameClick(e, i)
                }}
              >
                {video}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default videos
