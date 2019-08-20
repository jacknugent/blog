import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import YouTubeEmbed from "../../components/YouTubeEmbed/YouTubeEmbed"

function LatestProject() {
  const video = useStaticQuery(graphql`
    {
      youtubeVideo {
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
  `).youtubeVideo

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
          <h1>Latest Project</h1>

          <h3>Codepen</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            inventore ex facere nostrum, cumque vitae veniam optio numquam animi
            nesciunt amet quibusdam asperiores tempore mollitia accusantium
            praesentium assumenda! Dicta, autem.
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
        <button>Link to Site</button>
      </div>
    </div>
  )
}
export default LatestProject
