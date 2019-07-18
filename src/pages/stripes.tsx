import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../utils/stripe-gallery/juno-background.jpg"
import ImageGallery from "../components/ImageGallery"

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
  z-index: 0;
`

const youtubeVideo = css`
  padding-bottom: 2rem;
`

const loadingThumbnail = css`
  background: url(${background}) center center no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`

function stripes() {
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
            <div css={loadingThumbnail} />
          </div>
        </div>
        <ImageGallery />
      </Layout>
    </>
  )
}

export default stripes
