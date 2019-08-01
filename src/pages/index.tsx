import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageLink from "../components/PageLink"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import Img from "gatsby-image"

const links = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: block;
  }
`

const IndexPage = () => {
  const icon = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "jack.coding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(icon)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        css={css`
          margin-top: 2rem;
          text-align: center;
        `}
      >
        <Img
          alt="Me coding at the MIT Hackathon"
          css={css`
            width: 100%;
            max-width: 300px;
            display: inline-block;
          `}
          fluid={icon.placeholderImage.childImageSharp.fluid}
        />
      </div>
      <p>
        I am a Software Engineer and Film Critic. I consult for Fortune 500
        Companies and have a YouTube Channel with over 750,000 subscribers.
      </p>

      <div css={links}>
        <PageLink title="Resume" link="resume" />
        <PageLink title="Stripes" link="stripes" />
        <PageLink title="Videos" link="videos" />
        <PageLink
          title="Twitter"
          link="www.twitter.com/jacknugent27"
          external={true}
        />
        <PageLink
          title="LinkedIn"
          link="www.linkedin.com/in/jack-nugent-34ba98ba/"
          external={true}
        />
        <PageLink title="This Website" link="how-i-built-this-website" />
      </div>
    </Layout>
  )
}

export default IndexPage
