/* eslint-disable import/no-useless-path-segments */
import React from 'react'
import styled from '@emotion/styled'
import { Button } from '../Buttons/Button'
import success from '../../../assets/icons/success.svg'
import vector from '../../../assets/icons/vector.svg'
import { Modal } from './Modal'

export const SuccessModal = ({ onClose, onClick, onCloseBackDrop, isOpen }) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <SuccessConteiner>
            <SuccessImg>
               <SuccessIcon src={success} />
               <CloseIcon src={vector} onClick={onClose} />
            </SuccessImg>
            <SuccessTitle>Ваш заказ успешно оформлен!</SuccessTitle>
            <Button
               onClick={onClick}
               width="223px"
               bgColor="#1C1C1C"
               bgColorActive="#FF4C00"
               bgColorHover="#484848"
            >
               Продолжить покупки
            </Button>
         </SuccessConteiner>
      </Modal>
   )
}
const SuccessConteiner = styled.div`
   width: 460px;
   padding: 20px 29px 20px;
`
const SuccessImg = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   position: relative;
`
const SuccessIcon = styled.img`
   width: 46px;
   height: 46px;
`
const CloseIcon = styled.img`
   width: 14px;
   height: 14px;
   position: absolute;
   cursor: pointer;
   right: 0;
   top: 0;
`

const SuccessTitle = styled.p`
   padding: 25px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
`
