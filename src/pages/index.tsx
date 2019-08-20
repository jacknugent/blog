import * as React from "react"
import Layout from "../components/layout"
import MyExperience from "../components/HomePage/MyExperience"
import Introduction from "../components/HomePage/Introduction"
import PeerTestimonies from "../components/HomePage/PeerTestimonies"
import LatestProject from "../components/HomePage/LatestProject"
import LatestVideo from "../components/HomePage/LatestVideo"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction></Introduction>
      <MyExperience></MyExperience>
      <PeerTestimonies></PeerTestimonies>
      <LatestProject></LatestProject>
      <LatestVideo></LatestVideo>
    </Layout>
  )
}

export default IndexPage
