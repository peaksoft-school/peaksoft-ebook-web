/* eslint-disable import/order */
import React from 'react'
import { Button } from '../Buttons/Button'
import { Modal } from './Modal'
import styled from '@emotion/styled'
import { theme } from '../../../utils/constants/theme'

export const ErrorConfirmModal = ({
   onCloseBackDrop,
   isOpen,
   exit,
   title,
   onCancel,
   onExit,
}) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <ConfirmModal>
            <p>{title}</p>
            <ConfirmSubmit>
               <CancelButton onClick={onCancel}>Отменить</CancelButton>
               {(exit && (
                  <Button
                     padding="10px 24px 10px 24px"
                     bgColor={theme.secondary.darkBackground}
                     fontSize="16px"
                     ling-height="21.79px"
                     bgColorHover="#484848"
                     bgColorActive={theme.secondary.orange}
                     onClick={onCancel}
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
                     onClick={onExit}
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
const CancelButton = styled.button`
   outline: none;
   border: none;
   padding: 10px 24px;
   cursor: pointer;
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: #a3a3a3;
   background: #ffffff;
   &:hover {
      color: #818181;
   }
   &:active {
      color: #000000;
   }
`
