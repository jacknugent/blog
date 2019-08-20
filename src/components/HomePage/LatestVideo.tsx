import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed"

function LatestVideo() {
  const video = useStaticQuery(graphql`
    {
      youtubeVideo {
        title
        description
        localThumbnail {
          childImageSharp {
            fluid(maxWidth: 10000) {
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
        @media (min-width: 900px) {
          margin-left: calc(-100vw / 2 + 750px / 2 + 3rem);
          margin-right: calc(-100vw / 2 + 750px / 2 + 3rem);
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
          <h1>Latest Video</h1>

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
          `}
        >
          <YouTubeEmbed
            id={video.videoId}
            fluid_url={video.localThumbnail.childImageSharp.fluid}
          ></YouTubeEmbed>
        </div>
      </div>
      <div>
        <button
          css={css`
            transform: translateY(-100%);
          `}
        >
          Link to Site
        </button>
      </div>
    </div>
  )
}
export default LatestVideo
