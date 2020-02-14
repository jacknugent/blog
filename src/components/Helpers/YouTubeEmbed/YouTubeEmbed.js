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
      {isVideo ? (
        <Frame videoId={props.id}></Frame>
      ) : (
        props.fluid_url && (
          <Thumbnail
            setVideo={() => setIsVideo(true)}
            fluid={props.fluid_url}
          />
        )
      )}
    </div>
  );
};

export default YouTubeEmbed;
