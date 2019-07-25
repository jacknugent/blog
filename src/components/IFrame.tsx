import * as React from "react"
import { css } from "@emotion/core"

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
  background-color: black;
  background-size: calc(5vw + 40px), cover;
`

const IFrame = (props: IFrameProps) => {
  return (
    <div css={iframeContainer}>
      <iframe
        css={iframe}
        src={
          "https://www.youtube.com/embed/" +
          props.videoId +
          "?rel=0&autoplay=1&mute=0"
        }
        allowFullScreen
      />
    </div>
  )
}

interface IFrameProps {
  videoId: string
}

export default IFrame