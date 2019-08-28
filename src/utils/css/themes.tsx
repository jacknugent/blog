import { css } from "@emotion/core"

export const colors = {
  red: "#FF6040",
  grey: "#A69B95",
  blue: "#3C64BE",
  lightGrey: "#EDEDED",
  darkGrey: "#404040",
}

export const button = css`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  border: 1px solid ${colors.blue};
  color: ${colors.blue};

  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${colors.blue};
    color: white;
  }
`
