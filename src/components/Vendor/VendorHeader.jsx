import React, { useState } from 'react'
import styled from '@emotion/styled'
import { theme } from '../../assets/styles/styles'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile-icon.svg'
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down-icon.svg'
import { ReactComponent as InfoIcon } from '../../assets/icons/info-icon.svg'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import { Logo } from '../UI/Logo/Logo'
import { Button } from '../UI/Buttons/Button'
import { PopUp } from '../UI/PopUp/PopUp'

export const VendorHeader = () => {
   const [showOptions, setShowOptions] = useState(false)
   const handleClick = () => {
      setShowOptions(!showOptions)
   }
   const options = ['Профиль', 'Выйти']
   const booksList = []
   return (
      <>
         <VendorHeaderContainer>
            <Logo />
            <InnerContainer>
               <SearchInput booksList={booksList} />
               <NewBellIcon />
               <ContainerOfIcons onClick={handleClick}>
                  <ProfileIcon />
                  <ArrowDownIcon />
                  {showOptions && <PopUp options={options} />}
               </ContainerOfIcons>
            </InnerContainer>
         </VendorHeaderContainer>

         <ButtonsContainer>
            <StyledContainer>
               <Button
                  bgColor="white"
                  fontSize="16px"
                  color="#FF4C00"
                  border="1px solid #FF4C00"
               >
                  Создать промокод
               </Button>
               <InfoIcon />
            </StyledContainer>
            <Button
               padding="10px 24px 10px 24px"
               bgColor={theme.secondary.orange}
               fontSize="16px"
               lHeight="21.79px"
               bgColorHover={theme.secondary.orange}
               bgColorActive={theme.secondary.orange}
            >
               <Plus style={{ marginRight: '17px' }} />
               Добавить книгу
            </Button>
         </ButtonsContainer>
      </>
   )
}

const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   svg {
      margin-left: 20px;
      cursor: pointer;
   }
`

const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 40px 96px;
`
const NewBellIcon = styled(BellIcon)`
   margin-right: 30px;
   cursor: pointer;
`

const ContainerOfIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   position: relative;
   svg {
      margin-left: 6.5px;
      cursor: pointer;
   }
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
