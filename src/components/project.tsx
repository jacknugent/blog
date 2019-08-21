import * as React from "react"
import { css } from "@emotion/core"
import Img, { FluidObject } from "gatsby-image"
import { Link } from "@reach/router"

const Project = (props: ProjectProps) => (
  <div>
    <div
      css={css`
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
            margin-right: 1rem;
          `}
        >
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <p>Skills: {props.skills}</p>
          <a href={props.site_source} target="_blank">
            {props.site_label}
          </a>
        </div>
        <div
          css={css`
            flex: 1 0 0;
          `}
        >
          <Img alt={props.title} fluid={props.fluid_img} />
        </div>
      </div>
    </div>
  </div>
)

interface ProjectProps {
  title: string
  description: string
  site_source: string
  site_label: string
  fluid_img: FluidObject
  skills: string
}

export default Project
