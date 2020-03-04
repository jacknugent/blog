import * as React from "react";

// app imports
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Title from "../../components/Helpers/YouTubeMash/Title";
import MashFooter from "../../components/Helpers/YouTubeMash/MashFooter";
import YouTubeEmbed from "../../components/Helpers/YouTubeEmbed/YouTubeEmbed";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

const VideoContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 1rem;
`;
const VideoTitle = styled.h1`
  text-align: center;
`;
const VideoDescription = styled.p``;

const Rank = styled.p`
  text-align: center;
`;
const IndividualVideo = props => {
  const description = props.data.youtubeVideo.description.match(/[^\n]+/g);

  return (
    <Layout
      header={<Title>Random Video</Title>}
      footer={<MashFooter></MashFooter>}
    >
      <SEO title="Random Video" />
      <VideoContainer>
        <YouTubeEmbed
          id={props.data.youtubeVideo.videoId}
          fluid_url={
            props.data.youtubeVideo.localThumbnail.childImageSharp.fluid
          }
        ></YouTubeEmbed>
        <VideoTitle>{props.data.youtubeVideo.title}</VideoTitle>
        <VideoDescription>
          {description.length > 1 &&
            description[1].length > 55 &&
            description[1]}
        </VideoDescription>
        <Rank>
          Ranking: {props.pageContext.rank}/{props.pageContext.totalVideos}
        </Rank>
      </VideoContainer>
    </Layout>
  );
};

export default IndividualVideo;

export const pageQuery = graphql`
  query($videoId: String!) {
    youtubeVideo(videoId: { eq: $videoId }) {
      videoId
      title
      description
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
