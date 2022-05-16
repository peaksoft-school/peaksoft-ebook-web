import styled from '@emotion/styled'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as ApplicationsIcon } from '../../assets/icons/applications-icon.svg'
import { ReactComponent as VendorIcon } from '../../assets/icons/vendor-icon.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user-icon.svg'
import { ReactComponent as BooksIcon } from '../../assets/icons/books-icon.svg'
import { ReactComponent as FilledApplicationsIcon } from '../../assets/icons/filled-applications-icon.svg'
import { ReactComponent as FilledVendorIcon } from '../../assets/icons/filled-vendor-icon.svg'
import { ReactComponent as FilledUserIcon } from '../../assets/icons/filled-user-icon.svg'
import { ReactComponent as FilledBooksIcon } from '../../assets/icons/filled-books-icon.svg'
import { Logo } from '../UI/Logo/Logo'

export const SideDrawer = () => {
   const { pathname } = useLocation()
   // console.log(pathname.split('/'))
   const pathnameChangeHandler = (path) => {
      return pathname === path
   }
   return (
      <StyledContainer>
         <Logo margin="0 auto" />
         <nav>
            <ul>
               <li>
                  <StyledNavlink
                     to="applications"
                     className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                     {pathnameChangeHandler('/applications') ? (
                        <FilledApplicationsIcon />
                     ) : (
                        <ApplicationsIcon />
                     )}
                     Заявки
                  </StyledNavlink>
               </li>
               <li>
                  <StyledNavlink to="vendors">
                     {pathnameChangeHandler('/vendors') ? (
                        <FilledVendorIcon />
                     ) : (
                        <VendorIcon />
                     )}
                     Продавцы
                  </StyledNavlink>
               </li>
               <li>
                  <StyledNavlink to="users">
                     {pathnameChangeHandler('/users') ? (
                        <FilledUserIcon />
                     ) : (
                        <UserIcon />
                     )}
                     Пользователи
                  </StyledNavlink>
               </li>
               <li>
                  <StyledNavlink to="books">
                     {pathnameChangeHandler('/books') ? (
                        <FilledBooksIcon />
                     ) : (
                        <BooksIcon />
                     )}
                     Книги
                  </StyledNavlink>
               </li>
            </ul>
         </nav>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   min-width: 250px;
   height: 100%;
   background-color: #f34901;
   ul {
      padding: 60px 0;
      text-decoration: none;
      font-size: 16px;
      font-family: 'Open Sans';
      font-weight: 400;
      display: block;
      list-style: none;
      line-height: 50px;
      & li {
         width: 100%;
      }
   }
   svg {
      margin: 0 15px 0 42px;
      width: 20px;
   }
   .active {
      text-decoration: none;
      color: #f34901;
      background-color: white;
   }
   .active path {
      fill: #f34901;
   }
`

const StyledNavlink = styled(NavLink)`
   width: 100%;
   display: flex;
   justify-content: start;
   align-items: center;
   text-decoration: none;
   color: white;
   font-size: 16px;
`
