import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image/withIEPolyfill"
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
  display: flex;
  flex-wrap: wrap;
  &:after {
    content: "";
    flex-grow: 99999999;
  }
`
const imageContainer = css`
  margin: 2px;
  background-color: violet;
  position: relative;
`

const mainImageCSS = css`
  position: absolute !important;
  top: 0 !important;
  width: 100% !important;
  vertical-align: bottom !important;
`

function stripes() {
  const data = useStaticQuery(graphql`
    {
      allStripeListYaml {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid(maxHeight: 9999) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allStripeListYaml.edges

  const renderImages = (images: any) => {
    return images.map((x: any, i: number) => (
      <div
        css={[
          imageContainer,
          css`
            width: ${x.node.image.childImageSharp.fluid.aspectRatio *
              600}px !important;
            flex-grow: ${x.node.image.childImageSharp.fluid.aspectRatio *
              600} !important;
          `,
        ]}
      >
        <i
          css={css`
            display: block;
            padding-bottom: ${100 /
              x.node.image.childImageSharp.fluid.aspectRatio}%;
          `}
        />
        {x.node.image.childImageSharp && (
          <Img
            css={mainImageCSS}
            key={i}
            objectFit="cover"
            fluid={x.node.image.childImageSharp.fluid}
          />
        )}
      </div>
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
      <section css={imageGallery}>{renderImages(data)}</section>
    </>
  )
}

export default stripes
