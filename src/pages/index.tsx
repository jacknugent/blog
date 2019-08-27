// framework imports - 1st party
import * as React from "react"

// app imports
import Layout from "../components/layout"
import MyExperience from "../components/HomePage/Sections/MyExperience"
import Introduction from "../components/HomePage/Introduction"

// app imports
import SEO from "../components/seo"
import Section from "../components/HomePage/Section"
import PeerTestimonies from "../components/HomePage/Sections/PeerTestimonies"
import LatestProject from "../components/HomePage/Sections/LatestProject"
import LatestVideo from "../components/HomePage/Sections/LatestVideo"
import css from "@emotion/css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction></Introduction>
      <Section>
        <MyExperience></MyExperience>
        <hr
          css={css`
            @media (max-width: 600px) {
              display: none;
            }
          `}
        ></hr>
        <PeerTestimonies></PeerTestimonies>
      </Section>
      <Section>
        <LatestProject></LatestProject>
        <hr
          css={css`
            @media (max-width: 600px) {
              display: none;
            }
          `}
        ></hr>
        <LatestVideo></LatestVideo>
      </Section>
    </Layout>
  )
}

export default IndexPage
