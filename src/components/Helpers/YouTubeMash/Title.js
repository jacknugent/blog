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
      justify-content: flex-end;
      padding-left: 80px;
      padding-right: 1rem;
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
      <ImageContainer
        height={74}
        src={"/icons/icon-144x144.png"}
      ></ImageContainer>
      <TitleContainer>{props.children}</TitleContainer>
    </HeaderContainer>
  );
};

export default Title;
