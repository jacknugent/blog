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
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }
  h2 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
`
const mainStyle = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
const Layout = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global styles={globalStyles} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div css={mainStyle}>
          <main>{props.children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

interface LayoutProps {
  children: any
}

export default Layout
