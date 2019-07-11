import { Link } from "gatsby"
import * as React from "react"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const link = css`
  color: white;
  text-decoration: none;
`
const background = css`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const text = css`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Header = (props: HeaderProps) => (
  <header css={background}>
    <div css={text}>
      <h1 css={{ margin: 0 }}>
        <Link to="/" css={link}>
          {props.siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
