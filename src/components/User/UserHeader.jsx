import React, { useState } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite-icon.svg'
import { Logo } from '../UI/Logo/Logo'
import { Button } from '../UI/Buttons/Button'
import { theme } from '../../assets/styles/styles'
import { GenreMenu } from '../UI/GenreMenu/GenreMenu'

export const UserHeader = ({ countOfItems }) => {
   const booksList = []
   const [isVisibleGenreMenu, setIsVisibleGenreMenu] = useState(false)
   const changeVisibleGenreMenu = () => {
      setIsVisibleGenreMenu((prevState) => !prevState)
   }
   return (
      <>
         <VendorHeaderContainer>
            <Logo />
            <InnerContainer>
               <SearchInput booksList={booksList} />
               <StyledFavoriteIcon />
               <Basket>Корзина ({countOfItems})</Basket>
            </InnerContainer>
         </VendorHeaderContainer>
         <ContainerOfLinks>
            <StyledNavlinks>
               <StyledGenres onClick={changeVisibleGenreMenu}>
                  <MenuIcon />
                  <p>Жанры</p>
                  {isVisibleGenreMenu && <GenreMenu genres={[]} />}
               </StyledGenres>
               <ul>
                  <li>
                     <NavLink to="electronicbooks">Электронные книги</NavLink>
                  </li>
                  <li>
                     <NavLink to="audiobooks">Aудиокниги</NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="promocode"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Промокоды
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="becomevendor" className="eBook">
                        Начать продавать на eBook
                     </NavLink>
                  </li>
               </ul>
            </StyledNavlinks>
            <Button
               padding="10px 24px 10px 24px"
               bgColor={theme.secondary.darkBackground}
               fontSize="16px"
               ling-height="21.79px"
               bgColorHover="#484848"
               bgColorActive={theme.secondary.orange}
            >
               Войти
            </Button>
         </ContainerOfLinks>
      </>
   )
}

const StyledNavlinks = styled.div`
   display: flex;
   justify-content: space-between;
   width: 800px;
`

const StyledGenres = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   p {
      padding-left: 14px;
      font-weight: 600;
      font-size: 16px;
   }
`

const ContainerOfLinks = styled.div`
   margin: 0 auto;
   width: 1270px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 40px 0;
   ul {
      list-style: none;
      width: 598px;
      height: 19px;
      display: flex;
      justify-content: space-around;
      a {
         color: black;
         text-decoration: none;
         font-size: 14px;
         font-weight: 400;
         padding: 0 10px 3px 10px;
      }
      .eBook {
         color: #ff4c00;
         font-weight: 600;
         border-bottom: none;
      }
   }
   .active {
      color: #f34901;
      border-bottom: 1px solid #f34901;
   }
`

const StyledFavoriteIcon = styled(FavoriteIcon)`
   margin-right: 30px;
   cursor: pointer;
`

const Basket = styled.p`
   display: flex;
   align-items: center;
   justify-content: space-around;
   cursor: pointer;
`
const VendorHeaderContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   svg {
      margin-left: 37px;
   }
`
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-left: 44px;
`
