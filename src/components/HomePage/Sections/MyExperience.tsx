// framework imports - 1st party
import * as React from "react"
import { useState, useRef, useEffect } from "react"
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

const ExperienceChoices = styled.div`
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

  @media (max-width: 750px) {
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
  }
`

const ExperienceButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 1rem;
  @media (max-width: 600px) {
    padding: 0.75rem 2rem;
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
const SeeMoreButton = styled.button`
  margin: 1rem auto 2rem auto;
  display: flex;
  background-color: none;
  border: none;
  font-size: 18px;
  color: ${colors.blue};
  text-decoration: underline;
`
const DescriptionContainer = styled.div``
const Description = styled.div`
  text-align: left;
  margin: 0;
  min-height: 15vh;
  overflow: hidden;
  @media (max-width: 600px) {
    min-height: 25vh;
  }
`
const MyExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0)
  const [fullDescription, setFullDescription] = useState(false)
  const [contentHeight, setContentHeight] = useState(null)
  const contentRef = useRef(null)
  const maxDescriptionHeight = 300

  // on screen resize
  // update height of content
  // to allow smooth height transition on click
  const contentResize = () => {
    setContentHeight(contentRef.current.scrollHeight)
  }

  const SeeMore = () => {
    if (contentHeight < maxDescriptionHeight) {
      return null
    } else if (fullDescription) {
      return (
        <SeeMoreButton onClick={() => setFullDescription(false)}>
          See Less -
        </SeeMoreButton>
      )
    } else {
      return (
        <SeeMoreButton onClick={() => setFullDescription(true)}>
          See More +
        </SeeMoreButton>
      )
    }
  }
  // listen for screen resize
  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight)
    window.addEventListener("resize", contentResize)
    return () => {
      window.removeEventListener("resize", contentResize)
    }
  })

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
      <ExperienceChoices>
        {Object.keys(experiencesText).map((_experience: any, i: number) => (
          <ExperienceButton
            css={css`
              background-color: ${selectedExperience === i
                ? colors.blue
                : "transparent"};
              color: ${selectedExperience === i ? "white" : "black"};
            `}
            key={i}
            onClick={() => {
              setSelectedExperience(i)
              setFullDescription(false)
            }}
          >
            {experiencesText[i].frontmatter.title}
          </ExperienceButton>
        ))}
      </ExperienceChoices>

      <DescriptionContainer>
        <Description
          css={css`
            height: ${fullDescription
              ? contentHeight + "px"
              : maxDescriptionHeight + "px"};
            transition: all 1s;
          `}
          ref={contentRef}
          dangerouslySetInnerHTML={{
            __html: experiencesText[selectedExperience].html,
          }}
        ></Description>
        {SeeMore()}
      </DescriptionContainer>

      <a css={[button, resumeButton]} href={Resume} target="_blank">
        View My Resume
      </a>
    </div>
  )
}
export default MyExperience
