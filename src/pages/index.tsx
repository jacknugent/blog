import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import PageLink from "../components/PageLink"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const image = css`
  max-width: 300px;
  margin-bottom: 1.45rem;
`
const links = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: block;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      I am a Software Engineer and Film Critic. I consult for Fortune 500
      Companies and have a YouTube Channel with over 750,000 subscribers. I'm
      also very humble.
    </p>

    <div css={links}>
      <PageLink title="Resumé" link="resume" />
      <PageLink title="Stripes" link="stripes" />
      <PageLink title="Videos" link="videos" />
      <PageLink title="Twitter" link="twitter" />
      <PageLink title="LinkedIn" link="linked-in" />
      <PageLink title="This Website" link="this-website" />
    </div>

    <div css={image}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
