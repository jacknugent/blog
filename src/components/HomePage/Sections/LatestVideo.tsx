// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

// app imports
import YouTubeEmbed from "../../YouTubeEmbed/YouTubeEmbed"
import { button } from "../../../utils/css/themes"
import styled from "@emotion/styled"

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
    return description.match(/\n(.*)(?=\n)/g)
  }

  const Container = styled.div`
    margin-top: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 600px) {
      margin: 1rem 0;
    }
  `

  const VideoText = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  `
  const LinkContainer = styled.div`
    text-align: center;
    margin-top: 1rem;
  `

  const YoutubeLink = styled.a`
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 0.5rem 0;
    width: 25%;
    @media (max-width: 600px) {
      width: 100%;
    }
  `

  const YouTubeTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 300;
  `
  return (
    <Container>
      <VideoText>
        <div
          css={css`
            flex: 1 0 0;
          `}
        >
          <h1>My Latest Video</h1>

          <YouTubeTitle>{video.title}</YouTubeTitle>
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
      </VideoText>
      <LinkContainer>
        <YoutubeLink
          css={button}
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCWTFGPpNQ0Ms6afXhaWDiRw/videos"
          target="_blank"
        >
          See More Videos
        </YoutubeLink>
      </LinkContainer>
    </Container>
  )
}
export default LatestVideo
