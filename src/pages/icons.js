import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import image_icon from "../utils/media/images/youtube_mash/index_icon.gif";

const Icons = () => {
  const youtube_videos = useStaticQuery(graphql`
    {
      videos: allYoutubeVideo {
        nodes {
          videoId
          title
          publishedAt
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
      <h1>Index of /icons/</h1>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Publish Date</th>
          </tr>
          <tr>
            <th colspan={"5"}>
              <hr></hr>
            </th>
          </tr>

          {youtube_videos.map((video, i) => (
            <tr>
              <td>
                <img src={image_icon} alt="[IMG]"></img>
              </td>
              <td>
                <Links key={i} href={video.localThumbnail.publicURL}>
                  {video.title}
                </Links>
              </td>
              <td>{video.publishedAt.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Icons;
