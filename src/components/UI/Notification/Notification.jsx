import styled from '@emotion/styled'
import React from 'react'

export const Notification = ({ title, message, type }) => {
   return (
      <NotificationTextContainer>
         <VerticalLine type={type} />
         <StyledText>
            <h3>{title}</h3>
            <p>{message}</p>
         </StyledText>
      </NotificationTextContainer>
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

const NotificationTextContainer = styled.div`
   display: flex;
   align-items: center;
   width: max-content;
`
