// framework imports - 1st party
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// lib imports - 3rd party
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const PeerTestimonies = () => {
  const peerTestimonies = useStaticQuery(graphql`
    {
      utilsYaml {
        peer_testimonies
      }
    }
  `).utilsYaml.peer_testimonies

  return (
    <div
      css={css`
        margin: 3rem 0;
        @media (max-width: 600px) {
          margin: 1rem 0;
        }
      `}
    >
      <h1>Peer Testimonies</h1>
      <div
        css={css`
          display: flex;
          flex-wrap: no-wrap;
          @media (max-width: 750px) {
            flex-wrap: wrap;
          }
        `}
      >
        {peerTestimonies.map((x: string, i: number) => (
          <p
            key={i}
            css={css`
              text-align: left;
              flex-grow: 1;
              margin: 0 0.5rem;
              justify-content: space-around;
              @media (max-width: 750px) {
                margin: 0.5rem 0;
              }
            `}
          >
            &ldquo;{x}&rdquo;
          </p>
        ))}
      </div>
    </div>
  )
}
export default PeerTestimonies
