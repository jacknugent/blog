// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

// lib imports - 3rd party
import { css } from "@emotion/core"
import { colors } from "../../../utils/css/themes"
import ProjectLink from "../../Helpers/ProjectLink"

const linkTitle = css`
  font-size: 1.5rem;
`

function LatestProject() {
  const project = useStaticQuery(graphql`
    {
      projectsYaml {
        title
        description
        site_source
        site_label
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
  `).projectsYaml

  return (
    <div
      css={css`
        margin: 3rem 0;
        @media (max-width: 600px) {
          margin: 1rem 0;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          @media (max-width: 1200px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            flex: 1 0 0;
          `}
        >
          <h1>My Latest Project</h1>

          <h3>
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
          </h3>
          <p
            css={css`
              margin-right: 1rem;
            `}
          >
            {project.description}
          </p>
        </div>

        <div
          css={css`
            flex: 1 0 0;
            margin: 1rem 0;
          `}
        >
          {project.site_source &&
            (project.type === "local" ? (
              <Link to={project.site_source}>
                <Img
                  alt={project.title}
                  fluid={project.image.childImageSharp.fluid}
                />
              </Link>
            ) : (
              <a href={project.site_source}>
                <Img
                  alt={project.title}
                  fluid={project.image.childImageSharp.fluid}
                />
              </a>
            ))}
        </div>
      </div>
      <div
        css={css`
          text-align: center;
          margin-top: 1rem;
        `}
      >
        <Link
          css={css`
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: 1px solid ${colors.blue};
            color: ${colors.blue};
          `}
          to="projects"
        >
          See More Projects
        </Link>
      </div>
    </div>
  )
}
export default LatestProject
