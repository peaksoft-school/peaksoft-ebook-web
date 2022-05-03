import styled from '@emotion/styled'
import React from 'react'
import { createPortal } from 'react-dom'

export const Backdrop = (props) => {
   return createPortal(
      <StyledBackdrop onClick={props.onClose} />,
      document.getElementById('background')
   )
}
const StyledBackdrop = styled.div`
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`
