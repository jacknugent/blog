// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useState, useEffect } from "react";
import * as AWS from "aws-sdk";
import uuidv4 from "uuid/v4";
// app imports
import { colors, button } from "../utils/css/themes";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YouTubeEmbed from "../components/Helpers/YouTubeEmbed/YouTubeEmbed";
import styled from "@emotion/styled";
import { screenSize } from "../utils/css/themes";

const YoutubeMash = () => {
  const [videoOne, setVideoOne] = useState(null);
  const [videoTwo, setVideoTwo] = useState(null);

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
    background-color: ${colors.orange};
    color: white;
    margin: 0;
    padding: 1rem 0;
    @media (max-width: ${screenSize.tablet}) {
      padding: 0.5rem 0;
    }
  `;

  const ContentContainer = styled.div`
    max-width: 1200px;
    margin: auto;
  `;

  const PageDescription = styled.h3`
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    text-align: center;
    @media (max-width: ${screenSize.tablet}) {
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
  `;

  const Videos = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: ${screenSize.tablet}) {
      display: block;
    }
  `;

  const YouTubeContainer = styled.div`
    width: calc(50% - 2rem);
    padding: 1rem;
    @media (max-width: ${screenSize.tablet}) {
      width: calc(100% - 2rem);
      max-width: 600px;
      padding: 0.25rem;
      margin: auto;
    }
  `;

  const Or = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    text-transform: uppercase;
    @media (max-width: ${screenSize.tablet}) {
      margin: 0;
    }
  `;

  const SelectButtons = styled.button`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    justify-content: center;
    padding: 1rem;
    @media (max-width: ${screenSize.tablet}) {
      margin-top: 0.25rem;
    }
  `;

  const ButtonTitle = styled.h3`
    margin: 0;
  `;

  const randVideoID = videos => Math.floor(Math.random() * videos.length);

  const getVideos = videos => {
    const random_item_one = randVideoID(videos);
    var random_item_two = randVideoID(videos);
    while (random_item_two === random_item_one) {
      random_item_two = randVideoID(videos);
    }
    setVideoOne(videos[random_item_one]);
    setVideoTwo(videos[random_item_two]);
  };

  const docClient = new AWS.DynamoDB.DocumentClient();

  const dynamo_id = process.env.GATSBY_DYNAMO_DB_ID;
  const dynamo_key = process.env.GATSBY_DYNAMO_DB_KEY;
  useEffect(() => {
    AWS.config.update({
      region: "us-east-1",
      endpoint: "dynamodb.us-east-1.amazonaws.com",
      accessKeyId: [dynamo_id],
      secretAccessKey: [dynamo_key]
    });
  }, [dynamo_id, dynamo_key]);

  useEffect(() => {
    getVideos(youtube_videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [youtube_videos]);

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

    docClient.put(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        getVideos(youtube_videos);
      }
    });
  };

  return (
    <Layout hideNav={true} hideFooter={true}>
      <SEO title="Projects" />
      <PageTitle>YoutubeMash</PageTitle>
      <ContentContainer>
        <PageDescription>
          Which Now You See It video is better? Watch the video, then, click the
          title to pass your judgement.
        </PageDescription>
        <Videos>
          {videoOne && (
            <YouTubeContainer>
              <YouTubeEmbed
                id={videoOne.videoId}
                fluid_url={videoOne.localThumbnail.childImageSharp.fluid}
              ></YouTubeEmbed>

              <SelectButtons
                css={button}
                onClick={e => saveWinner(e, videoOne, videoTwo)}
              >
                <ButtonTitle>{videoOne && videoOne.title}</ButtonTitle>
              </SelectButtons>
            </YouTubeContainer>
          )}
          <Or>Or</Or>
          {videoTwo && (
            <YouTubeContainer>
              <YouTubeEmbed
                id={videoTwo.videoId}
                fluid_url={videoTwo.localThumbnail.childImageSharp.fluid}
              ></YouTubeEmbed>

              <SelectButtons
                css={button}
                onClick={e => saveWinner(e, videoTwo, videoOne)}
              >
                <ButtonTitle>{videoTwo && videoTwo.title}</ButtonTitle>
              </SelectButtons>
            </YouTubeContainer>
          )}
        </Videos>
        <Link to="/youtube-mash/results">View Results</Link>
      </ContentContainer>
    </Layout>
  );
};

export default YoutubeMash;
