import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Footer = () => {
  const LinkContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
  `;
  const ViewResults = css``;

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
