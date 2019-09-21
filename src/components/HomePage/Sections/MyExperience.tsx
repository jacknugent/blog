// framework imports - 1st party
import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"
import { colors, button } from "../../../utils/css/themes"
import Resume from "../../../utils/resume.pdf"
import styled from "@emotion/styled"

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
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }

  @media (max-width: 600px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
  }
`

const experienceButton = css`
  background-color: transparent;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 1rem;

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

const ButtonWrapper = styled.div``

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
      <ButtonWrapper>
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
      </ButtonWrapper>

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
        <a css={[button, resumeButton]} href={Resume} target="_blank">
          View My Resume
        </a>
      </div>
    </div>
  )
}
export default MyExperience
