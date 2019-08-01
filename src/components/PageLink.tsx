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
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    height: 200px;

    display: block;
    width: auto;
    margin: 0 0 10px 0;
  }
  @media (max-width: 500px) {
    height: 150px;
    line-height: 150px;
    display: block;
    width: auto;
    margin: 0 0 10px 0;
  }
`

const PageLink = (props: PageLink) =>
  props.external ? (
    <a href={"//" + props.link} target="_blank" css={link}>
      {props.title}
    </a>
  ) : (
    <a href={props.link} css={link}>
      {props.title}
    </a>
  )

interface PageLink {
  title?: string
  link?: string
  external?: boolean
}

PageLink.defaultProps = {
  title: `TBD`,
  link: "/",
  external: false,
}
export default PageLink
