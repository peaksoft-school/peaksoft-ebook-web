/* eslint-disable import/order */
import React from 'react'
import { Modal } from './Modal'
import styled from '@emotion/styled'
import success from '../../../assets/icons/success.svg'

export const SuccessConfirmModal = ({ onCloseBackDrop, isOpen, props }) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <ConfirmConteiner>
            <SuccessIcon src={success} />
            <SuccessTitle>{props.title}</SuccessTitle>
         </ConfirmConteiner>
      </Modal>
   )
}
const ConfirmConteiner = styled.div`
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
