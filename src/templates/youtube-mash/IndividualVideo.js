import * as React from "react";

// app imports
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Title from "../../components/Helpers/YouTubeMash/Title";
import MashFooter from "../../components/Helpers/YouTubeMash/MashFooter";
import YouTubeEmbed from "../../components/Helpers/YouTubeEmbed/YouTubeEmbed";
import { graphql } from "gatsby";

const IndividualVideo = props => (
  <Layout
    header={<Title>Video Rankings</Title>}
    footer={<MashFooter></MashFooter>}
  >
    <SEO title="Video Rankings" />
    <YouTubeEmbed
      id={props.data.youtubeVideo.videoId}
      fluid_url={props.data.youtubeVideo.localThumbnail.childImageSharp.fluid}
    ></YouTubeEmbed>
    <h1>{props.data.youtubeVideo.title}</h1>
  </Layout>
);

export default IndividualVideo;

export const pageQuery = graphql`
  query($videoId: String!) {
    youtubeVideo(videoId: { eq: $videoId }) {
      videoId
      title
      localThumbnail {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
