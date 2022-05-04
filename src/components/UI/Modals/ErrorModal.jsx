/* eslint-disable import/order */
import React from 'react'
import { Modal } from './Modal'
import vector from '../../../assets/icons/vector.svg'
import { Button } from '../Buttons/Button'
import styled from '@emotion/styled'
import { theme } from '../../../assets/styles/styles'

export const ErrorModal = ({
   onCloseBackDrop,
   incorrect,
   exit,
   onClose,
   isOpen,
   props,
}) => {
   return (
      <Modal onCloseBackDrop={onCloseBackDrop} isOpen={isOpen}>
         <PromoConteiner>
            {incorrect && <img src={vector} alt="" onClick={onClose} />}
            <p>{props.title}</p>
            <ErrorSubmit>
               {(incorrect && (
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
               )) || (
                  <div>
                     <Button
                        bgColor="#A3A3A3"
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
                  </div>
               )}
            </ErrorSubmit>
         </PromoConteiner>
      </Modal>
   )
}
const PromoConteiner = styled.div`
   padding: 20px 30px 0px 30px;
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
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      margin-top: 25px;
   }
`
const ErrorSubmit = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 20px 24px;

   Button {
      width: 140px;
      height: 42px;
      margin: 10px 32px 0 32px;
   }
`
