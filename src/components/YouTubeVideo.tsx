import * as React from "react"
import { css } from "@emotion/core"
import { useState } from "react"
import youtube_red from "../utils/youtube-play-red.png"
import youtube_grey from "../utils/youtube-play-grey.png"

const YouTubeVideo = (props: YouTubeVideoProps) => {
  const youtubeIcon = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    width: 150px;
    height: 100px;
    display: block;
    margin: auto;
    @media (max-width: 600px) {
      width: 100px !important;
      height: 66px;
    }
  `

  const iframeContainer = css`
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    &:hover {
      cursor: pointer;
    }
  `
  const iframe = css`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 0;
    z-index: 0;
    background-color: black;
    background-size: calc(5vw + 40px), cover;
  `

  const youtubeVideo = css`
    padding-bottom: 2rem;
  `

  const loadingThumbnail = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  `
  const [isVideo, setIsVideo] = useState(false)

  return (
    <div css={youtubeVideo}>
      <div css={iframeContainer} onClick={x => setIsVideo(true)}>
        {isVideo ? (
          <iframe
            css={iframe}
            src={
              "https://www.youtube.com/embed/" +
              props.id +
              "?rel=0&autoplay=1&mute=0"
            }
          />
        ) : (
          <>
            <img css={youtubeIcon} src={youtube_red} />
            <img css={loadingThumbnail} src={props.url} />
          </>
        )}
      </div>
    </div>
  )
}

interface YouTubeVideoProps {
  id: string
  url: string
}

export default YouTubeVideo
