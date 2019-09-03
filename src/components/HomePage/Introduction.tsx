// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

const Introduction = () => {
  const introductionText = useStaticQuery(graphql`
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
        min-height: 70vh;
        display: flex;
      `}
    >
      <div
        css={css`
          margin: auto;
          padding-bottom: 20vh;
        `}
      >
        <h1
          css={css`
            margin-top: 0;
          `}
        >
          {introductionText.title}
        </h1>
        <p>{introductionText.description}</p>
      </div>
    </div>
  )
}
export default Introduction
