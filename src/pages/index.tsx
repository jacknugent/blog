import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageLink from "../components/PageLink"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import Img from "gatsby-image"

const links = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: block;
  }
`
const introduction = css`
  text-align: center;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        css={css`
          margin-top: 1rem;
          text-align: center;
        `}
      ></div>
      <div css={introduction}>
        <h1>Jack Nugent</h1>
        <p>
          I build software for Fortune 500 Companies and have a Film Analysis
          YouTube Channel with over 750,000 subscribers.
        </p>
      </div>
      <div css={links}></div>
    </Layout>
  )
}

export default IndexPage
