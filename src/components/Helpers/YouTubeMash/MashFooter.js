import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { screenSize, button } from "../../../utils/css/themes";

const MashFooter = () => {
  const LinkContainer = styled.footer`
    display: flex;
    margin: 1rem auto 2rem auto;
    flex-wrap: wrap;
    justify-content: space-around;
    z-index: 3;
    bottom: 0;
    height: 100%;
    width: 100%;
    @media (max-width: ${screenSize.mobile}) {
      justify-content: space-around;
      flex-direction: column;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
  `;
  const ViewResults = css`
    @media (max-width: ${screenSize.mobile}) {
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
        to="/youtube-mash"
      >
        Rate Videos
      </Link>
      <Link
        activeClassName="active"
        css={[ViewResults, button]}
        to="/youtube-mash/results"
      >
        View Results
      </Link>
      <Link
        activeClassName="active"
        css={[ViewResults, button]}
        to="/youtube-mash/search"
      >
        Search Videos
      </Link>
    </LinkContainer>
  );
};

export default MashFooter;
