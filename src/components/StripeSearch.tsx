import * as React from "react"
import { css } from "@emotion/core"

const StripeSearch = (props: any) => {
  const quoteContainer = css`
    margin: 4rem 1.5rem;
    @media (max-width: 600px) {
      margin: 0.5rem 0;
    }
  `

  const quoteTitle = css`
    font-size: 3rem;
    margin: 0;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  `

  const quoteName = css`
    text-align: right;
    font-size: 1.5rem;
    margin: 1.5rem;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  `
  const searchHeaders = css`
    display: block;
    font-size: 20px;
    margin: 0.25rem 0;
  `

  const StripeSearchContainer = css`
    width: 50%;
    display: inline-block;
    @media (max-width: 600px) {
      display: block;
      width: 100%;
      margin: 0.5rem 0;
    }
  `

  const StripeFilterContainer = css`
    text-align: right;
    @media (max-width: 600px) {
      text-align: left;
    }
  `

  const TitleInput = css`
    width: 75%;
    height: 24px;
    font-size: 16px;
    border-radius: 2px;
    @media (max-width: 600px) {
      width: 100%;
      box-sizing: border-box;
      height: 30px;
    }
  `

  const FilterInput = css`
    width: 75%;
    height: 30px;
    font-size: 16px;
    @media (max-width: 600px) {
      width: 100%;
    }
  `

  return (
    <div>
      <div css={quoteContainer}>
        <h1 css={quoteTitle}>&ldquo;Stripes attract attention.&rdquo;</h1>
        <p css={quoteName}>- Paul Rand</p>
      </div>
      <div
        css={css`
          margin: 1rem 0;
        `}
      >
        <div css={StripeSearchContainer}>
          <label css={searchHeaders} htmlFor="titleSearch">
            Search by Title
          </label>
          <input
            css={TitleInput}
            id="titleSearch"
            placeholder=""
            value={props.searchValue}
            onChange={e => props.search(e)}
          ></input>
        </div>
        <div css={[StripeSearchContainer, StripeFilterContainer]}>
          <label css={searchHeaders} htmlFor="titleSearch">
            Filter by Stripe
          </label>
          <select
            id="titleSearch"
            css={FilterInput}
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
