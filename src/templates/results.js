// framework imports - 1st party
import * as React from "react";

// app imports
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import Title from "../components/Helpers/YouTubeMash/Title";
import MashFooter from "../components/Helpers/YouTubeMash/MashFooter";

const PageContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
`;

const YoutubeLink = styled.a`
  padding-right: 1rem;
`;
const Results = props => {
  return (
    <Layout
      header={<Title>Video Rankings</Title>}
      footer={<MashFooter></MashFooter>}
    >
      <SEO title="Video Rankings" />
      <PageContainer>
        <ResultRow>
          <strong>Video</strong>
          <strong>Rating</strong>
        </ResultRow>
        {props.pageContext.rankings.map((ranking, i) => (
          <ResultRow key={i}>
            <YoutubeLink
              href={"https://www.youtube.com/watch?v=" + ranking.videoId}
            >
              {ranking.title}
            </YoutubeLink>
            {ranking.elo}
          </ResultRow>
        ))}
      </PageContainer>
    </Layout>
  );
};

export default Results;
