import React from 'react'
import styled from '@emotion/styled'

export const TextButton = (props) => {
   return <StyledUnderButton {...props}>{props.children}</StyledUnderButton>
}

const StyledUnderButton = styled.button`
   padding: ${({ padding }) => padding || ''};
   line-height: ${({ lHeight }) => lHeight || ''};
   color: ${({ color }) => color || '#ffffff'};
   outline: none;
   border: none;
   background: none;
   font-weight: ${({ fontWeight }) => fontWeight || '400'};
   font-size: ${({ fontSize }) => fontSize || '16px'};
   font-family: 'Open Sans', sans-serif;
   font-style: SemiBold;
   text-transform: none;
   cursor: pointer;
   &:hover {
      color: ${({ colorHover }) => colorHover || ''};
   }
`
