import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import { colors, button } from "../utils/css/themes"
import { globalHistory } from "@reach/router"

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
`

const Header = () => (
  <header css={header}>
    <Link
      to="/"
      css={[
        button,
        link,
        css`
          color: ${globalHistory.location.pathname === "/"
            ? "white"
            : `${colors.blue}`};
          background-color: ${globalHistory.location.pathname === "/"
            ? `${colors.blue}`
            : "white"};
        `,
      ]}
    >
      Home
    </Link>
    <Link
      to="/projects"
      css={[
        button,

        link,
        css`
          color: ${globalHistory.location.pathname === "/projects"
            ? "white"
            : `${colors.blue}`};
          background-color: ${globalHistory.location.pathname === "/projects"
            ? `${colors.blue}`
            : "white"};
        `,
      ]}
    >
      Projects
    </Link>
    <Link
      to="/contact"
      css={[
        button,
        link,
        css`
          color: ${globalHistory.location.pathname === "/contact"
            ? "white"
            : `${colors.blue}`};
          background-color: ${globalHistory.location.pathname === "/contact"
            ? `${colors.blue}`
            : "white"};

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
