import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link as ScrollLink } from 'react-scroll'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite-icon.svg'
import { Logo } from '../UI/Logo/Logo'
import { Button } from '../UI/Buttons/Button'
import { theme } from '../../utils/constants/theme'
import { GenreMenu } from '../UI/GenreMenu/GenreMenu'
import { SIGN_IN_QUERY_PARAMS } from '../../utils/constants/general'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { PopUpBackdrop } from '../UI/PopUp/PopUpBackdrop'
import { getCountOfBookInCount, getGenreList } from '../../store/user-slice'
import { PopUp } from '../UI/PopUp/PopUp'
import { logout } from '../../store/auth-slice'
import { AnimatedModal } from '../UI/Modals/AnimatedModal'
import { CLIENT_ROUTES, DEFAULT_ROUTES } from '../../utils/constants/routes'

export const UserHeader = () => {
   const { isAuthorized, userName } = useSelector((state) => state.auth)

   const { genreList, countOfBooksInBasket } = useSelector(
      (state) => state.user
   )

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [, setSearchParams] = useSearchParams()

   const [isVisibleGenreMenu, setIsVisibleGenreMenu] = useState(false)

   const [isShowOptions, setIsShowOptions] = useState(false)

   const [isShowLogoutModal, setIsShowLogoutModal] = useState(false)

   const showPopUp = () => {
      setIsShowOptions((isShowed) => !isShowed)
   }
   const showLogoutModal = () => {
      setIsShowLogoutModal((isShowed) => !isShowed)
   }

   const changeVisibleGenreMenu = () => {
      setIsVisibleGenreMenu((prevState) => !prevState)
   }

   const loginHandler = () => {
      setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
   }
   useEffect(() => {
      dispatch(getGenreList())
      if (isAuthorized) {
         dispatch(getCountOfBookInCount())
      }
   }, [getCountOfBookInCount])
   const options = [
      {
         title: 'Профиль',
         action: () => {
            showPopUp()
            navigate(CLIENT_ROUTES.PROFILE.PATH)
         },
         id: 'e1',
      },
      {
         title: 'Выйти',
         id: 'e2',
         action: () => {
            showLogoutModal()
            showPopUp()
         },
      },
   ]
   const passToBasket = () => {
      return isAuthorized
         ? navigate(CLIENT_ROUTES.CLIENT_BASKET.PATH)
         : loginHandler()
   }
   return (
      <VendorHeaderContainer>
         <InnerContainer>
            <Logo />
            <SearchInput booksList={[]} />
            <StyledFavoriteIcon />
            <Basket onClick={passToBasket}>
               Корзина ({isAuthorized ? countOfBooksInBasket : 0})
            </Basket>
         </InnerContainer>
         <ContainerOfLinks>
            <StyledNavlinks>
               <StyledGenres onClick={changeVisibleGenreMenu}>
                  <MenuIcon />
                  <p>Жанры</p>
               </StyledGenres>
               <ul>
                  <li>
                     <StyledScrollLink
                        activeClass="active"
                        smooth
                        spy
                        to="electronicbooks"
                     >
                        Электронные книги
                     </StyledScrollLink>
                  </li>
                  <li>
                     <StyledScrollLink
                        activeClass="active"
                        smooth
                        spy
                        to="audiobooks"
                     >
                        Aудиокниги
                     </StyledScrollLink>
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
                     <NavLink
                        to={DEFAULT_ROUTES.BECOME_VENDOR.PATH}
                        className="eBook"
                     >
                        Начать продавать на eBook
                     </NavLink>
                  </li>
               </ul>
            </StyledNavlinks>
            {isAuthorized ? (
               <ProfileButtonContainer>
                  <ProfileButton onClick={showPopUp}>
                     <ProfileIcon />
                     {userName}
                  </ProfileButton>
                  {isShowOptions && (
                     <PopUp options={options} onCloseBackDrop={showPopUp} />
                  )}
               </ProfileButtonContainer>
            ) : (
               <Button
                  padding="10px 24px"
                  bgColor={theme.secondary.darkBackground}
                  fontSize="16px"
                  ling-height="21.79px"
                  bgColorHover="#484848"
                  bgColorActive={theme.secondary.orange}
                  onClick={loginHandler}
               >
                  Войти
               </Button>
            )}
         </ContainerOfLinks>
         {isVisibleGenreMenu && (
            <>
               <PopUpBackdrop onClose={changeVisibleGenreMenu} />
               <GenreMenu genres={genreList} />
            </>
         )}
         <AnimatedModal
            isMounted={isShowLogoutModal}
            onCloseModal={showLogoutModal}
         >
            <LogoutModalContainer>
               <h3>Вы уверены, что хотите выйти?</h3>
               <div>
                  <CancelButton onClick={showLogoutModal}>
                     Отменить
                  </CancelButton>
                  <Button
                     padding="10px 24px"
                     bgColor={theme.secondary.darkBackground}
                     fontSize="16px"
                     ling-height="21.79px"
                     bgColorHover="#484848"
                     bgColorActive={theme.secondary.orange}
                     onClick={() => logout(navigate)}
                  >
                     Выйти
                  </Button>
               </div>
            </LogoutModalContainer>
         </AnimatedModal>
      </VendorHeaderContainer>
   )
}
const StyledScrollLink = styled(ScrollLink)`
   cursor: pointer;
   .active {
      color: #f34901;
      border-bottom: 1px solid #f34901;
   }
`
const VendorHeaderContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   padding: 0 80px;
   gap: 20px 0;
   position: relative;
   width: 100%;
`
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0 44.5px;
`

const StyledFavoriteIcon = styled(FavoriteIcon)`
   cursor: pointer;
   width: 2rem;
   height: 2rem;
`
const Basket = styled.p`
   width: fit-content;
   white-space: nowrap;
   height: 1rem;
   cursor: pointer;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
`
const ContainerOfLinks = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
   ul {
      list-style: none;
      width: fit-content;
      display: flex;
      white-space: nowrap;
      align-items: flex-start;
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
const StyledNavlinks = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 0 86px;
`

const StyledGenres = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
   position: relative;
   gap: 0 14px;
   p {
      font-weight: 600;
      font-size: 16px;
   }
`
const ProfileButtonContainer = styled.div`
   position: relative;
`
const ProfileButton = styled.button`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: #222222;
   outline: none;
   border: 1px solid #1c1c1c;
   background: inherit;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 10px 24px;
   gap: 10px;
   cursor: pointer;
   text-transform: capitalize;
`
const LogoutModalContainer = styled.div`
   display: flex;
   gap: 24px 0;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   padding: 1.5rem 4rem;
   h3 {
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      text-align: center;
      color: #000000;
   }
   div {
      display: flex;
      gap: 0 32px;
      justify-content: center;
      align-items: center;
   }
`
const CancelButton = styled.button`
   outline: none;
   border: none;
   padding: 10px 24px;
   cursor: pointer;
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: #a3a3a3;
   background: #ffffff;
   &:hover {
      color: #818181;
   }
   &:active {
      color: #000000;
   }
`
