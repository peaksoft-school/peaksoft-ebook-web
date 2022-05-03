import React from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'
import { Backdrop } from './Backdrop'

export const Modal = ({ onCloseBackDrop, children }) => {
   return (
      <>
         <Backdrop onClose={onCloseBackDrop} />
         {createPortal(
            <StyledModalWindow>{children}</StyledModalWindow>,
            document.getElementById('modal')
         )}
      </>
   )
}

const StyledModalWindow = styled.div`
   background: #ffffff;
   position: absolute;
   text-align: center;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 10;
`
