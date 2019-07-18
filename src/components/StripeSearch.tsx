import * as React from "react"
import { css } from "@emotion/core"

const StripeSearch = (props: any) => {
  return (
    <div>
      <div
        css={css`
          width: 50%;
          display: inline-block;
        `}
      >
        <label
          css={css`
            display: block;
          `}
          htmlFor="titleSearch"
        >
          Search by Title
        </label>
        <input
          css={css`
            width: 75%;
          `}
          id="titleSearch"
          placeholder="Search by Title"
          value={props.searchValue}
          onChange={e => props.search(e)}
        ></input>
      </div>
      <div
        css={css`
          width: 50%;
          display: inline-block;
          text-align: right;
        `}
      >
        <label
          css={css`
            display: block;
          `}
          htmlFor="titleSearch"
        >
          Filter by Stripe
        </label>
        <select id="titleSearch" placeholder="Search by Title"></select>
      </div>
      <div
        css={css`
          margin: 4rem 1.5rem;
          @media (max-width: 600px) {
            margin: 2rem 1.5rem;
          }
        `}
      >
        <h1
          css={css`
            font-size: 3rem;
            margin: 0;
            text-align: center;
            @media (max-width: 600px) {
              font-size: 2rem;
              text-align: left;
            }
          `}
        >
          &ldquo;Stripes attract attention.&rdquo;
        </h1>
        <p
          css={css`
            text-align: right;
            font-size: 1.5rem;
            margin: 1.5rem;

            @media (max-width: 600px) {
              font-size: 1.5rem;
            }
          `}
        >
          - Paul Rand
        </p>
      </div>
    </div>
  )
}

export default StripeSearch
