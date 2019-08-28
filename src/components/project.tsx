import * as React from "react"
import { css } from "@emotion/core"
import Img, { FluidObject } from "gatsby-image"
import { button } from "../utils/css/themes"
import { Link } from "@reach/router"

const linkToPage = css`
  width: 50%;
  @media (max-width: 1200px) {
    width: 50%;
    margin: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Project = (props: ProjectProps) => (
  <div
    css={css`
      margin-bottom: 2rem;
    `}
  >
    <div
      css={css`
        @media (min-width: 900px) {
          margin-left: calc(-100vw / 2 + 750px / 2 + 30%);
          margin-right: calc(-100vw / 2 + 750px / 2 + 30%);
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
          <h1
            css={css`
              @media (max-width: 600px) {
                text-align: center;
              }
            `}
          >
            {props.title}
          </h1>
          <p>{props.description}</p>
          <p>Skills: {props.skills}</p>
          <div
            css={css`
              display: flex;
              align-items: flex-end;
              text-align: center;
            `}
          >
            {props.site_source &&
              (props.type === "local" ? (
                <Link css={[button, linkToPage]} to={props.site_source}>
                  {props.site_label}
                </Link>
              ) : (
                <a css={[button, linkToPage]} href={props.site_source}>
                  {props.site_label}
                </a>
              ))}
          </div>
        </div>
        <div
          css={css`
            flex: 1 0 0;
            margin: auto;
            @media (max-width: 1200px) {
              margin: 1rem 0;
            }
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
  type: string
  fluid_img: FluidObject
  skills: string
}

export default Project
