import * as React from "react"
import { css } from "@emotion/core"

const link = css`
  padding: 50px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 3px;
  width: 100px;
  text-align: center;
`

const pageLinks = () => <span css={link}>Test</span>

export default pageLinks
