import * as React from "react"
import css from "@emotion/css"
import { useRef, useState, useEffect } from "react"

const FacebookTimeline = (props: FacebookProps) => {
  const iframeContainer = useRef(null)
  const [iframeWidth, setIframeWidth] = useState()

  var iFrameSrc =
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" +
    props.page +
    "&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=475838662997369&height=500&width=" +
    iframeWidth

  useEffect(() => {
    setIframeWidth(
      iframeContainer.current.offsetWidth >= 300
        ? 300
        : iframeContainer.current.offsetWidth
    )
  }, [iframeContainer])

  return (
    <span
      ref={iframeContainer}
      css={css`
        width: 50%;
        display: inline-block;
        @media (max-width: 800px) {
          width: 100%;
          display: block;
        }
        iframe {
          margin: auto;
          max-width: 300px;
          display: block;
        }
      `}
    >
      <div
        css={css`
          margin: auto;
        `}
      >
        <iframe
          src={iFrameSrc}
          width={`${iframeWidth}`}
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allow="encrypted-media"
        ></iframe>
      </div>
    </span>
  )
}

interface FacebookProps {
  page: "facebook"
}

export default FacebookTimeline
