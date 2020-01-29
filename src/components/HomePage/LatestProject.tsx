// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

// lib imports - 3rd party
import { css } from "@emotion/core";
import { colors, button } from "../../utils/css/themes";
import styled from "@emotion/styled";

const linkTitle = css`
  font-size: 1.5rem;
`;

const ProjectContainer = styled.div`
  margin: 3rem 0;
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;
const Project = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Header = styled.h3`
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.25s;
    &:focus,
    &:hover {
      color: ${colors.blue};
    }
  }
`;

const Text = styled.div`
  flex: 1 0 0;
`;

const ImageContainer = styled.div`
  flex: 1 0 0;
  margin: 1rem 0;
`;

const LinkContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;
const LinkButton = css`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0.5rem 0;
  width: 25%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const marginRight = css`
  margin-right: 1rem;
`;

function LatestProject() {
  const project = useStaticQuery(graphql`
    {
      projectsYaml {
        title
        description
        site_source
        type
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `).projectsYaml;

  return (
    <ProjectContainer>
      <Project>
        <Text>
          <h1>My Latest Project</h1>
          <Header>
            {project.site_source &&
              (project.type === "local" ? (
                <Link css={linkTitle} to={project.site_source}>
                  {project.title}
                </Link>
              ) : (
                <a css={linkTitle} href={project.site_source}>
                  {project.title}
                </a>
              ))}
          </Header>
          <p css={marginRight}>{project.description}</p>
        </Text>
        <ImageContainer>
          {project.site_source &&
            (project.type === "local" ? (
              <Link to={project.site_source}>
                <Img
                  alt={project.title}
                  fluid={project.image && project.image.childImageSharp.fluid}
                />
              </Link>
            ) : (
              <a href={project.site_source}>
                <Img
                  alt={project.title}
                  fluid={project.image && project.image.childImageSharp.fluid}
                />
              </a>
            ))}
        </ImageContainer>
      </Project>
      <LinkContainer>
        <Link css={[button, LinkButton]} to="projects">
          See More Projects
        </Link>
      </LinkContainer>
    </ProjectContainer>
  );
}
export default LatestProject;
