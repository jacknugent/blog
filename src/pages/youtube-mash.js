// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";

// app imports
import Layout from "../components/layout";
import SEO from "../components/seo";
import YouTubeEmbed from "../components/Helpers/YouTubeEmbed/YouTubeEmbed";
import styled from "@emotion/styled";
import { screenSize } from "../utils/css/themes";

const YoutubeMash = () => {
  const [videoOne, setVideoOne] = useState(null);
  const [videoTwo, setVideoTwo] = useState(null);

  const videos = useStaticQuery(graphql`
    {
      videos: allYoutubeVideo {
        nodes {
          id
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
    }
  `).videos.nodes;

  const Videos = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: ${screenSize.tablet}) {
      display: block;
    }
  `;

  const YouTubeContainer = styled.div`
    width: 50%;
    @media (max-width: ${screenSize.tablet}) {
      width: 100%;
    }
  `;

  const Or = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  `;

  useEffect(() => {
    const random_item_one = Math.floor(Math.random() * videos.length);
    setVideoOne(videos.splice(random_item_one, 1)[0]);
    const random_item_two = Math.floor(Math.random() * videos.length);
    setVideoTwo(videos.splice(random_item_two, 1)[0]);
  }, []);

  return (
    <>
      <SEO title="Projects" />
      <Videos>
        <YouTubeContainer>
          <YouTubeEmbed
            videoId={videoOne && videoOne.id}
            fluid_url={
              videoOne && videoOne.localThumbnail.childImageSharp.fluid
            }
          ></YouTubeEmbed>
        </YouTubeContainer>
        <Or>Or</Or>
        <YouTubeContainer>
          <YouTubeEmbed
            videoId={videoTwo && videoTwo.id}
            fluid_url={
              videoTwo && videoTwo.localThumbnail.childImageSharp.fluid
            }
          ></YouTubeEmbed>
        </YouTubeContainer>
      </Videos>
    </>
  );
};

export default YoutubeMash;
