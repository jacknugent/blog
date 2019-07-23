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
    width: 100%;
    margin-top: 0.5rem;
    margin-left: 0;
    margin-right: 0;
  }
`

function resume(props: resume) {
  const markdown = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { path: { eq: "/resume" } }) {
        html
        frontmatter {
          title
          path
        }
      }
    }
  `).markdownRemark

  const topImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "resume.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).placeholderImage.childImageSharp

  console.log(markdown)
  return (
    <Layout>
      <SEO title="Resumé" />
      <Img css={topImageStyle} fluid={topImage.fluid} />
      <h1>{markdown.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
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
