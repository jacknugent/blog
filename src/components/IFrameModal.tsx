import * as React from "react"
import { css } from "@emotion/core"

import Modal from "react-modal"

const iframe = css``

const IFrameModal = (props: IFrameModalProps) => {
  return (
    <Modal
      style={{
        overlay: {
          zIndex: 999,
        },
      }}
      isOpen={props.isModal}
    >
      <iframe
        css={iframe}
        src={
          "https://www.youtube.com/embed/" +
          props.videoId +
          "?rel=0&autoplay=1&mute=0"
        }
      />
    </Modal>
  )
}

interface IFrameModalProps {
  isModal: boolean
  videoId: string
}

export default IFrameModal
