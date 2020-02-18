import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

const Icons = () => {
  const youtube_videos = useStaticQuery(graphql`
    {
      videos: allYoutubeVideo {
        nodes {
          videoId
          title
          localThumbnail {
            publicURL
          }
        }
      }
    }
  `).videos.nodes;

  const Links = styled.a`
    display: block;
  `;

  return (
    <>
      <Links href={"/icons/icon-144x144.png"}>NYSI Logo</Links>
      {youtube_videos.map((video, i) => (
        <Links key={i} href={video.localThumbnail.publicURL}>
          {video.title}
        </Links>
      ))}
    </>
  );
};

export default Icons;
