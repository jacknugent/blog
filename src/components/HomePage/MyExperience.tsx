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
    <div css={myExperience}>
      <h1>My Experience</h1>
      <div css={experienceButtons}>
        {Object.keys(experiences_text).map((_experience: any, i: number) => (
          <button key={i} onClick={() => setSelectedExperience(i)}>
            {experiences_text[i].frontmatter.title}
          </button>
        ))}
      </div>
      <div
        css={css`
          text-align: left;
          margin: 1rem 0;
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
          href="https://drive.google.com/file/d/1vtvmmRWb8wIdBCwpFni61Y2DA7dE8uCx/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          PDF Resume
        </a>
        <a
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
