import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { theme } from "../utils/themes"

const topImageStyle = css`
  margin-left: calc(-100vw / 2 + 960px / 2);
  margin-right: calc(-100vw / 2 + 960px / 2);

  @media (max-width: 960px) {
    margin-left: -1rem;
    margin-right: -1rem;
  }
`
const image_subtitle = css`
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  color: ${theme.colors.dark_grey};
`
function HowIBuilt() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "performance-test.png" }) {
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
          image
          image_subtitle
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
      <p css={image_subtitle}>
        {data.markdownRemark.frontmatter.image_subtitle}
      </p>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default HowIBuilt
