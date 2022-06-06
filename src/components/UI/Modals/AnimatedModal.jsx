import styled from '@emotion/styled'
import React from 'react'
import ReactDOM from 'react-dom'
import { Backdrop } from './Backdrop'

export const AnimatedModal = ({ isMounted, onCloseModal, children }) => {
   return (
      isMounted && (
         <>
            <Backdrop onClose={onCloseModal} />
            {ReactDOM.createPortal(
               <ModalContainer>{children}</ModalContainer>,
               document.getElementById('modal')
            )}
         </>
      )
   )
}

const ModalContainer = styled.div`
   position: fixed;
   background: #ffffff;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 999;
   & {
      -webkit-animation-name: slideInDown;
      animation-name: slideInDown;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
   }
   @-webkit-keyframes slideInDown {
      0% {
         -webkit-transform: translate(-50%, -150%);
         transform: translate(-50%, -150%);
         visibility: visible;
      }
      100% {
         -webkit-transform: translate(-50%, -50%);
         transform: translate(-50%, -50%);
      }
   }
   @keyframes slideInDown {
      0% {
         -webkit-transform: translate(-50%, -150%);
         transform: translate(-50%, -150%);
         visibility: visible;
      }
      100% {
         -webkit-transform: translate(-50%, -50%);
         transform: translate(-50%, -50%);
      }
   }
`
