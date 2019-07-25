import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const topImageStyle = css`
  margin-left: calc(-100vw / 2 + 960px / 2);
  margin-right: calc(-100vw / 2 + 960px / 2);
  margin-bottom: 3rem;

  @media (max-width: 960px) {
    margin-left: -1rem;
    margin-right: -1rem;
  }
`

function HowIBuilt() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "resume.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark(
        frontmatter: { path: { eq: "/how-i-built-this-website" } }
      ) {
        html
        frontmatter {
          title
          path
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="How I Built This" />
      <Img
        css={topImageStyle}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default HowIBuilt
