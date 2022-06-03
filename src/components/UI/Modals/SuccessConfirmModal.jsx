import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { flushSync } from 'react-dom'
import { Modal } from './Modal'
import success from '../../../assets/icons/success.svg'

export const SuccessConfirmModal = ({ onCloseBackDrop, isOpen, title }) => {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      if (!isOpen) return () => null
      flushSync(() => {
         setIsVisible(true)
      })
      const timerId = setTimeout(() => {
         flushSync(() => {
            setIsVisible(false)
         })
      }, 2000)
      return () => clearTimeout(timerId)
   }, [isOpen])

   return (
      isVisible && (
         <Modal onCloseBackDrop={onCloseBackDrop} isOpen>
            <ConfirmContainer>
               <SuccessIcon src={success} />
               <SuccessTitle>{title}</SuccessTitle>
            </ConfirmContainer>
         </Modal>
      )
   )
}
const ConfirmContainer = styled.div`
   width: 460px;
   padding: 20px 29px 20px;
`
const SuccessIcon = styled.img`
   width: 46px;
   height: 46px;
`
const SuccessTitle = styled.p`
   padding: 25px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
`
