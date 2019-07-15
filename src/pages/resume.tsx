import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function resume(props: resume) {
  const page = props.data.markdownRemark
  return (
    <Layout>
      <SEO title="Resumé" />
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

interface resume {
  data: any
}

export default resume

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { path: { eq: "/resume" } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
