import React from 'react'
import styled from '@emotion/styled'

export const Button = (props) => {
   return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
   width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
   background-color: ${({ bgColor }) => bgColor || ''};
   background: ${({ background }) => background || ''};
   outline: ${({ outline }) => outline || ''};
   padding: ${({ padding }) => padding || '10px 24px 10px 24px'};
   font-size: ${({ fontSize }) => fontSize || '14px'};
   line-height: ${({ lHeight }) => lHeight || ''};
   color: ${({ color }) => color || '#ffffff'};
   font-weight: ${({ fontWeight }) => fontWeight || ''};
   border: ${({ border }) => border || 'none'};
   font-family: 'Open Sans';
   margin: ${({ margin }) => margin || ''};
   cursor: pointer;
   &:hover {
      background-color: ${({ bgColorHover }) => bgColorHover || ''};
      border-color: ${({ borderColorHover }) => borderColorHover || ''};
      color: ${({ colorHover }) => colorHover || ''};
   }
   &:active {
      background-color: ${({ bgColorActive }) => bgColorActive || ''};
      color: ${({ colorActive }) => colorActive || ''};
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
