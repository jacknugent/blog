import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"

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
  color: black;
  text-decoration: none;
  font-size: 20px;
  padding: 1rem;

  // let Flex take over
  @media (max-width: 600px) {
    padding: 0.5rem 0;
  }
`

const Header = () => (
  <header css={header}>
    <Link to="/" css={link}>
      Home
    </Link>
    <Link to="/projects" css={link}>
      Projects
    </Link>
    <Link
      to="/contact"
      css={[
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

export default Header
