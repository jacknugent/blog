import * as React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const footer = css`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    justify-content: space-around;
  }
`

const iconStyle = css`
  margin: 0 3rem 1rem 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const Footer = () => {
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
    <footer css={footer}>
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
    </footer>
  )
}
export default Footer
