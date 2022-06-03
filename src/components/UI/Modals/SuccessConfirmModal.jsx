import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { flushSync } from 'react-dom'
import { Modal } from './Modal'
import success from '../../../assets/icons/success.svg'

export const SuccessConfirmModal = ({ onCloseBackDrop, isOpen, title }) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <ConfirmConteiner onClick={(e) => e.stopPropagation()}>
            <SuccessIcon src={success} />
            <SuccessTitle>
               <b>{title}</b> был успешно принят!
            </SuccessTitle>
         </ConfirmConteiner>
      </Modal>
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
