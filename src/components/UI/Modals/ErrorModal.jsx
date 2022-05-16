/* eslint-disable import/order */
import React from 'react'
import { Modal } from './Modal'
import vector from '../../../assets/icons/vector.svg'
import { Button } from '../Buttons/Button'
import styled from '@emotion/styled'
import { theme } from '../../../utils/constants/theme'

export const ErrorModal = ({ onCloseBackDrop, onClose, isOpen }) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <PromoConteiner>
            <img src={vector} alt="" onClick={onClose} />
            <p>Введены неверные символы в коде купона</p>
            <ErrorSubmit>
               <Button
                  padding="10px 24px 10px 24px"
                  bgColor={theme.secondary.darkBackground}
                  fontSize="16px"
                  ling-height="21.79px"
                  bgColorHover="#484848"
                  bgColorActive={theme.secondary.orange}
               >
                  Ок
               </Button>
            </ErrorSubmit>
         </PromoConteiner>
      </Modal>
   )
}
const PromoConteiner = styled.div`
   padding: 30px 50px 0px 50px;
   img {
      position: absolute;
      cursor: pointer;
      right: 10px;
      top: 5px;
      padding: 10px;
   }
   p {
      text-align: center;
      font-family: 'Open Sans';
      font-size: 16px;
      margin-top: 25px;
   }
`
const ErrorSubmit = styled.div`
   justify-content: center;
   padding: 20px 24px;
   Button {
      width: 160px;
      height: 42px;
      margin: 10px 32px 0 32px;
   }
`
