import * as React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

const PeerTestimonies = () => {
  const peer_testimonies = useStaticQuery(graphql`
    {
      utilsYaml {
        peer_testimonies
      }
    }
  `).utilsYaml.peer_testimonies

  return (
    <div
      css={css`
        margin: 5rem 0;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        Peer Testimonies
      </h1>
      {peer_testimonies.map((x: string) => (
        <p
          css={css`
            text-align: left;
          `}
        >
          &ldquo;{x}&rdquo;
        </p>
      ))}
    </div>
  )
}
export default PeerTestimonies
