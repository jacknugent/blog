import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"

const header = css`
  flex-shrink: 0;
`
const link = css`
  color: black;
  text-decoration: none;
  font-size: 20px;
  padding: 1rem;
`
const text = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.25rem 1.0875rem;
  @media (max-width: 600px) {
    text-align: center;
  }
`

const Header = () => (
  <header css={header}>
    <div css={text}>
      <h1 css={{ margin: 0 }}>
        <Link to="/" css={link}>
          Home
        </Link>
        <Link to="/projects" css={link}>
          Projects
        </Link>
        <Link to="/videos" css={link}>
          Videos
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
