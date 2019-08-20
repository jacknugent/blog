import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { theme } from "../utils/css/themes"

const topImageStyle = css`
  margin-left: calc(-100vw / 2 + 975px / 2);
  margin-right: calc(-100vw / 2 + 975px / 2);

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

function resume() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "resume.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark(frontmatter: { path: { eq: "/resume" } }) {
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
      <SEO title="Resumé" />
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

export default resume
