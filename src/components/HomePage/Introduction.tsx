// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// lib imports - 3rd party
import styled from "@emotion/styled"

const IntroductionContainer = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
`

const MainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 960px) {
    display: inline-flex;
  }
`

const Positioned = styled.div`
  margin: 5rem auto;
  max-width: 900px;

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`

const ImgContainer = styled.div`
  width: 200px;
  margin: 0 2rem;
  border-radius: 10rem;
  overflow: hidden;
  flex-grow: 1;
  flex: 1 1 15%;
  @media (max-width: 960px) {
    order: -1;
    flex: none;
    width: 35%;
    max-width: 200px;
    margin: 2rem 0;
  }
`

const Title = styled.h1`
  font-family: "GothamUltra";
  font-size: 4rem;
  text-align: right;
  margin: auto 0;
  flex-grow: 1;
  flex: 1 1 30%;
  @media (max-width: 960px) {
    flex: none;
    width: 90%;
    text-align: center;
    font-size: 12vw;
  }
`

const Tagline = styled.p`
  margin: auto 0;
  font-size: 1.35rem;
  flex-grow: 1;
  flex: 1 1 30%;
  text-align: left;
  @media (max-width: 960px) {
    flex: none;
    width: 90%;
    font-size: 1.25rem;
    text-align: center;
    margin: 1rem 0;
  }
`

const Description = styled.p`
  width: 50%;
  margin: 5rem auto 5rem auto;
  text-align: justify;
  text-align-last: left;
  font-size: 1rem;
  line-height: 1;
  @media (max-width: 960px) {
    width: 90%;
  }
`

const Introduction = () => {
  const introductionData = useStaticQuery(graphql`
    {
      utilsYaml {
        introduction {
          tagline
          description
          title
        }
      }
      file(relativePath: { eq: "blog-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <IntroductionContainer>
      <Positioned>
        <MainInfo>
          <Title>{introductionData.utilsYaml.introduction.title}</Title>
          <ImgContainer>
            <Img
              alt={"site logo"}
              fluid={introductionData.file.childImageSharp.fluid}
            />
          </ImgContainer>
          <Tagline>{introductionData.utilsYaml.introduction.tagline}</Tagline>
        </MainInfo>
        <Description>
          {introductionData.utilsYaml.introduction.description}
        </Description>
      </Positioned>
    </IntroductionContainer>
  )
}
export default Introduction
