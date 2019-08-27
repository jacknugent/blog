import * as React from "react"
import { css } from "@emotion/core"
import Img, { FluidObject } from "gatsby-image"
import { theme } from "../utils/css/themes"

const Project = (props: ProjectProps) => (
  <div
    css={css`
      margin-bottom: 2rem;
    `}
  >
    <div
      css={css`
        @media (min-width: 900px) {
          margin-left: calc(-100vw / 2 + 750px / 2 + 10rem);
          margin-right: calc(-100vw / 2 + 750px / 2 + 10rem);
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
          <div
            css={css`
              display: flex;
              align-items: flex-end;
              text-align: center;
            `}
          >
            {props.site_source && (
              <a
                css={css`
                  text-decoration: none;
                  padding: 0.5rem;
                  border-radius: 0.25rem;
                  border: 1px solid ${theme.colors.blue};
                  color: ${theme.colors.blue};
                  width: 30%;
                `}
                href={props.site_source}
                target="_blank"
              >
                {props.site_label}
              </a>
            )}
          </div>
        </div>
        <div
          css={css`
            flex: 1 0 0;
            margin: 1rem 0;
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
  site_source: ""
  site_label: ""
  fluid_img: FluidObject
  skills: string
}

export default Project
