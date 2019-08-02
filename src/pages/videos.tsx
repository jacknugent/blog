import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import YouTubeVideo from "../components/YouTubeVideo"

function videos() {
  const [clickedVideo, setClickedVideo] = useState(null)

  const marginRem = 1

  const videoInfo = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            videoId
            localThumbnail {
              childImageSharp {
                fluid(maxWidth: 10000) {
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
    margin-left: calc(-100vw / 2 + 960px / 2 + ${marginRem / 2 + "rem"});
    margin-right: calc(-100vw / 2 + 960px / 2 + ${marginRem / 2 + "rem"});
    @media (max-width: 960px) {
      margin-left: 0;
      margin-right: 0;
    }
  `
  const videoContainer = css`
    flex: 0 calc(50% - ${marginRem + "rem"});
    margin: 0.5rem;

    @media (max-width: 960px) {
      margin-bottom: 0.5rem;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      flex: 0 100%;
    }
  `

  const handleIFrameClick = (e: any, i: number) => {
    setClickedVideo(i)

    const remToPx = 18
    const headerHeight = 89

    if (window.innerWidth > 960) {
      const row_count = 2

      // calculate the amount of pixels per rem styling
      const marginPx = marginRem * remToPx

      const rowVideoMargin = (marginPx * row_count) / 2
      const outerMargin = marginPx / 2

      // calculate total spacing between videos in row
      // using the marginPx variable to allow quick margin cuztomization

      const video_width =
        window.innerWidth / row_count - rowVideoMargin - outerMargin
      const aspect_ratio = 16 / 9
      const video_height = video_width / aspect_ratio + rowVideoMargin

      const row = Math.floor(i / row_count)
      const first_in_row = Number.isInteger(i / row_count) ? 0 : 1

      window.scroll({
        top: headerHeight + (row + first_in_row) * video_height,
        left: 0,
        behavior: "smooth",
      })
    }
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
                    flex: 0 100%;
                    transition: all 0.5s;
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
