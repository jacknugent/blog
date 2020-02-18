import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { screenSize, button } from "../../../utils/css/themes";

const MashFooter = () => {
  const LinkContainer = styled.footer`
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 3;
    bottom: 0;
    height: 100%;
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: ${screenSize.mobile}) {
      justify-content: space-around;
    }
  `;
  const ViewResults = css`
    margin: 0 2rem;
    @media (max-width: ${screenSize.mobile}) {
      margin: 0;
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
    </LinkContainer>
  );
};

export default MashFooter;
