// framework imports - 1st party
import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"
import { theme } from "../../../utils/css/themes"

const experienceButtons = css`
  background-color: ${theme.colors.lightGrey};
  display: table;
  border-radius: 2rem;
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
  border-radius: 2rem;
  @media (max-width: 750px) {
    padding: 0.5rem 0.5rem;
    margin: 0.25rem 0;
    width: 40%;
    text-align: center;
    height: 3rem;
  }
`

const resumeButton = css`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  text-decoration: none;
  @media (max-width: 600px) {
    display: flex;
    margin: 1rem 0;
    text-align: center;
    justify-content: center;
  }
`

const MyExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0)
  const experiences_text = useStaticQuery(graphql`
    {
      allMarkdownRemark {
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
    <div
      css={css`
        margin: 3rem 0;
        @media (max-width: 600px) {
          margin: 1rem 0;
        }
      `}
    >
      <h1>My Experience</h1>
      <div css={experienceButtons}>
        {Object.keys(experiences_text).map((_experience: any, i: number) => (
          <button
            css={[
              experienceButton,
              css`
                background-color: ${selectedExperience === i
                  ? theme.colors.blue
                  : "transparent"};
                color: ${selectedExperience === i ? "white" : "black"};
              `,
            ]}
            key={i}
            onClick={() => setSelectedExperience(i)}
          >
            {experiences_text[i].frontmatter.title}
          </button>
        ))}
      </div>
      <div
        css={css`
          text-align: left;
          margin: 1rem 0;
          min-height: 100px;
        `}
        dangerouslySetInnerHTML={{
          __html: experiences_text[selectedExperience].html,
        }}
      ></div>
      <div
        css={css`
          text-align: left;
        `}
      >
        <a
          css={resumeButton}
          href="https://drive.google.com/file/d/1vtvmmRWb8wIdBCwpFni61Y2DA7dE8uCx/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          PDF Resume
        </a>
        <a
          css={resumeButton}
          href="https://drive.google.com/file/d/0Bw0_aAHPLyV4aEhxT0tobDlXcHg5MHZJTkRONEY3X3ZjR1ZR/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Word Resume
        </a>
      </div>
    </div>
  )
}
export default MyExperience
