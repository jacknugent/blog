// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";
import * as AWS from "aws-sdk";
import uuidv4 from "uuid/v4";
// app imports
import { colors } from "../utils/css/themes";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YouTubeEmbed from "../components/Helpers/YouTubeEmbed/YouTubeEmbed";
import styled from "@emotion/styled";
import { screenSize } from "../utils/css/themes";

const YoutubeMash = () => {
  const [videoOne, setVideoOne] = useState(null);
  const [videoTwo, setVideoTwo] = useState(null);
  const [indexOne, setIndexOne] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState(null);

  AWS.config.update({
    region: "us-east-1",
    endpoint: "dynamodb.us-east-1.amazonaws.com",
    accessKeyId: [process.env.DYNAMO_DB_ID],
    secretAccessKey: [process.env.DYNAMO_DB_KEY]
  });

  const docClient = new AWS.DynamoDB.DocumentClient();

  const youtube_videos = useStaticQuery(graphql`
    {
      videos: allYoutubeVideo {
        nodes {
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
    }
  `).videos.nodes;

  const PageTitle = styled.h1`
    display: flex;
    justify-content: center;
    background-color: ${colors.red};
    color: white;
    margin: 0;
    padding: 1rem 0;
  `;

  const ContentContainer = styled.div`
    max-width: 1200px;
    margin: auto;
  `;

  const PageDescription = styled.h3`
    display: flex;
    justify-content: center;
  `;

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
      max-width: 600px;
      margin: auto;
    }
  `;

  const Or = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    text-transform: uppercase;
  `;

  const SelectButtons = styled.button`
    display: flex;
    margin: auto;
    margin-top: 0.5rem;
  `;

  const setInitialVideo = videos => {
    const videosDeepCopy = JSON.parse(JSON.stringify(videos));
    setYoutubeVideos(videosDeepCopy);
    setIndexOne(Math.floor(Math.random() * videos.length));
  };

  useEffect(() => {
    setInitialVideo(youtube_videos);
  }, [youtube_videos]);

  useEffect(() => {
    if (youtubeVideos) {
      setVideoOne(youtubeVideos.splice(indexOne, 1)[0]);
      const random_item_two = Math.floor(Math.random() * youtubeVideos.length);
      setVideoTwo(youtubeVideos.splice(random_item_two, 1)[0]);
    }
  }, [indexOne, youtubeVideos]);

  const saveWinner = (e, winner, loser) => {
    e.preventDefault();

    const Item = {
      id: uuidv4(),
      winner: winner.videoId,
      loser: loser.videoId,
      timestamp: Date.now()
    };
    let params = {
      TableName: "nysi-votes",
      Item: Item
    };
    console.log("submitting...");

    docClient.put(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        setInitialVideo(youtube_videos);
      }
    });
  };

  return (
    <Layout hideNav={true} hideFooter={true}>
      <SEO title="Projects" />
      <PageTitle>YoutubeMash</PageTitle>
      <ContentContainer>
        <PageDescription>
          Which Now You See It video is better? Click to choose.
        </PageDescription>
        <Videos>
          <YouTubeContainer>
            {videoOne && (
              <YouTubeEmbed
                id={videoOne.videoId}
                fluid_url={videoOne.localThumbnail.childImageSharp.fluid}
              ></YouTubeEmbed>
            )}
            <SelectButtons onClick={e => saveWinner(e, videoOne, videoTwo)}>
              <h3>{videoOne && videoOne.title}</h3>
            </SelectButtons>
          </YouTubeContainer>
          <Or>Or</Or>
          <YouTubeContainer>
            {videoTwo && (
              <YouTubeEmbed
                id={videoTwo.videoId}
                fluid_url={videoTwo.localThumbnail.childImageSharp.fluid}
              ></YouTubeEmbed>
            )}
            <SelectButtons onClick={e => saveWinner(e, videoTwo, videoOne)}>
              <h3>{videoTwo && videoTwo.title}</h3>
            </SelectButtons>
          </YouTubeContainer>
        </Videos>
      </ContentContainer>
    </Layout>
  );
};

export default YoutubeMash;
