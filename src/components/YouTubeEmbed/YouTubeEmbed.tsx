import * as React from "react"
import { useState } from "react"

import Thumbnail from "./Thumbnail"
import Frame from "./Frame"

const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const [isVideo, setIsVideo] = useState(false)

  return (
    <div>
      <div onClick={x => setIsVideo(true)}>
        {isVideo ? (
          <Frame videoId={props.id}></Frame>
        ) : (
          <Thumbnail fluid={props.fluid_url} />
        )}
      </div>
    </div>
  )
}

interface YouTubeEmbedProps {
  id: string
  fluid_url: string
}

export default YouTubeEmbed
