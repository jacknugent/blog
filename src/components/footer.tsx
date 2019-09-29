import * as React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"

const FooterContainer = styled.footer`
  position: sticky;
  z-index: 3;
  bottom: 0;
  height: 100%;
  width: 100%;
  @media (max-width: 1300px) {
    position: relative;
  }
`
const FooterMain = styled.div`
  padding: 0.5rem 0;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;

  @media (max-width: 1300px) {
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    transition: box-shadow 0.25s;
    background-color: white;
  }
  @media (max-width: 600px) {
    padding: 1rem 0;
    justify-content: space-around;
    position: relative;
  }
`

const iconStyle = css`
  margin: 0.5rem 1.5rem;
  display: flex;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const Footer = () => {
  const [isPageBottom, setIsPageBottom] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const window_height = window.innerHeight
      const scroll_height = window.pageYOffset

      const total_height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
      setIsPageBottom(window_height + scroll_height >= total_height)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isPageBottom])

  useEffect(() => {
    const window_height = window.innerHeight
    const scroll_height = window.pageYOffset
    const total_height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
    setIsPageBottom(window_height + scroll_height >= total_height)
  }, [])

  const socialIcons = useStaticQuery(graphql`
    {
      allSocialMediaYaml {
        edges {
          node {
            icons {
              alt
              title
              link
              image {
                childImageSharp {
                  fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `).allSocialMediaYaml.edges[0].node.icons

  return (
    <FooterContainer>
      <FooterMain
        css={css`
          margin-bottom: 0.5rem;
          @media screen and (max-width: 1300px) {
            margin-bottom: 0;
          }
          @media screen and (min-width: 600px) and (max-width: 1300px) {
            box-shadow: ${isPageBottom ? "none" : "0 1px 4px .5px black"};
          }
        `}
      >
        {socialIcons.map(icon => (
          <a
            css={iconStyle}
            key={icon.alt}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img alt={icon.alt} fixed={icon.image.childImageSharp.fixed} />
          </a>
        ))}
      </FooterMain>
    </FooterContainer>
  )
}
export default Footer
