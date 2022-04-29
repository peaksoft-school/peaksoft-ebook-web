import React from 'react'
import styled from '@emotion/styled'

export const Textbutton = (props) => {
   return <StyledUnderButton {...props}>{props.children}</StyledUnderButton>
}

const StyledUnderButton = styled.button`
   width: ${({ width }) => width || ''};
   height: ${({ height }) => height || ''};
   padding: ${({ padding }) => padding || '10px 24px 10px 24px'};
   line-height: ${({ lHeight }) => lHeight || ''};
   color: ${({ color }) => color || '#ffffff'};
   outline: none;
   border: none;
   background: none;
   weight: 400;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   font-family: 'Open Sans', sans-serif;
   font-style: SemiBold;
   text-transform: none;
   cursor: pointer;
   &:hover {
      color: ${({ colorHover }) => colorHover || ''};
   }
`
