// framework imports - 1st party
import * as React from "react"
import { useState } from "react"

// lib imports - 3rd party
import { css } from "@emotion/core"

// app imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGallery from "../components/ImageGallery"

function stripes() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const quote = css`
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 10rem;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 960px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  `
  const headerQuote = css`
    margin: 2rem 0;
    font-size: 4rem;
    @media (max-width: 960px) {
      font-size: 2.5rem;
    }
  `

  const nameQuote = css`
    text-align: right;
    margin-right: 4rem;
    font-size: 2rem;
    @media (max-width: 960px) {
      font-size: 1rem;
      margin-right: 0;
    }
  `

  return (
    <>
      <Layout>
        <div css={quote}>
          <h1 css={headerQuote}>
            <q>Stripes attract attention.</q>
          </h1>
          <p css={nameQuote}>- Paul Rand, Creator of the IBM Logo</p>
        </div>

        <SEO title="Stripes" />
        <ImageGallery search={search} filter={filter} />
      </Layout>
    </>
  )
}

export default stripes
