import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import { theme } from "../utils/themes"

const link = css`
  color: black;
  text-decoration: none;
  font-size: 40px;
  padding: 1rem 0;
`
const background = css`
  background: ${theme.colors.red};
`
const text = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.25rem 1.0875rem;
  @media (max-width: 600px) {
    text-align: center;
  }
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
