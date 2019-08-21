// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

// app imports
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed"

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
        <a href="http://youtube.com/nowyouseeit" target="_blank">
          See More Videos
        </a>
      </div>
    </div>
  )
}
export default LatestVideo
