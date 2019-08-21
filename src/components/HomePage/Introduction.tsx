// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

const Introduction = () => {
  const introduction_text = useStaticQuery(graphql`
    {
      utilsYaml {
        introduction {
          description
          title
        }
      }
    }
  `).utilsYaml.introduction

  return (
    <div
      css={css`
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 10rem;
      `}
    >
      <h1>{introduction_text.title}</h1>
      <p>{introduction_text.description}</p>
    </div>
  )
}
export default Introduction
