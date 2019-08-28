import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import { colors, button } from "../utils/css/themes"

const header = css`
  margin: 0 auto;
  width: 100%;
  text-align: left;
  display: flex;
  @media (max-width: 600px) {
    justify-content: space-around;
  }
`
const link = css`
  font-size: 18px;
  padding: 0.75rem 1.25rem;
  margin: 1rem;
  // let Flex take over
  @media (max-width: 600px) {
    padding: 0.5rem;
    margin: 0.25rem 0;
    width: 25%;
    text-align: center;
  }
  &.active {
    color: white;
    background-color: ${colors.blue};
  }
`

const Header = () => {
  return (
    <header css={header}>
      <Link activeClassName="active" to="/" css={[button, link]}>
        Home
      </Link>
      <Link activeClassName="active" to="/projects" css={[button, link]}>
        Projects
      </Link>
      <Link
        activeClassName="active"
        to="/contact"
        css={[
          button,
          link,
          css`
            margin-left: auto;
            @media (max-width: 600px) {
              margin-left: 0;
            }
          `,
        ]}
      >
        Contact
      </Link>
    </header>
  )
}

export default Header
