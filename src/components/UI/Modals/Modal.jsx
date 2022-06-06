import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { Backdrop } from './Backdrop'

export const Modal = ({ isOpen, onCloseBackDrop, children, top }) => {
   return (
      isOpen && (
         <>
            <Backdrop onClose={onCloseBackDrop} />
            <ModalContainer>
               {ReactDOM.createPortal(
                  <StyledModalWindow top={top}>{children}</StyledModalWindow>,
                  document.getElementById('modal')
               )}
            </ModalContainer>
         </>
      )
   )
}
const ModalContainer = styled.div`
   display: flex;
   align-items: center;
`
const StyledModalWindow = styled.div`
   position: fixed;
   background: #ffffff;
   top: ${({ top }) => top || '50%'};
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 999;
   text-align: center;
`
