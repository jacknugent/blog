import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"

function videos() {
  return (
    <Layout>
      <SEO title="Videos" />
      <h1>hello!</h1>
    </Layout>
  )
}

export default videos
