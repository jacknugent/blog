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

  @media (min-width: 960px) {
    margin-left: calc(-100vw / 2 + 960px / 2 + 0.5rem);
    margin-right: calc(-100vw / 2 + 960px / 2 + 0.5rem);
  }

  @media (max-width: 600px) {
    margin-left: calc(-0.5rem);
    margin-right: calc(-0.5rem);
  }
`
const imageContainer = css`
  margin: 0.25rem;

  position: relative;
  @media (max-width: 960px) {
    margin: 0.25rem 0;
  }
`

const image = css`
  position: absolute !important;
  top: 0 !important;
  width: 100% !important;
  vertical-align: bottom !important;
`

const imageOverlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #000000;
  transition: 0.25s;
  &:hover {
    opacity: 0.7;
  }
`

const imageText = css`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
  text-align: center;
  margin: 0;
`

const ImageGallery = (props: any) => {
  const data = useStaticQuery(graphql`
    {
      allStripeListYaml(sort: { fields: [title], order: ASC }) {
        edges {
          node {
            id
            title
            tags
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
    const filtered = images
      .filter(
        (x: any) =>
          props.search === "" ||
          x.node.title.toLowerCase().includes(props.search.toLowerCase())
      )
      .filter(
        (x: any) =>
          props.filter === "All" ||
          (x.node.tags && x.node.tags.includes(props.filter.toLowerCase()))
      )

    if (filtered.length > 0) {
      return filtered.map(
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
                  alt={x.node.title}
                  css={image}
                  fluid={x.node.image.childImageSharp.fluid}
                />
              }
              <div css={imageOverlay}>
                <h2 css={imageText}>{x.node.title}</h2>
              </div>
            </div>
          )
      )
    } else {
      return (
        <div
          css={css`
            width: 100%;
            height: 300px;
            line-height: 300px;
            text-align: center;
          `}
        >
          No results found.
        </div>
      )
    }
  }
  return <section css={imageGallery}>{renderImages(data)}</section>
}
export default ImageGallery
