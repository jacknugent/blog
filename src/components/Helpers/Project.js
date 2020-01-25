import * as React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors } from "../../utils/css/themes"

const ProjectContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (min-width: 900px) {
    margin-left: calc(-100vw / 2 + 750px / 2 + 30%);
    margin-right: calc(-100vw / 2 + 750px / 2 + 30%);
  }
`

const TextContainer = styled.div`
  flex: 1 0 0;
  margin-right: 1rem;
`

const ImageContainer = styled.div`
  flex: 1 0 0;
  margin: auto;
  @media (max-width: 1200px) {
    margin: 1rem 0;
  }
`

const Title = styled.h1`
  a {
    color: black;
    font-weight: bold;
    transition: color 0.25s;
    &:focus,
    &:hover {
      color: ${colors.blue};
    }
  }
`

const Project = props => (
  <ProjectContainer>
    <TextContainer>
      <Title>{props.title}</Title>
      <p>{props.description}</p>
    </TextContainer>
    <ImageContainer>{props.preview && props.preview}</ImageContainer>
  </ProjectContainer>
)

export default Project
