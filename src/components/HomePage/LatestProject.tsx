// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

// lib imports - 3rd party
import { css } from "@emotion/core"

function LatestProject() {
  const project = useStaticQuery(graphql`
    {
      projectsYaml {
        title
        description
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
        @media (min-width: 900px) {
          margin-left: calc(-100vw / 2 + 750px / 2 + 3rem);
          margin-right: calc(-100vw / 2 + 750px / 2 + 3rem);
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

          <h3>{project.title}</h3>
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
          `}
        >
          <Img
            alt={project.title}
            fluid={project.image.childImageSharp.fluid}
          />
        </div>
      </div>
      <div
        css={css`
          text-align: center;
          margin-top: 1rem;
        `}
      >
        <Link to="projects">See More Projects</Link>
      </div>
    </div>
  )
}
export default LatestProject
