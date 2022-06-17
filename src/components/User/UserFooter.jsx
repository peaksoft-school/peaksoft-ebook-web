import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_ROUTES } from '../../utils/constants/routes'

export const UserFooter = () => {
   const navigate = useNavigate()
   return (
      <Footer>
         <Logo onClick={() => navigate(DEFAULT_ROUTES.INDEX.PATH)}>eBooK</Logo>
         <InnerContainer>
            <div>
               <p>Жанры</p>
               <p>Аудиокниги</p>
               <p>Электронные книги</p>
            </div>
            <div>
               <p>Бестселлеры</p>
               <p>Промокоды</p>
               <p>Политика конфиденциальности</p>
            </div>
            <div>
               <h3>Свяжитесь с нами</h3>
               <p>+996 707 123 456</p>
               <p>г. Бишкек ул. Исанова 45</p>
            </div>
         </InnerContainer>
      </Footer>
   )
}
const Footer = styled.div`
   width: 100%;
   padding: 75px 227px 75px 80px;
   background: #1c1c1c;
   color: #ffffff;
   display: flex;
   justify-content: flex-start;
   flex-shrink: 1;
   gap: 0 73px;
`
const Logo = styled.h1`
   font-family: 'Montserrat';
   font-weight: 500;
   font-size: 28px;
   line-height: 34px;
   color: #ffffff;
   cursor: pointer;
`
const InnerContainer = styled.div`
   display: flex;
   gap: 0 146px;
   width: 100%;

   & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px 0;
      font-family: 'Open Sans';
      h3 {
         font-weight: 600;
         font-size: 20px;
         line-height: 130%;
         white-space: nowrap;
         cursor: pointer;
         &:active {
            opacity: 0.9;
         }
      }
      p {
         font-weight: 400;
         font-size: 16px;
         line-height: 22px;
         white-space: nowrap;
         cursor: pointer;
      }
   }
`
