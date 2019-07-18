import * as React from "react"
import { css } from "@emotion/core"

const StripeSearch = (props: any) => {
  return (
    <div>
      <div
        css={css`
          margin: 4rem 1.5rem;
          @media (max-width: 600px) {
            margin: 2rem 0;
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
      <div
        css={css`
          margin: 1rem 0;
        `}
      >
        <div
          css={css`
            width: 50%;
            display: inline-block;
            @media (max-width: 600px) {
              display: block;
              width: 100%;
              margin: 0.5rem 0;
            }
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
              height: 24px;
              font-size: 16px;
              @media (max-width: 600px) {
                width: 100%;
                box-sizing: border-box;
              }
            `}
            id="titleSearch"
            placeholder=""
            value={props.searchValue}
            onChange={e => props.search(e)}
          ></input>
        </div>
        <div
          css={css`
            width: 50%;
            display: inline-block;
            text-align: right;
            @media (max-width: 600px) {
              text-align: left;
              margin: 0.5rem 0;
              width: 100%;
            }
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
          <select
            id="titleSearch"
            css={css`
              width: 75%;
              height: 24px;
              @media (max-width: 600px) {
                width: 100%;
                height: 24px;
              }
            `}
            onChange={e => props.filter(e)}
          >
            <option value="All">All</option>
            <option value="deviant">Deviant</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default StripeSearch
