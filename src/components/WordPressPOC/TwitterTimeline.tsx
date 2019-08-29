import * as React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const TwitterTimeline = () => (
  <TwitterTimelineEmbed
    sourceType="profile"
    screenName="jacknugent27"
    options={{ height: 400 }}
  />
)

export default TwitterTimeline
