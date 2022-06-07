import styled from '@emotion/styled/macro'
import React from 'react'

export const GenreItem = ({ genre, count, onGenreItem }) => {
   console.log(genre)
   return (
      <GenreItemContainer onClick={onGenreItem}>
         <StyledGenre>{genre}</StyledGenre>
         <StyledCount>{count}</StyledCount>
      </GenreItemContainer>
   )
}
const StyledCount = styled.span`
   font-weight: 600;
   font-size: 14px;
   line-height: 19px;
   letter-spacing: 0.1em;
   color: #a5a5a5;
`
const StyledGenre = styled.span`
   transition: color 0.2s ease;
   font-size: 16px;
   line-height: 22px;
   letter-spacing: 0.1em;
   color: #222222;
   font-weight: 400;
   width: 233px;
   height: 22px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
`
const GenreItemContainer = styled.p`
   display: flex;
   justify-content: space-between;
   padding-bottom: 3px;
   &:hover {
      padding-bottom: 2px;
      border-bottom: 1px solid #ff4c00;
   }
   &:hover ${StyledCount} {
      color: #ff4c00;
   }
   &:hover ${StyledGenre} {
      color: #ff4c00;
      font-weight: 600;
   }
   cursor: pointer;
   font-family: 'Open Sans';
   margin: 7.5px 0;
   min-width: 328px;
`
