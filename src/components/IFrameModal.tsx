import * as React from "react"
import { css } from "@emotion/core"
import Modal from "react-modal"
import IFrame from "../components/IFrame"
import styled from "@emotion/styled"

const IFrameModal = (props: IFrameModalProps) => {
  const StyledModal = styled(Modal)`
    z-index: 999;
    right: 0;
    left: 0;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;

    width: 93%;

    @media (max-width: 1500px) {
      width: 100%;
    }
  `

  return (
    <StyledModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {
        props.showModal(false)
      }}
      style={{
        overlay: {
          zIndex: 999,
          padding: 0,
        },
      }}
      isOpen={props.isModal}
    >
      <div>
        <IFrame videoId={props.videoId} />
      </div>
    </StyledModal>
  )
}

interface IFrameModalProps {
  isModal: boolean
  showModal: any
  videoId: string
}

export default IFrameModal
