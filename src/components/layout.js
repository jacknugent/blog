/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { Global, css } from "@emotion/core";
import {
  GothamMediumTTF,
  GothamMediumWOFF,
  GothamBoldTTF,
  GothamBoldWOFF,
  GothamUltraTTF,
  GothamUltraWOFF,
  MontserratRegularTTF,
  MontserratRegularWOFF
} from "../utils/css/fonts";
import styled from "@emotion/styled";

const globalStyles = css`
  @font-face {
    font-family: "GothamMedium";
    font-display: auto;
    src: local("Gotham Medium"), local("Gotham-Medium"),
      url(${GothamMediumTTF}) format("ttf"),
      url(${GothamMediumWOFF}) format("woff");
  }
  @font-face {
    font-family: "GothamUltra";
    font-display: auto;
    src: local("Gotham Ultra"), local("Gotham-Ultra"),
      url(${GothamUltraTTF}) format("ttf"),
      url(${GothamUltraWOFF}) format("woff");
  }

  @font-face {
    font-family: "GothamBold";
    font-display: auto;
    src: local("Gotham Bold"), local("Gotham-Bold"),
      url(${GothamBoldTTF}) format("ttf"), url(${GothamBoldWOFF}) format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    src: local("Montserrat Regular"), local("Montserrat-Regular"),
      url(${MontserratRegularTTF}) format("truetype"),
      url(${MontserratRegularWOFF}) format("woff");
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
    height: 100%;
  }
  body {
    margin: 0;
    touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  h1 {
    font-family: "GothamBold";
    font-weight: normal;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "GothamMedium";
    font-weight: normal;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
  p,
  li,
  label,
  a {
    font-family: "Montserrat";
    text-rendering: optimizeLegibility;
    font-size: 0.9rem;
  }
`;
const Body = styled.div`
  padding: 5rem 0.5rem 0 0.5rem;
  flex-grow: 1;
  @media (max-width: 1300px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 600px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Layout = props => {
  return (
    <SiteContainer>
      <Global styles={globalStyles} />
      <Header />
      <Body>
        <main>{props.children}</main>
      </Body>
      <Footer />
    </SiteContainer>
  );
};

export default Layout;
