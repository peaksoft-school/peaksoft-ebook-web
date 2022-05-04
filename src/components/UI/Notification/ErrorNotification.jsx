import styled from '@emotion/styled'
import React from 'react'
import errorVector from '../../../assets/icons/errorVector.svg'

export const ErrorNotification = () => {
   return (
      <div>
         <Notification>
            <VerticalLine />
            <StyledMessage>
               <h3>Ошибка</h3>
               <p>Пожалуйста, заполните все поля</p>
            </StyledMessage>
            <img src={errorVector} alt="" />
         </Notification>
      </div>
   )
}

const VerticalLine = styled.div`
   margin-left: 8px;
   margin-top: 5px;
   height: 43px;
   width: 3px;
   border-radius: 5px;
   background-color: red;
`
const StyledMessage = styled.div`
   margin-right: 80px;
   h3 {
      font-size: 16px;
      display: flex;
      align-items: center;
   }
   p {
      font-size: 14px;
      color: #a3a3a3;
      display: flex;
      align-items: center;
   }
`
const Notification = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: white;
   align-items: center;
   width: 420px;
   position: absolute;
   top: 100px;
   right: 0;
   transform: translateY(-50%);
   animation: 4s slide-left;
   @keyframes slide-left {
      from {
         margin-right: -100%;
      }
      to {
         margin-right: 0%;
      }
   }
   img {
      padding: 35px;
   }
`
