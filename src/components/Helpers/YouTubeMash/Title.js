// framework imports - 1st party
import * as React from "react";
import { colors, screenSize } from "../../../utils/css/themes";
import styled from "@emotion/styled";

const Title = props => {
  const HeaderContainer = styled.div`
    background-color: ${colors.orange};
    margin: 0;
    margin-bottom: 1rem;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    @media (max-width: ${screenSize.mobile}) {
      padding-left: 80px;
      margin-bottom: 0.5rem;
    }
  `;

  const ImageContainer = styled.img`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `;

  const TitleContainer = styled.h1`
    text-align: center;
    margin: 0;
  `;

  return (
    <HeaderContainer>
      {/* <ImageContainer
        height={75.6}
        src="https://facebook-image-leak.s3.amazonaws.com/nowyouseeit.png"
      ></ImageContainer> */}
      <TitleContainer>{props.children}</TitleContainer>
    </HeaderContainer>
  );
};

export default Title;
