import * as React from "react"
import { css } from "@emotion/core"
import { useState } from "react"
import youtube_red from "../utils/youtube-play-red.png"
import youtube_grey from "../utils/youtube-play-grey.png"

const YouTubeVideo = (props: YouTubeVideoProps) => {
  const iframeContainer = css`
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  `
  const iframe = css`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 0;
    z-index: 0;
    background: url(${youtube_red}) center center no-repeat,
      url(${`https://img.youtube.com/vi/` + props.id + `/maxresdefault.jpg`})
        center center no-repeat;

    background-size: calc(5vw + 40px), cover;
  `

  const youtubeVideo = css`
    padding-bottom: 2rem;
  `

  const loadingThumbnail = css`
    background: url(${youtube_grey}) center center no-repeat,
      url(${`https://img.youtube.com/vi/` + props.id + `/maxresdefault.jpg`})
        center center no-repeat;
    background-size: calc(5vw + 40px), cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    &:hover {
      cursor: pointer;
      background: url(${youtube_red}) center center no-repeat,
        url(${`https://img.youtube.com/vi/` + props.id + `/maxresdefault.jpg`})
          center center no-repeat;
      background-size: calc(5vw + 40px), cover;
    }
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
          <div css={loadingThumbnail} />
        )}
      </div>
    </div>
  )
}

interface YouTubeVideoProps {
  id: string
}

export default YouTubeVideo
