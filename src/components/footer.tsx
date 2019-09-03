import * as React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useState, useEffect } from "react"

const footer = css`
  padding: 0.5rem 0;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  justify-content: center;
  transition: 0.25s;
  @media (max-width: 600px) {
    justify-content: space-around;
    position: relative;
  }
`

const iconStyle = css`
  margin: 0 1.5rem;
  display: flex;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const Footer = () => {
  const [isPageBottom, setIsPageBottom] = useState()

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

      if (window_height + scroll_height >= total_height) {
        if (!isPageBottom) {
          setIsPageBottom(true)
        }
      } else if (isPageBottom) {
        setIsPageBottom(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isPageBottom])

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
    <footer
      css={css`
        position: relative;
        z-index: 3;
      `}
    >
      <div
        css={[
          footer,
          css`
            @media (min-width: 600px) {
              box-shadow: ${isPageBottom ? "none" : "0 1px 4px .5px black"};
            }
          `,
        ]}
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
      </div>
    </footer>
  )
}
export default Footer
