import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

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
  position: relative;
`

const mainImageCSS = css`
  position: absolute !important;
  top: 0 !important;
  width: 100% !important;
  vertical-align: bottom !important;
`

function ImageGallery() {
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
    return images.map(
      (x: any, i: number) =>
        x.node.image && (
          <div
            key={i}
            css={[
              imageContainer,
              css`
                width: ${x.node.image.childImageSharp.fluid.aspectRatio *
                  450}px !important;
                flex-grow: ${x.node.image.childImageSharp.fluid.aspectRatio *
                  450} !important;
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
            {
              <Img
                css={mainImageCSS}
                fluid={x.node.image.childImageSharp.fluid}
              />
            }
          </div>
        )
    )
  }
  return <section css={imageGallery}>{renderImages(data)}</section>
}
export default ImageGallery
