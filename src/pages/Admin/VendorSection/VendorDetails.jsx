import React from 'react'
import styled from '@emotion/styled'
import { NavLink, Outlet, useParams } from 'react-router-dom'

export const VendorDetails = () => {
   const params = useParams()
   return (
      <VendorProfileContainer>
         <span> Продавцы / Мыктыбек Мыктыбеков</span>
         <ContainerOfLinks>
            <ul>
               <li>
                  <NavLink
                     to={`/vendors/${params.id}/profile`}
                     className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                     Профиль
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to={`/vendors/${params.id}/books`}
                     className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                     Книги
                  </NavLink>
               </li>
            </ul>
         </ContainerOfLinks>
         <Outlet />
      </VendorProfileContainer>
   )
}

const VendorProfileContainer = styled.div`
   width: 1147px;
   height: 456px;
   padding-top: 50px;
   span {
   }
`
const ContainerOfLinks = styled.div`
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   padding: 89px 400px 60px 400px;
   ul {
      list-style: none;
      width: 100%;
      display: flex;
      justify-content: space-between;
   }
   a {
      color: black;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0 45px 7px 45px;
   }
   .active {
      color: #f34901;
      border-bottom: 2px solid #f34901;
      font-weight: 600;
   }
`
