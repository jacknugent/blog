import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { button } from "../../../utils/css/themes";

const MashFooter = () => {
  const videoCount = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        totalCount
      }
    }
  `).allYoutubeVideo.totalCount;

  const LinkContainer = styled.footer`
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    z-index: 3;
    bottom: 0;
    height: 100%;
    width: 100%;
    position: sticky;
    z-index: 3;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 1rem 0;
    @media (max-width: 1300px) {
      position: relative;
      padding: 0;
      margin: 2rem auto 1rem auto;
    }
    @media (max-width: 700px) {
      justify-content: space-around;
      flex-direction: column;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
  `;
  const ViewResults = css`
    @media (max-width: 700px) {
      margin: 0.25rem;
      text-align: center;
      padding: 0.375rem !important;
    }
  `;

  return (
    <LinkContainer>
      <Link
        activeClassName="active"
        css={[ViewResults, button]}
        to="/youtube-mash/"
      >
        Video Battle
      </Link>
      <Link
        activeClassName="active"
        css={[ViewResults, button]}
        to="/youtube-mash/results/"
      >
        Results
      </Link>
      <Link
        activeClassName="active"
        css={[ViewResults, button]}
        to={"/youtube-mash/video/" + Math.floor(Math.random() * videoCount + 1)}
      >
        Random Video
      </Link>
      <a
        href="https://patreon.com/nowyouseeit"
        target="__blank"
        css={[ViewResults, button]}
      >
        Support Us
      </a>
    </LinkContainer>
  );
};

export default MashFooter;
