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

  return props.hide && <div>Sending...</div>
}

export default Loading

interface LoadingProps {
  hide: boolean
}
