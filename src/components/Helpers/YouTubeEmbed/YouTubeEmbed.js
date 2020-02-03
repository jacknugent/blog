// framework imports - 1st party
import * as React from "react";
import { useState } from "react";

// app imports
import Thumbnail from "./Thumbnail";
import Frame from "./Frame";

const YouTubeEmbed = props => {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div>
      <div onClick={() => setIsVideo(true)}>
        {isVideo ? (
          <Frame videoId={props.id}></Frame>
        ) : (
          <Thumbnail fluid={props.fluid_url} />
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
