import * as React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const link = css`
  text-align: center;
  height: 200px;
  line-height: 200px;
  padding: 20px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 5px;
  width: calc(50% - 40px - 10px - 4px);
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: block;
    width: auto;
    margin: 0 0 10px 0;
  }
`

const PageLink = (props: PageLink) => (
  <Link to={props.link} css={link}>
    {props.title}
  </Link>
)

interface PageLink {
  title?: string
  link?: string
}

PageLink.defaultProps = {
  title: `TBD`,
  link: "/",
}
export default PageLink
