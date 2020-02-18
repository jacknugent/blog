import { css } from "@emotion/core";

export const colors = {
  red: "#c4302b",
  blue: "#3C64BE",
  lightBlue: "#EDF2FF",
  lightGrey: "#EDEDED",
  mediumGrey: "#D0D0D0",
  darkGrey: "#404040",
  darkBlue: "#264487",
  orange: "#FF6040"
};

export const button = css`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  display: inline-block;
  border-radius: 0.5rem;
  text-decoration: none;
  background-color: white;
  border: 1px solid ${colors.blue};
  color: ${colors.blue};
  transition: background-color 0.25s, transform 0.25s;
  &:hover,
  &.active {
    cursor: pointer;
    color: white;
    background-color: ${colors.blue};
  }
  @media (max-width: 600px) {
    padding: 0.75rem;
    &:hover {
      background-color: ${colors.lightGrey};
      color: ${colors.blue};
    }
  }
`;

export const screenSize = {
  mobile: "600px",
  tablet: "900px"
};
