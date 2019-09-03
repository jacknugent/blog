import * as React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import css from "@emotion/css"

const TwitterTimeline = (props: TwitterProps) => (
  <span
    css={css`
      width: 50%;

      display: inline-flex;
      justify-content: center;
      @media (max-width: 800px) {
        width: 100%;
        max-width: 300px;
        margin: auto;
        display: block;
      }
    `}
  >
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={props.page}
      options={{ height: 500 }}
    />
  </span>
)

interface TwitterProps {
  page: "twitter"
}

export default TwitterTimeline
