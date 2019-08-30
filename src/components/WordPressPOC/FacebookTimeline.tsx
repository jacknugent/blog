import * as React from "react"
import css from "@emotion/css"
import { useRef, useState, useEffect } from "react"

const FacebookTimeline = () => {
  const iframeContainer = useRef(null)
  const [iframeWidth, setIframeWidth] = useState()

  var iFrameSrc =
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=475838662997369&height=500&width=" +
    iframeWidth

  useEffect(() => {
    setIframeWidth(iframeContainer.current.offsetWidth)
    console.log(iframeWidth)
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
          max-width: 100%;
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
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </div>
    </span>
  )
}

export default FacebookTimeline
