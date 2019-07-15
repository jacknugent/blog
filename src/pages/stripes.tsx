import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

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
  const data = useStaticQuery(graphql`
    {
      allStripeListYaml {
        edges {
          node {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allStripeListYaml.edges

  console.log(data)
  const renderImages = (images: any) => {
    return images.map((x: any, i: number) => (
      <Img key={i} fluid={x.node.image.childImageSharp.fluid} />
    ))
  }
  return (
    <Layout>
      <SEO title="Stripes" />
      <h1>Stripes in Film</h1>
      <div css={iframeContainer}>
        <iframe
          css={iframe}
          src="https://www.youtube.com/embed/Y1U4YkNkoG0?rel=0"
        />
        <div id="Y1U4YkNkoG0" />
        <script src="https://labnol.googlecode.com/files/youtube.js" />
      </div>
      <div>{renderImages(data)}</div>
    </Layout>
  )
}

export default stripes
