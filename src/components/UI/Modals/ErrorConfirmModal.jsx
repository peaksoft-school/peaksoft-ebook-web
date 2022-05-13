/* eslint-disable import/order */
import React from 'react'
import { Button } from '../Buttons/Button'
import { theme } from '../../../assets/styles/styles'
import { Modal } from './Modal'
import styled from '@emotion/styled'

export const ErrorConfirmModal = ({ onCloseBackDrop, isOpen, exit, props }) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <ConfirmModal>
            <p>{props.title}</p>
            <ConfirmSubmit>
               <Button
                  padding="10px 24px 10px 24px"
                  bgColor="#FFFFFF"
                  color="#A3A3A3"
                  fontSize="16px"
                  ling-height="21.79px"
                  bgColorActive="#FF4C00"
                  bgColorHover="#484848"
               >
                  Отменить
               </Button>
               {(exit && (
                  <Button
                     padding="10px 24px 10px 24px"
                     bgColor={theme.secondary.darkBackground}
                     fontSize="16px"
                     ling-height="21.79px"
                     bgColorHover="#484848"
                     bgColorActive={theme.secondary.orange}
                  >
                     Выйти
                  </Button>
               )) || (
                  <Button
                     padding="10px 24px 10px 24px"
                     bgColor={theme.secondary.darkBackground}
                     fontSize="16px"
                     ling-height="21.79px"
                     bgColorHover="#484848"
                     bgColorActive={theme.secondary.orange}
                  >
                     Удалить
                  </Button>
               )}
            </ConfirmSubmit>
         </ConfirmModal>
      </Modal>
   )
}

const ConfirmModal = styled.div`
   padding: 10px 60px 0 60px;
   p {
      width: 330px;
      padding: 10px;
      text-align: center;
      font-family: 'Open Sans';
      font-size: 16px;
      margin-top: 25px;
   }
`
const ConfirmSubmit = styled.div`
   display: flex;
   justify-content: center;
   Button {
      margin: 20px;
   }
`