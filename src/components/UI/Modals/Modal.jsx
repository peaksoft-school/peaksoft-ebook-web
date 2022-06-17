import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { Backdrop } from './Backdrop'

export const Modal = ({
   isOpen,
   onCloseBackDrop,
   children,
   top,
   withAnimation,
}) => {
   return (
      isOpen && (
         <>
            <Backdrop onClose={onCloseBackDrop} />
            <ModalContainer>
               {ReactDOM.createPortal(
                  <StyledModalWindow withAnimation={withAnimation} top={top}>
                     {children}
                  </StyledModalWindow>,
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
   & {
      -webkit-animation-name: ${({ withAnimation }) =>
         withAnimation ? 'slideInDown' : 'none'};
      animation-name: ${({ withAnimation }) =>
         withAnimation ? 'slideInDown' : 'none'};
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
   }
   @-webkit-keyframes slideInDown {
      0% {
         -webkit-transform: translate(-50%, -100%);
         transform: translate(-50%, -100%);
         visibility: visible;
      }
      100% {
         -webkit-transform: translate(-50%, -50%);
         transform: translate(-50%, -50%);
      }
   }
   @keyframes slideInDown {
      0% {
         -webkit-transform: translate(-50%, -100%);
         transform: translate(-50%, -100%);
         visibility: visible;
      }
      100% {
         -webkit-transform: translate(-50%, -50%);
         transform: translate(-50%, -50%);
      }
   }
`
