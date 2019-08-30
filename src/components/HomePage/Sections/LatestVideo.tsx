// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

// app imports
import YouTubeEmbed from "../../YouTubeEmbed/YouTubeEmbed"
import { colors } from "../../../utils/css/themes"

function LatestVideo() {
  const video = useStaticQuery(graphql`
    {
      youtubeVideo {
        title
        description
        videoId
        localThumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `).youtubeVideo

  const parseDescription = (description: string) => {
    // replace the social media links at the end.
    description = description.replace(/Twitter.*\n.*/g, "")

    // replace the ad at the beginning
    return description.replace(/.*https:[/.a-z0-9]*/g, "")
  }

  return (
    <div
      css={css`
        margin-top: 3rem;
        margin-bottom: 1rem;
        @media (max-width: 600px) {
          margin: 1rem 0;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          @media (max-width: 1200px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            flex: 1 0 0;
          `}
        >
          <h1>My Latest Video</h1>

          <h3>{video.title}</h3>
          <p
            css={css`
              margin-right: 1rem;
            `}
          >
            {parseDescription(video.description)}
          </p>
        </div>

        <div
          css={css`
            flex: 1 0 0;
            margin: auto;
            @media (max-width: 1200px) {
              margin: 0;
            }
          `}
        >
          <YouTubeEmbed
            id={video.videoId}
            fluid_url={video.localThumbnail.childImageSharp.fluid}
          ></YouTubeEmbed>
        </div>
      </div>
      <div
        css={css`
          text-align: center;
          margin-top: 1rem;
        `}
      >
        <a
          css={css`
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: 1px solid ${colors.blue};
            color: ${colors.blue};
          `}
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCWTFGPpNQ0Ms6afXhaWDiRw/videos"
          target="_blank"
        >
          See More Videos
        </a>
      </div>
    </div>
  )
}
export default LatestVideo
