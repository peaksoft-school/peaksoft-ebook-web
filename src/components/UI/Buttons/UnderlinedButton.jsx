import React from 'react'
import styled from '@emotion/styled'

export const UnderlinedButton = (props) => {
   return <StyledUnderP {...props}>{props.children}</StyledUnderP>
}

const StyledUnderP = styled.p`
   color: ${({ color }) => color || '#000000'};
   outline: none;
   border: none;
   background: none;
   weight: 400;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   font-family: 'Open Sans', sans-serif;
   font-style: SemiBold;
   text-transform: none;
   text-decoration: underline;
   cursor: pointer;
   &:hover {
      color: ${({ colorHover }) => colorHover || '#F34901'};
   }
`
