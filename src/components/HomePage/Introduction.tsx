import * as React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

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

  console.log(introduction_text)

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
