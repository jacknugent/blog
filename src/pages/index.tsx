import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import PageLinks from "../components/PageLinks"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const image = css`
  max-width: 300px;
  margin-bottom: 1.45rem;
`
const links = css`
  display: flex;
  flex-wrap: nowrap;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div css={links}>
      <PageLinks />
      <PageLinks />
      <PageLinks />
      <PageLinks />
    </div>

    <h1>Hi people</h1>
    <p>Welcome to my blog.</p>
    <p>
      I know this looks just like the Gatsby starter page -- it's a work in
      progress.
    </p>
    <div css={image}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
