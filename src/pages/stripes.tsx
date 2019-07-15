import * as React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const iframeContainer = css`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`
const iframe = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 0;
`

function stripes() {
  return (
    <Layout>
      <SEO title="Stripes" />
      <h1>Stripes in Film</h1>
      <div css={iframeContainer}>
        <iframe
          css={iframe}
          src="https://www.youtube.com/embed/Y1U4YkNkoG0?rel=0"
        />
      </div>
    </Layout>
  )
}

export default stripes
