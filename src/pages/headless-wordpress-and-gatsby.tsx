import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import FacebookTimeline from "../components/WordPressPOC/FacebookTimeline"
import TwitterTimeline from "../components/WordPressPOC/TwitterTimeline"
import GoogleCalendar from "../components/WordPressPOC/GoogleCalendar"
import SEO from "../components/seo"
import css from "@emotion/css"

const PageTemplate = props => {
  const wp = useStaticQuery(graphql`
    {
      wordpressPage {
        title
        content
      }
      wordpressPost {
        title
        content
        acf {
          facebook
          twitter
        }
      }
    }
  `)

  return (
    <Layout>
      <div
        css={css`
          max-width: 750px;
          margin: auto;
        `}
      >
        <SEO title="Headless Wordpress" />
        <h1 dangerouslySetInnerHTML={{ __html: wp.wordpressPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: wp.wordpressPage.content }} />
        <h1 dangerouslySetInnerHTML={{ __html: wp.wordpressPost.title }} />
        <div dangerouslySetInnerHTML={{ __html: wp.wordpressPost.content }} />

        <span>
          <FacebookTimeline
            page={wp.wordpressPost.acf.facebook}
          ></FacebookTimeline>
          <TwitterTimeline
            page={wp.wordpressPost.acf.twitter}
          ></TwitterTimeline>
        </span>
        <GoogleCalendar></GoogleCalendar>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`