// framework imports - 1st party
import * as React from "react";

// app imports
import Layout from "../components/layout";
import Introduction from "../components/HomePage/Introduction";

// app imports
import SEO from "../components/seo";
import PeerTestimonies from "../components/HomePage/PeerTestimonies";
import LatestProject from "../components/HomePage/LatestProject";
import styled from "@emotion/styled";
import { colors } from "../utils/css/themes";

const SectionContainer = styled.div`
  @media (min-width: 960px) {
    margin-left: calc(-0.5rem);
    margin-right: calc(-0.5rem);
  }

  padding: 2rem 0;
  background-color: ${colors.lightGrey};

  @media (max-width: 960px) {
    background-color: white;
    padding: 0;
  }
`;

const Section = styled.div`
  max-width: 1100px;
  margin: auto;
  box-sizing: border-box;
  background-color: white;
  border-radius: 40px;
  padding: 2rem 4rem;
  box-shadow: 0 0 15px -4px black;
  @media (max-width: 960px) {
    box-shadow: none;
    padding: 0.5rem;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction></Introduction>
      <SectionContainer>
        <Section>
          <PeerTestimonies></PeerTestimonies>
        </Section>
      </SectionContainer>
      <SectionContainer>
        <Section>
          <LatestProject></LatestProject>
        </Section>
      </SectionContainer>
    </Layout>
  );
};

export default IndexPage;
