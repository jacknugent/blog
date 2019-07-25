import * as React from "react"
import { useState } from "react"
import YouTubeThumbnail from "../components/YouTubeThumbnail"
import IFrame from "../components/IFrame"

const YouTubeVideo = (props: YouTubeVideoProps) => {
  const [isVideo, setIsVideo] = useState(false)

  return (
    <div>
      <div onClick={x => setIsVideo(true)}>
        {isVideo ? (
          <IFrame videoId={props.id}></IFrame>
        ) : (
          <YouTubeThumbnail fluid={props.fluid_url} />
        )}
      </div>
    </div>
  )
}

interface YouTubeVideoProps {
  id: string
  fluid_url: string
}

export default YouTubeVideo
