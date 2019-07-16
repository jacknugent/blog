import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import background from "../utils/stripe-gallery/juno-background.jpg"

const iframeContainer = css`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: url(${background}) center center no-repeat;
  background-size: cover;
`
const iframe = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 0;
`

const youtubeVideo = css`
  padding-bottom: 2rem;
`

const imageGallery = css`
  max-width: 100%;
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
    <>
      <Layout>
        <SEO title="Stripes" />
        <h1>Stripes in Film</h1>
        <div css={youtubeVideo}>
          <div css={iframeContainer}>
            <iframe
              css={iframe}
              src="https://www.youtube.com/embed/Y1U4YkNkoG0?rel=0"
            />
          </div>
        </div>
      </Layout>
      <div css={imageGallery}>{renderImages(data)}</div>
    </>
  )
}

export default stripes
