import * as React from "react"
import { css } from "@emotion/core"

const dot = css`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: block;
  text-align: center;
  margin: 1rem;
`
const footer = css`
  flex-shrink: 0;
`

const Footer = () => (
  <footer css={footer}>
    <div>
      <a css={dot}>G</a>
      <a css={dot}>F</a>
      <a css={dot}>T</a>
    </div>
  </footer>
)
export default Footer
