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
      <p>
        I build software for Fortune 500 Companies and have a Film Analysis
        YouTube Channel with over 750,000 subscribers.
      </p>

      <div css={links}>
        <PageLink title="This Website" link="how-i-built-this-website" />
        <PageLink title="Resume" link="resume" />
        {/* <PageLink title="Stripes" link="stripes" /> */}
        <PageLink title="Videos" link="videos" />
        <PageLink
          title="Twitter"
          link="www.twitter.com/jacknugent27"
          external={true}
        />
        <PageLink
          title="LinkedIn"
          link="www.linkedin.com/in/jack-nugent-34ba98ba/"
          external={true}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
