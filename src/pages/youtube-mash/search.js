import * as React from "react";

import Title from "../../components/Helpers/YouTubeMash/Title";
import MashFooter from "../../components/Helpers/YouTubeMash/MashFooter";
import Layout from "../../components/layout";
import styled from "@emotion/styled";

const search = () => {
  const SearchContiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 0 1rem;
    margin: auto;
  `;

  const SearchLabel = styled.label`
    width: 100%;
    margin-left: -0.5rem;
  `;

  const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 2rem;
    font-size: 1rem;
    padding-left: 0.5rem;
    border: 1px solid;
  `;

  return (
    <Layout
      header={<Title>YouTube Mash</Title>}
      footer={<MashFooter></MashFooter>}
    >
      <SearchContiner>
        <SearchLabel htmlFor="videoSearch">Search</SearchLabel>
        <SearchInput id="videoSearch"></SearchInput>
      </SearchContiner>
    </Layout>
  );
};

export default search;
