import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGallery from "../components/ImageGallery"
import StripeSearch from "../components/StripeSearch"
import YouTubeVideo from "../components/YouTubeVideo"
import { useStaticQuery, graphql } from "gatsby"

function stripes() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const stripe = useStaticQuery(graphql`
    query MyQuery {
      youtubeVideo(
        title: { eq: "Stripes in Movies: Why Do Characters Wear Them?" }
      ) {
        title
        localThumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `).youtubeVideo.localThumbnail

  return (
    <>
      <Layout>
        <SEO title="Stripes" />
        <h1>Stripes in Film</h1>
        <YouTubeVideo
          id="Y1U4YkNkoG0"
          fluid_url={stripe.childImageSharp.fluid}
        ></YouTubeVideo>
        <StripeSearch
          searchValue={search}
          search={(e: any) => setSearch(e.target.value)}
          filterSelection={filter}
          filter={(e: any) => setFilter(e.target.value)}
        ></StripeSearch>
        <ImageGallery search={search} filter={filter} />
      </Layout>
    </>
  )
}

export default stripes
