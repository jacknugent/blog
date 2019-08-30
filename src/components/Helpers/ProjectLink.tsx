import * as React from "react"
import { Link } from "@reach/router"
import { button } from "../../utils/css/themes"
import css from "@emotion/css"

const ProjectLink = (props: ProjectLinkProps) => {
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

  return (
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
  )
}

export default ProjectLink

interface ProjectLinkProps {
  site_source: ""
  site_label: ""
  type: string
}
