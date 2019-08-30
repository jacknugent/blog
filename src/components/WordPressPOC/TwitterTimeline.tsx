import * as React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import css from "@emotion/css"

const TwitterTimeline = () => (
  <span
    css={css`
      width: 50%;
      display: inline-block;
      @media (max-width: 800px) {
        width: 100%;
        max-width: 100%;
        display: block;
      }
    `}
  >
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="jacknugent27"
      options={{ height: 500 }}
    />
  </span>
)

export default TwitterTimeline
