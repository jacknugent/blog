import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { useState } from "react"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import YouTubeThumbnail from "../components/YouTubeThumbnail"
import IFrameModal from "../components/IFrameModal"

function videos() {
  const [isModal, setIsModal] = useState(false)
  const [videoId, setVideoId] = useState("")

  const videoInfo = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            videoId
            localThumbnail {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allYoutubeVideo.edges

  const youtubeVideoGallery = css`
    display: flex;
    flex-wrap: wrap;
  `
  const videoContainer = css`
    margin: 0.5rem;
    flex-grow: 1;
    width: 33%;

    @media (max-width: 600px) {
      width: 50%;
    }
  `

  const handleModal = (videoId: string) => {
    setIsModal(true)
    setVideoId(videoId)
  }
  return (
    <Layout>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        <SEO title="Videos" />
        <div css={youtubeVideoGallery}>
          {videoInfo.map((x: any, i: number) => (
            <div
              css={videoContainer}
              onClick={e => handleModal(x.node.videoId)}
            >
              <YouTubeThumbnail
                fluid={x.node.localThumbnail.childImageSharp.fluid}
              />
            </div>
          ))}
        </div>
      </div>
      <IFrameModal
        isModal={isModal}
        showModal={(e: boolean) => setIsModal(e)}
        videoId={videoId}
      ></IFrameModal>
    </Layout>
  )
}

export default videos
