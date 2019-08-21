// framework imports - 1st party
import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"

const myExperience = css`
  text-align: center;
  margin: 4em 0;
`

const experienceButtons = css`
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

const MyExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState("Skills")
  const experiences_text = useStaticQuery(graphql`
    {
      utilsYaml {
        experiences {
          Skills
          CapTech
          GE
          University
          YouTube
        }
      }
    }
  `).utilsYaml.experiences

  return (
    <div css={myExperience}>
      <h1>My Experience</h1>
      <div css={experienceButtons}>
        {Object.keys(experiences_text).map((experience: any) => (
          <button onClick={() => setSelectedExperience(experience)}>
            {experience.replace("_", " ")}
          </button>
        ))}
      </div>
      <p
        css={css`
          text-align: left;
          margin: 1rem 0;
        `}
      >
        {experiences_text[selectedExperience]}
      </p>
      <div
        css={css`
          text-align: left;
        `}
      >
        <a
          href="https://drive.google.com/file/d/1vtvmmRWb8wIdBCwpFni61Y2DA7dE8uCx/view?usp=sharing"
          target="_blank"
        >
          PDF Resume
        </a>
        <a
          href="https://drive.google.com/file/d/0Bw0_aAHPLyV4aEhxT0tobDlXcHg5MHZJTkRONEY3X3ZjR1ZR/view?usp=sharing"
          target="_blank"
        >
          Word Resume
        </a>
      </div>
    </div>
  )
}
export default MyExperience
