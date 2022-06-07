import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { theme } from '../../utils/constants/theme'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile-icon.svg'
import { ReactComponent as InfoIcon } from '../../assets/icons/info-icon.svg'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import { Logo } from '../UI/Logo/Logo'
import { Button } from '../UI/Buttons/Button'
import { PopUp } from '../UI/PopUp/PopUp'
import { Promocode } from '../UI/Promocode/Promocode'
import { logout } from '../../store/auth-slice'
import { VENDOR_ROUTES } from '../../utils/constants/routes'

export const VendorHeader = () => {
   const navigate = useNavigate()
   const [isShowOptions, setIsShowOptions] = useState(false)
   const [isShown, setIsShown] = useState(false)
   const [isOpenPromoCode, setIsOpenPromoCode] = useState(false)

   const showPopUp = () => {
      setIsShowOptions((isShowOptions) => !isShowOptions)
   }

   const showPromoCode = () => {
      setIsOpenPromoCode((isOpenPromoCode) => !isOpenPromoCode)
   }

   const navigateToProfile = () => {
      navigate(`/profile`)
   }

   const options = [
      {
         id: 1,
         title: 'Профиль',
         action: () => navigateToProfile(),
      },
      {
         id: 2,
         title: 'Выйти',
         action: () => logout(navigate),
      },
   ]
   const booksList = []

   return (
      <VendorHeaderContainer>
         <SearchHeaderContainer>
            <StyledLogo />
            <SearchInput booksList={booksList} />
            <InnerContainer>
               <StyledBellIcon />
               <ContainerOfIcons onClick={showPopUp}>
                  <ProfileIcon />
                  {isShowOptions && <PopUp options={options} />}
               </ContainerOfIcons>
            </InnerContainer>
         </SearchHeaderContainer>
         <ButtonsContainer>
            <StyledContainer>
               <Button
                  bgColor="white"
                  fontSize="16px"
                  color="#FF4C00"
                  border="1px solid #FF4C00"
                  onClick={showPromoCode}
               >
                  Создать промокод
               </Button>
               <Promocode
                  isPromocodeModalOpen={isOpenPromoCode}
                  onClosePromocodeModal={() => setIsOpenPromoCode(false)}
               />
               <InfoIcon
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
               />
            </StyledContainer>
            {isShown && (
               <HowerMessage>
                  <Message>
                     Промокод применяется ко всем вашим книгам за исключением
                     книг со скидками.
                  </Message>
               </HowerMessage>
            )}
            <Button
               padding="10px 24px"
               bgColor={theme.secondary.orange}
               fontSize="16px"
               lHeight="21.79px"
               bgColorHover="#FE6F33"
               bgColorActive="#E54400"
               onClick={() => navigate(VENDOR_ROUTES.ADD_BOOK.PATH)}
            >
               <Plus style={{ marginRight: '15px' }} />
               Добавить книгу
            </Button>
         </ButtonsContainer>
      </VendorHeaderContainer>
   )
}

const StyledLogo = styled(Logo)`
   margin-right: 44px;
`

const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   & svg {
      position: absolute;
      right: -2rem;
      cursor: pointer;
   }
`
const SearchHeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`

const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 40px 0 10px 0;
`
const StyledBellIcon = styled(BellIcon)`
   cursor: pointer;
   margin-right: 40px;
`
const HowerMessage = styled.div`
   position: absolute;
   left: 205px;
   bottom: 40px;
   width: 100%;
`
const Message = styled.span`
   position: absolute;
   font-family: 'Open Sans';
   font-style: normal;
   font-size: 12px;
   line-height: 130%;
   color: #969696;
   width: 353px;
   position: absolute;
   padding: 10px;
   background-color: #ffffff;
   font: 400 0.9em 'Open Sans', sans-serif;
   border: 0.5px solid #c4c4c4;
   &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 10px solid #ffffff;
      border-right: 15px solid transparent;
      top: -10px;
      left: 20px;
   }
   &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 11px solid #c4c4c4;
      border-right: 16px solid transparent;
      top: -12px;
      left: 19px;
   }
`
const ContainerOfIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   position: relative;
   svg {
      cursor: pointer;
      &:hover {
         opacity: 0.9;
      }
   }
`
const VendorHeaderContainer = styled.header`
   display: flex;
   justify-content: center;
   flex-direction: column;
   width: 100%;
   padding: 0 80px;
   background-color: #ffffff;
   flex-shrink: 0;
`
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-left: 44px;
`
