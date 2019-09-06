// framework imports - 1st party
import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"
import { colors, button } from "../../../utils/css/themes"

const experiencePage = css`
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    margin: 1rem 0;
  }

  table {
    width: 100%;
    th {
      width: 30%;
    }
  }
`

const experienceButtons = css`
  background-color: ${colors.lightGrey};
  display: table;
  border-radius: 1rem;
  @media (max-width: 750px) {
    display: flex;
    background-color: transparent;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const experienceButton = css`
  background-color: transparent;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 1rem;
  @media (max-width: 750px) {
    padding: 0.5rem 0.5rem;
    margin: 0.25rem 0;
    width: 40%;
    text-align: center;
    height: 3rem;
  }
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${colors.blue};
    color: white;
  }
`

const resumeButton = css`
  margin-right: 1rem;
  @media (max-width: 600px) {
    display: flex;
    margin: 1rem 0;
    text-align: center;
    justify-content: center;
  }
`

const MyExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0)
  const experiencesText = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___order }) {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `).allMarkdownRemark.nodes

  return (
    <div css={experiencePage}>
      <h1>My Experience</h1>
      <div css={experienceButtons}>
        {Object.keys(experiencesText).map((_experience: any, i: number) => (
          <button
            css={[
              experienceButton,
              css`
                background-color: ${selectedExperience === i
                  ? colors.blue
                  : "transparent"};
                color: ${selectedExperience === i ? "white" : "black"};
              `,
            ]}
            key={i}
            onClick={() => setSelectedExperience(i)}
          >
            {experiencesText[i].frontmatter.title}
          </button>
        ))}
      </div>
      <div
        css={css`
          text-align: left;
          margin: 1.5rem 0;
          min-height: 15vh;

          @media (max-width: 600px) {
            min-height: 25vh;
          }
        `}
        dangerouslySetInnerHTML={{
          __html: experiencesText[selectedExperience].html,
        }}
      ></div>
      <div
        css={css`
          text-align: left;
        `}
      >
        <a
          css={[button, resumeButton]}
          href="https://drive.google.com/file/d/1vtvmmRWb8wIdBCwpFni61Y2DA7dE8uCx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF Resume
        </a>
        <a
          css={[button, resumeButton]}
          href="https://drive.google.com/file/d/0Bw0_aAHPLyV4aEhxT0tobDlXcHg5MHZJTkRONEY3X3ZjR1ZR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Word Resume
        </a>
      </div>
    </div>
  )
}
export default MyExperience
