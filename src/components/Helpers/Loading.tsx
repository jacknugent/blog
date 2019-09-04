import * as React from "react"
import css from "@emotion/css"
import { keyframes } from "@emotion/core"

const Loading = (props: LoadingProps) => {
  const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    opacity: 0;
  }

  40%, 43% {
    opacity: 1;
  }

  70% {
    opacity: 0;
  }

  90% {
    opacity: 1;
  }
`
  const spinner = css`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid #fff;
      border-radius: 50%;
      animation: ${bounce} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: black transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  `

  return props.hide && <div>Sending...</div>
}

export default Loading

interface LoadingProps {
  hide: boolean
}
