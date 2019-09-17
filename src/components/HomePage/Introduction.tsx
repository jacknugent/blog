// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const IntroductionContainer = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
`

const Positioned = styled.div`
  margin: auto;
  padding-bottom: 20vh;
`

const Title = styled.h1`
  font-family: "GothamUltra";

  margin-top: 0;
`

const Introduction = () => {
  const introductionText = useStaticQuery(graphql`
    {
      utilsYaml {
        introduction {
          description
          title
        }
      }
    }
  `).utilsYaml.introduction

  return (
    <IntroductionContainer>
      <Positioned>
        <Title>{introductionText.title}</Title>
        <p>{introductionText.description}</p>
      </Positioned>
    </IntroductionContainer>
  )
}
export default Introduction
