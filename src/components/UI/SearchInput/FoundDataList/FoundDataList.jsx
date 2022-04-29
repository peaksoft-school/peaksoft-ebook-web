import styled from '@emotion/styled/macro'
import React from 'react'
import { FoundDataItem } from './FoundDataItem'

export const FoundDataList = ({ booksList }) => {
   return (
      <DropDownList booksList={booksList}>
         {booksList.map((book) => (
            <FoundDataItem key={book.id} nameOfbook={book.nameOfBook} />
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
   overflow-y: ${({ booksList }) => (booksList.length > 4 ? 'scroll' : '')};
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
