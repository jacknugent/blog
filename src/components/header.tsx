import { Link } from "gatsby"
import * as React from "react"
import { css } from "@emotion/core"
import { colors, button } from "../utils/css/themes"
import { useEffect, useState } from "react"

const header = css`
  margin: 0 auto;
  width: 100%;
  text-align: left;
  display: flex;
  position: fixed;
  background-color: white;
  transition: 0.3s;
  @media (max-width: 600px) {
    position: relative;
    justify-content: space-around;
  }
`
const link = css`
  font-size: 18px;
  padding: 0.75rem 1.25rem;
  margin: 0.5rem;
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
  const [isHeaderMoved, setIsHeaderMoved] = useState()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        if (!isHeaderMoved) {
          setIsHeaderMoved(true)
        }
      } else if (isHeaderMoved) {
        setIsHeaderMoved(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHeaderMoved])

  return (
    <header
      css={css`
        position: relative;
        z-index: 3;
      `}
    >
      <div
        css={[
          header,
          css`
            @media (min-width: 600px) {
              box-shadow: ${isHeaderMoved ? "0 -1px 4px .5px black" : "none"};
            }
          `,
        ]}
      >
        <Link activeClassName="active" to="/" css={[button, link]}>
          Home
        </Link>
        <Link activeClassName="active" to="/projects/" css={[button, link]}>
          Projects
        </Link>
        <Link
          activeClassName="active"
          to="/contact/"
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
      </div>
    </header>
  )
}

export default Header
