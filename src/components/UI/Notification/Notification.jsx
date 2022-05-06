import styled from '@emotion/styled'
import React from 'react'
import errorXIcon from '../../../assets/icons/errorX.svg'

export const Notification = ({ isOpen, title, message, type, onClose }) => {
   return (
      isOpen && (
         <NotificationContainer>
            <NotificationTextContainer>
               <VerticalLine type={type} />
               <StyledText>
                  <h3>{title}</h3>
                  <p>{message}</p>
               </StyledText>
            </NotificationTextContainer>
            <img src={errorXIcon} alt="x-icon" onClick={onClose} />
         </NotificationContainer>
      )
   )
}

const VerticalLine = styled.div`
   margin-right: 20px;
   margin-left: 6px;
   height: 43px;
   width: 3px;
   border-radius: 5px;
   background-color: ${({ type }) =>
      type === 'success' ? '#00AB1B' : '#EF3F3F'};
`
const StyledText = styled.div`
   h3 {
      font-size: 16px;
      padding-bottom: 5px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
   }
   p {
      font-size: 14px;
      line-height: 130%;
      color: #a3a3a3;
      width: 310px;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`
const NotificationContainer = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: white;
   align-items: center;
   width: 420px;
   position: absolute;
   top: 100px;
   right: 0;
   transform: translateY(-50%);
   animation: 1s slide-left;
   @keyframes slide-left {
      from {
         width: 0;
      }
      to {
         width: 420px;
      }
   }
   img {
      padding: 35px;
   }
`
const NotificationTextContainer = styled.div`
   display: flex;
   align-items: center;
   width: max-content;
`
