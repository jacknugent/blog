import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

const StripeSearch = (props: any) => {
  const quoteContainer = css`
    margin: 2rem 1.5rem;
    @media (max-width: 600px) {
      margin: 0.5rem 0;
    }
  `

  const quoteTitle = css`
    font-size: 2rem;
    margin: 0;
    text-align: left;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  `

  const quoteName = css`
    text-align: left;
    font-size: 1.25rem;
    margin: 1.5rem;
    @media (max-width: 600px) {
      font-size: 1.25rem;
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

  const data = useStaticQuery(graphql`
    {
      allStripeQuotesYaml {
        edges {
          node {
            name
            quote
            filter
          }
        }
      }
    }
  `).allStripeQuotesYaml.edges

  const filterValues = data.map((x: any) => x.node.filter)

  var quote = data.filter(
    (x: any) => x.node.filter === props.filterSelection
  )[0].node.quote

  var name = data.filter((x: any) => x.node.filter === props.filterSelection)[0]
    .node.name

  const filter = (
    <select id="titleSearch" css={FilterInput} onChange={e => props.filter(e)}>
      {filterValues.map((options: any) => (
        <option key={options}>{options}</option>
      ))}
    </select>
  )

  const renderQuote = () => {
    return (
      quote && (
        <div css={quoteContainer}>
          <h1 css={quoteTitle}>
            &ldquo;{quote}
            &rdquo;
          </h1>
          <p css={quoteName}>- {name}</p>
        </div>
      )
    )
  }

  return (
    <div>
      {renderQuote()}

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
          {filter}
        </div>
      </div>
    </div>
  )
}

export default StripeSearch
