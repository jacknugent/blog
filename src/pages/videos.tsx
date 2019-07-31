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
      grid-gap: 0.5rem;
    }

    @media (max-width: 960px) {
      grid-template-columns: repeat(1, 1fr);
      margin-left: 0;
      margin-right: 0;
    }
  `
  const videoContainer = css``

  const handleIFrameClick = (e: any, i: number) => {
    setClickedVideo(i)

    if (window.innerWidth > 960) {
      const row_count = window.innerWidth > 1200 ? 3 : 2
      const video_margin = window.innerWidth > 1200 ? 18 : 23
      const video_width = window.innerWidth / row_count - video_margin
      const aspect_ratio = 16 / 9
      const video_height = video_width / aspect_ratio

      const row = Math.floor(i / row_count)
      const first_in_row = Number.isInteger(i / row_count) ? 0 : 1

      window.scroll({
        top: 98 + (row + first_in_row) * (video_height + 9),
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
                    grid-column: 1 / 4;
                    grid-row: ${Math.ceil(i / 3) + 1} / ${Math.ceil(i / 3) + 3};

                    @media (max-width: 1200px) {
                      grid-column: 1 / 3;
                      grid-row: ${Math.ceil(i / 2) + 1} /
                        ${Math.ceil(i / 2) + 2};
                    }

                    @media (max-width: 960px) {
                      grid-column: auto;
                      grid-column: auto;
                    }
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
