/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import { Global, css } from "@emotion/core"

const globalStyles = css`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
    height: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
  p,
  a {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
`
const body = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 0.5rem 1.45rem;
  padding-top: 0;
  flex-grow: 1;
`
const Layout = (props: LayoutProps) => {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      `}
    >
      <Global styles={globalStyles} />
      <Header />
      <div css={body}>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}
interface LayoutProps {
  children: any
}

export default Layout
