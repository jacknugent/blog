import * as React from "react"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"
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

function resume() {
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

  console.log(markdown)
  return (
    <Layout>
      <SEO title="Resumé" />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "resume.jpg" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data: any) => (
          <Img
            css={topImageStyle}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        )}
      />
      <h1>{markdown.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  )
}

export default resume
