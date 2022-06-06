import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as SuccessIcon } from '../../../assets/icons/success.svg'
import { AnimatedModal } from './AnimatedModal'
import { useMountModal } from '../../../hooks/useMountModal'

export const SuccessModalVendor = ({
   title,
   isMounted,
   onCloseModal,
   delay,
}) => {
   const isVisible = useMountModal(isMounted, onCloseModal, delay)
   return (
      <AnimatedModal onCloseModal={onCloseModal} isMounted={isVisible}>
         <ModalInnerContainer>
            <SuccessIcon />
            <SuccessTitle>{title}</SuccessTitle>
         </ModalInnerContainer>
      </AnimatedModal>
   )
}
const ModalInnerContainer = styled.div`
   width: 460px;
   padding: 20px 29px 20px;
   text-align: center;
`
const SuccessTitle = styled.p`
   padding: 25px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
`
