import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import FacebookTimeline from "../components/WordPressPOC/FacebookTimeline"
import TwitterTimeline from "../components/WordPressPOC/TwitterTimeline"
import GoogleCalendar from "../components/WordPressPOC/GoogleCalendar"
import SEO from "../components/seo"

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
      <SEO title="Headless Wordpress" />
      <h1 dangerouslySetInnerHTML={{ __html: wp.wordpressPage.title }} />
      <div dangerouslySetInnerHTML={{ __html: wp.wordpressPage.content }} />
      <h1 dangerouslySetInnerHTML={{ __html: wp.wordpressPost.title }} />
      <div dangerouslySetInnerHTML={{ __html: wp.wordpressPost.content }} />
      <p>{wp.wordpressPost.acf.twitter}</p>
      <p>{wp.wordpressPost.acf.facebook}</p>

      <span>
        <FacebookTimeline></FacebookTimeline>
        <TwitterTimeline></TwitterTimeline>
      </span>
      <GoogleCalendar></GoogleCalendar>
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
