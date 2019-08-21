// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

// app imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import YouTubeEmbed from "../components/YouTubeEmbed/YouTubeEmbed"

function videos() {
  const videoInfo = useStaticQuery(graphql`
    {
      allYoutubeVideo(limit: 4) {
        edges {
          node {
            videoId
            localThumbnail {
              childImageSharp {
                fluid(maxWidth: 10000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allYoutubeVideo.edges

  const VideoGallery = css`
     {
      display: flex;
      flex-wrap: wrap;
      @media (min-width: 1000px) {
        margin-left: calc(-100vw / 2 + 750px / 2 + 15vw);
        margin-right: calc(-100vw / 2 + 750px / 2 + 15vw);
      }
    }
  `
  const videoContainer = css`
     {
      flex: 1 calc(50% - 2rem);
      margin: 0.5rem;
      @media (max-width: 900px) {
        flex: 1 100%;
        margin: 0.25rem 0;
      }
    }
  `

  return (
    <Layout>
      <SEO title="Videos" />
      <h1>Videos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        consequuntur vitae, ab libero sint eaque amet accusamus veniam
        consequatur est modi minus animi ad, nobis temporibus voluptas. Rerum,
        error labore?
      </p>
      <div css={VideoGallery}>
        {videoInfo.map((x: any, i: number) => (
          <div key={"youtube_video_" + i} css={videoContainer}>
            <YouTubeEmbed
              id={x.node.videoId}
              fluid_url={x.node.localThumbnail.childImageSharp.fluid}
            ></YouTubeEmbed>
          </div>
        ))}
      </div>
      <button
        css={css`
          display: block;
          margin: auto;
        `}
      >
        See the Channel
      </button>
    </Layout>
  )
}

export default videos
