import * as React from "react"
import { css } from "@emotion/core"
import Img, { FluidObject } from "gatsby-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/css/themes"

const linkTitle = css`
  font-size: 2rem;
  font-weight: bold;
`

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

const Project = (props: ProjectProps) => (
  <ProjectContainer>
    <TextContainer>
      <Title>
        {props.site_source &&
          (props.type === "local" ? (
            <Link css={linkTitle} to={props.site_source}>
              {props.title}
            </Link>
          ) : (
            <a css={linkTitle} href={props.site_source}>
              {props.title}
            </a>
          ))}
      </Title>
      <p>{props.description}</p>
      <p>Skills: {props.skills}</p>
    </TextContainer>
    <ImageContainer>
      {props.site_source &&
        (props.type === "local" ? (
          <Link to={props.site_source}>
            <Img alt={props.title} fluid={props.fluid_img} />
          </Link>
        ) : (
          <a href={props.site_source}>
            <Img alt={props.title} fluid={props.fluid_img} />
          </a>
        ))}
    </ImageContainer>
  </ProjectContainer>
)

interface ProjectProps {
  title: string
  description: string
  site_source: ""
  site_label: ""
  type: string
  fluid_img: FluidObject
  skills: string
}

export default Project
