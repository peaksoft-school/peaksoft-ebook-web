import React, { useState } from 'react'
import styled from '@emotion/styled'
import { SearchInput } from '../UI/SearchInput/SearchInput'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile-icon.svg'
import { PopUp } from '../UI/PopUp/PopUp'

export const AdminHeader = () => {
   const [showOptions, setShowOptions] = useState(false)
   const handleClick = () => {
      setShowOptions(!showOptions)
   }
   const options = ['Выйти']
   const booksList = []
   return (
      <AdminHeaderContainer>
         <SearchInput booksList={booksList} />
         <AdminTextContainer onClick={handleClick}>
            <ProfileIcon />
            <span>Администратор</span>
            {showOptions && <PopUp options={options} />}
         </AdminTextContainer>
      </AdminHeaderContainer>
   )
}

const AdminHeaderContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const AdminTextContainer = styled.div`
   display: flex;
   width: max-content;
   justify-content: space-between;
   align-items: center;
   padding-left: 35px;
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
