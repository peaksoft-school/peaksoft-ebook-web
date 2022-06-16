import React, { useState } from 'react'
import styled from '@emotion/styled'
import { NavLink, useNavigate } from 'react-router-dom'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite-icon.svg'
import { Logo } from '../UI/Logo/Logo'
import { Button } from '../UI/Buttons/Button'
import { theme } from '../../utils/constants/theme'
import { GenreMenu } from '../UI/GenreMenu/GenreMenu'

export const UserHeader = ({ countOfItems }) => {
   const booksList = []
   const navigate = useNavigate()
   const [isVisibleGenreMenu, setIsVisibleGenreMenu] = useState(false)
   const changeVisibleGenreMenu = () => {
      setIsVisibleGenreMenu((prevState) => !prevState)
   }

   const navigateToClientProfile = () => {
      navigate(`/client-profile`)
   }
   const clientEnterSumbitHandler = () => {
      navigateToClientProfile()
   }
   return (
      <VendorHeaderContainer>
         <InnerContainer>
            <StyledLogo />
            <SearchInput booksList={booksList} />
            <StyledFavoriteIcon />
            <Basket onClick={() => navigate('/basket')}>
               Корзина ({countOfItems})
            </Basket>
         </InnerContainer>
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
                     <NavLink to="/becomevendor" className="eBook">
                        Начать продавать на eBook
                     </NavLink>
                  </li>
               </ul>
            </StyledNavlinks>
            <Button
               padding="10px 24px"
               bgColor={theme.secondary.darkBackground}
               fontSize="16px"
               ling-height="21.79px"
               bgColorHover="#484848"
               bgColorActive={theme.secondary.orange}
               onClick={clientEnterSumbitHandler}
            >
               Войти
            </Button>
         </ContainerOfLinks>
      </VendorHeaderContainer>
   )
}

const StyledLogo = styled(Logo)`
   margin-right: 30px;
`

const StyledNavlinks = styled.div`
   display: flex;
   justify-content: space-between;
   width: 760px;
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
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 40px 15px;
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
   margin: 0 30px 0 37px;
   cursor: pointer;
`

const Basket = styled.p`
   display: flex;
   align-items: center;
   justify-content: space-around;
   cursor: pointer;
`
const VendorHeaderContainer = styled.div`
   min-width: 1280px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-direction: column;
   position: fixed;
   right: 50%;
   transform: translateX(50%);
   background: white;
   z-index: 99;
   flex-shrink: 0;
`
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
