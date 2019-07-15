import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function BasicPage(props: BasicPage) {
  const page = props.data.markdownRemark

  console.log(page)
  return (
    <Layout>
      <SEO title="Resumé" />
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

interface BasicPage {
  data: any
}

export default BasicPage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
