// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// lib imports - 3rd party
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const ButtonThumbnail = styled.button`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
  border: none;
  display: -webkit-box;
`;

const thumbnailContainer = css`
  &:hover {
    cursor: pointer;
  }
`;

const youtubeIcon = css`
  width: 15%;
  height: 18%;
  margin: auto;

  .css-${thumbnailContainer.name}:hover & {
    visibility: hidden;
  }
`;

const loadingThumbnail = css`
  position: absolute !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

const Thumbnail = props => {
  const playButtons = useStaticQuery(graphql`
    {
      greyPlay: file(name: { eq: "youtube-play-grey" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redPlay: file(name: { eq: "youtube-play-red" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ButtonThumbnail
      aria-label="Button to play YouTube video"
      onClick={() => props.setVideo()}
    >
      <section css={thumbnailContainer}>
        <Img
          css={[
            loadingThumbnail,
            youtubeIcon,
            css`
              z-index: 3;
              &:hover {
                visibility: hidden;
              }
            `
          ]}
          fluid={playButtons.greyPlay.childImageSharp.fluid}
        ></Img>
        <Img
          css={[
            loadingThumbnail,
            css`
              z-index: 1;
            `
          ]}
          fluid={props.fluid}
        />
      </section>
      <Img
        css={[
          loadingThumbnail,
          youtubeIcon,
          css`
            z-index: 2;
            &:hover {
              z-index: 4;
              cursor: pointer;
            }
          `
        ]}
        fluid={playButtons.redPlay.childImageSharp.fluid}
      ></Img>
    </ButtonThumbnail>
  );
};

export default Thumbnail;
