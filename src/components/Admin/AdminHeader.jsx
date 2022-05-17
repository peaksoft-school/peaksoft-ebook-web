import React, { useState } from 'react'
import styled from '@emotion/styled'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as ProfileIcon } from '../../assets/icons/single-profile-icon.svg'
import { PopUp } from '../UI/PopUp/PopUp'

export const AdminHeader = () => {
   const [showOptions, setShowOptions] = useState(false)
   const handleClick = () => {
      setShowOptions(!showOptions)
   }
   const options = [
      {
         title: 'Выйти',
      },
   ]
   const booksList = []
   return (
      <AdminHeaderContainer>
         <SearchInput booksList={booksList} />
         <StyledContainer>
            <AdminTextContainer onClick={handleClick}>
               <ProfileIcon />
               <span>Администратор</span>
               {showOptions && (
                  <PopUp right="20" top="75px" options={options} />
               )}
            </AdminTextContainer>
         </StyledContainer>
      </AdminHeaderContainer>
   )
}

const AdminHeaderContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   padding: 30px 40px 0 270px;
`

const AdminTextContainer = styled.div`
   display: flex;
   width: max-content;
   justify-content: space-between;
   align-items: center;
   padding-right: 30px;
   svg {
      cursor: pointer;
   }
   span {
      padding-left: 10px;
      line-height: 22px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
   }
`

const StyledContainer = styled.div`
   min-width: fit-content;
   position: relative;
   right: 0;
   padding-left: 5px;
`
