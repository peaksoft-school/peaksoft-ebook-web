import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ReactComponent as SelectedFilterItemXIcon } from '../../../assets/icons/x-selected-filter-item.svg'

export const SelectedFilterItem = (props) => {
   const [isHovered, setIsHovered] = useState(false)
   return (
      <SelectedFilterItemContainer
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         isHovered={isHovered}
      >
         {props.children}
         <SelectedFilterItemXIcon />
      </SelectedFilterItemContainer>
   )
}

const SelectedFilterItemContainer = styled.div`
   display: flex;
   margin: 50px;
   justify-content: center;
   align-items: center;
   border: ${({ isHovered }) =>
      isHovered
         ? '1px solid rgba(243, 73, 1, 1)'
         : '1px solid rgba(196, 196, 196, 1)'};
   color: ${({ isHovered }) =>
      isHovered ? 'rgba(243, 73, 1, 1)' : 'rgba(34, 34, 34, 1)'};
   width: fit-content;
   padding: 11px 24px;
   margin-right: 15px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   & svg {
      margin-left: 15px;
      cursor: pointer;
      & > path {
         fill: ${({ isHovered }) => (isHovered ? '#F34901' : '#222222;')};
      }
   }
`
