import styled from '@emotion/styled'
import React from 'react'

export const FoundDataItem = ({ nameOfbook, onClickToItem }) => {
   return <StyledListItem onClick={onClickToItem}>{nameOfbook}</StyledListItem>
}

const StyledListItem = styled.li`
   width: 100%;
   padding: 7px 0 8px 18px;
   border-bottom: 1px solid rgba(238, 238, 238, 1);
   cursor: pointer;
   transition: background 0.2s ease;
   &:hover {
      transition: background 0.2s ease;
      background: rgba(255, 76, 0, 0.1);
   }
`