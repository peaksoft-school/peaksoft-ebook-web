import styled from '@emotion/styled/macro'
import React from 'react'
import { FoundDataItem } from './FoundDataItem'

export const FoundDataList = ({ booksList, onOptionItemSelect }) => {
   return (
      <DropDownList maxLengthOfBooks={booksList.length}>
         {booksList.map((book) => (
            <FoundDataItem
               key={book.id}
               book={book}
               onOptionItemSelect={onOptionItemSelect}
            />
         ))}
      </DropDownList>
   )
}

const DropDownList = styled.ul`
   list-style: none;
   margin-top: 15px;
   max-height: 151px;
   font-family: 'Open Sans';
   background-color: #ffffff;
   overflow-y: ${({ maxLengthOfBooks }) =>
      maxLengthOfBooks > 4 ? 'scroll' : ''};
   &::-webkit-scrollbar {
      background-color: transparent;
      width: 0.3rem;
      border-radius: 10rem;
   }
   &::-webkit-scrollbar-thumb {
      border: 4px solid #c4c4c4;
      border-radius: 5px;
      transform: rotate(90deg);
   }
   &::-webkit-scrollbar-thumb:hover {
      border: 4px solid #bdbdbd;
   }
`
