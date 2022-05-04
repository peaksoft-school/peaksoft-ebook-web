import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { Backdrop } from './Backdrop'

export const Modal = ({ isOpen, onCloseBackDrop, children }) => {
   return (
      isOpen && (
         <>
            <Backdrop onClose={onCloseBackDrop} />
            {ReactDOM.createPortal(
               <StyledModalWindow>{children}</StyledModalWindow>,
               document.getElementById('modal')
            )}
         </>
      )
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
