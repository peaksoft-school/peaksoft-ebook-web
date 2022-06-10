import styled from '@emotion/styled'
import React from 'react'

export const VendorFooter = () => {
   return (
      <Footer>
         <LeftSideContainer>
            <h1>eBooK</h1>
            <p>Политика конфиденциальности</p>
         </LeftSideContainer>
         <RightSideContainer>
            <h2>Свяжитесь с нами</h2>
            <p>+996 707 123 456</p>
            <p>г. Бишкек ул. Исанова 45</p>
         </RightSideContainer>
      </Footer>
   )
}

const Footer = styled.footer`
   width: 100%;
   padding: 75px 227px 75px 80px;
   background: #1c1c1c;
   color: #ffffff;
   display: flex;
   justify-content: space-between;
   flex-shrink: 1;
`

const LeftSideContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 47px 0;
   h1 {
      font-family: 'Montserrat';
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
   }
   p {
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
   }
`
const RightSideContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 20px 0;
   font-family: 'Open Sans';
   h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
   }
   p {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
   }
`
