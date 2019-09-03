// framework imports - 1st party
import * as React from "react"

// lib imports - 3rd party
import { css } from "@emotion/core"
import { colors } from "../../utils/css/themes"

const latestWorksBackground = css`
  @media (min-width: 960px) {
    margin-left: calc(-0.5rem);
    margin-right: calc(-0.5rem);
  }

  padding: 2rem 0;
  background-color: ${colors.darkGrey};

  @media (max-width: 960px) {
    background-color: white;
    padding: 0;
  }
`

const latestWorks = css`
  max-width: 900px;
  margin: auto;
  box-sizing: border-box;
  background-color: white;
  border-radius: 40px;
  padding: 2rem 4rem;
  box-shadow: 0 0 10px 6px black;

  @media (max-width: 960px) {
    box-shadow: none;
    padding: 0.5rem;
  }
`
const MyExperience = (props: { children: React.ReactNode }) => {
  return (
    <div css={latestWorksBackground}>
      <div css={latestWorks}>{props.children}</div>
    </div>
  )
}
export default MyExperience
