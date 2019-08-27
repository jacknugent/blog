import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import { theme } from "../utils/css/themes"
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
  color: black;
  text-decoration: none;
  font-size: 18px;
  padding: 0.75rem 1.25rem;
  margin: 1rem;
  border-radius: 0.5rem;
  color: ${theme.colors.blue};
  border: 1px solid ${theme.colors.blue};
  // let Flex take over
  @media (max-width: 600px) {
    padding: 0.5rem;
    margin: 1rem 0;
    width: 25%;
    text-align: center;
  }

  &:focus,
  &:hover {
    color: white;
    background-color: ${theme.colors.blue};
  }
`

const Header = () => (
  <header
    css={[
      header,
      css`
        position: ${globalHistory.location.pathname === "/"
          ? "absolute"
          : "relative"};
      `,
    ]}
  >
    <Link
      to="/"
      css={[
        link,
        css`
          color: ${globalHistory.location.pathname === "/"
            ? "white"
            : `${theme.colors.blue}`};
          background-color: ${globalHistory.location.pathname === "/"
            ? `${theme.colors.blue}`
            : "white"};
        `,
      ]}
    >
      Home
    </Link>
    <Link
      to="/projects"
      css={[
        link,
        css`
          color: ${globalHistory.location.pathname === "/projects"
            ? "white"
            : `${theme.colors.blue}`};
          background-color: ${globalHistory.location.pathname === "/projects"
            ? `${theme.colors.blue}`
            : "white"};
        `,
      ]}
    >
      Projects
    </Link>
    <Link
      to="/contact"
      css={[
        link,
        css`
          color: ${globalHistory.location.pathname === "/contact"
            ? "white"
            : `${theme.colors.blue}`};
          background-color: ${globalHistory.location.pathname === "/contact"
            ? `${theme.colors.blue}`
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
