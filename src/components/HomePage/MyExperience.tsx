import * as React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

const myExperience = css`
  text-align: center;
  margin: 4em 0;
`

const experienceButtons = css`
  display: flex;
  justify-content: space-around;
`

const MyExperience = () => {
  const experiences_text = useStaticQuery(graphql`
    {
      utilsYaml {
        experiences {
          University
          Skills
          Job_1
          Job_2
        }
      }
    }
  `).utilsYaml.experiences

  return (
    <div css={myExperience}>
      <h1>My Experience</h1>
      <div css={experienceButtons}>
        <button>Skills</button>
        <button>Job 1</button>
        <button>Job 2</button>
        <button>University</button>
      </div>
      <p
        css={css`
          text-align: left;
          margin: 1rem 0;
        `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
        exercitationem sequi vero omnis consequatur. Vitae, recusandae earum ab
        reiciendis ullam ipsa dolorem! Ullam atque repellat dolorum nobis libero
        qui.
      </p>
      <div
        css={css`
          text-align: left;
        `}
      >
        <button>PDF Resume</button>
        <button>Word Resume</button>
      </div>
    </div>
  )
}
export default MyExperience
