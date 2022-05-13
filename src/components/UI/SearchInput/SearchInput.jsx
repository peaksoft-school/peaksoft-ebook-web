import styled from '@emotion/styled/macro'
import React from 'react'
import { ReactComponent as Search } from '../../../assets/icons/search.svg'
import { FoundDataList } from './FoundDataList/FoundDataList'

export const SearchInput = ({
   onChange,
   value,
   onClick,
   booksList,
   onOptionItemSelect,
}) => {
   return (
      <SearchInputWrapper>
         <StyledSearchInput>
            <Input
               placeholder="Искать жанр, книги, авторов, издательства... "
               type="text"
               onChange={onChange}
               value={value}
            />
            <Search onClick={onClick} />
         </StyledSearchInput>
         {booksList.length > 0 && (
            <FoundDataList
               booksList={booksList}
               onOptionItemSelect={onOptionItemSelect}
            />
         )}
      </SearchInputWrapper>
   )
}

const SearchInputWrapper = styled.div`
   width: 895px;
`

const Input = styled.input`
   width: 100%;
   outline: none;
   border: none;
   padding: 8px 18px;
   font-weight: 400;
   font-size: 14px;
   font-family: 'Open Sans';
   &::placeholder {
      color: #969696;
   }
   &::-webkit-input-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &::-moz-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &:-moz-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &:-ms-input-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &:focus::-webkit-input-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
   &:focus::-moz-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
   &:focus:-moz-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
   &:focus:-ms-input-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
`
const StyledSearchInput = styled.div`
   transition: border 0.3s ease;
   width: 100%;
   height: 40px;
   cursor: auto;
   outline: none;
   border: 1px solid rgba(196, 196, 196, 1);
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: 'Open Sans';
   &:focus-within {
      transition: border 0.3s ease;
      border: 1px solid red;
   }
   &:focus-within path {
      transition: border 0.3s ease;
      fill: rgba(243, 73, 1, 1);
   }
   & svg {
      cursor: pointer;
      position: relative;
      right: 15px;
   }
`
