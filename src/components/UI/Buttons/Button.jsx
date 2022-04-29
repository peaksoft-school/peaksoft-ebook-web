import React from 'react'
import styled from '@emotion/styled'
// import { theme } from '../../assets/styles/styles'

export const Button = (props) => {
   return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
   width: ${({ width }) => width || ''};
   height: ${({ height }) => height || ''};
   background-color: ${({ bgColor }) => bgColor || ''};
   background: ${({ background }) => background || ''};
   outline: ${({ outline }) => outline || ''};
   padding: ${({ padding }) => padding || '10px 24px 10px 24px'};
   font-size: ${({ fontSize }) => fontSize || '14px'};
   line-height: ${({ lHeight }) => lHeight || ''};
   color: ${({ color }) => color || '#ffffff'};
   weight: ${({ weight }) => weight || '600'};
   border: ${({ border }) => border || 'none'};
   font-family: 'Open Sans', sans-serif;
   font-style: SemiBold;
   text-transform: none;
   align: left;
   border-radius: 0;
   gap: 10px;
   vertical-align: top;
   cursor: pointer;
   &:hover {
      background-color: ${({ bgColorHover }) => bgColorHover || ''};
      border-color: ${({ borderColorHover }) => borderColorHover || ''};
      color: ${({ colorHover }) => colorHover || ''};
   }
   &:active {
      background-color: ${({ bgColorActive }) => bgColorActive || ''};
   }
   &:disabled {
      background-color: #ffffff;
      border: 1px solid #c4c4c4;
      color: #c4c4c4;
   }
   &:hover path {
      fill: ${({ hoverC }) => hoverC || ''};
   }
`
