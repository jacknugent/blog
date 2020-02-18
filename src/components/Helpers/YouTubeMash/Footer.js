import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { screenSize } from "../../../utils/css/themes";

const Footer = () => {
  const LinkContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: ${screenSize.mobile}) {
      justify-content: space-around;
      margin-bottom: 2rem;
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
      <Link css={ViewResults} to="/youtube-mash">
        Rate Videos
      </Link>
      <Link css={ViewResults} to="/youtube-mash/results">
        View Results
      </Link>
    </LinkContainer>
  );
};

export default Footer;
