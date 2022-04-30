import React, { forwardRef } from 'react'
import styled from '@emotion/styled'

export const Input = forwardRef((props, ref) => {
   return <StyledInput ref={ref} {...props} />
})
const StyledInput = styled.input`
   width: ${({ width }) => (width ? `${width}px` : '514px')};
   height: 41px;
   background-color: #f8f8f8;
   padding: 10px 18px 10px 18px;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   border: 1px solid #c4c4c4;
   outline: none;
   transition-property: all;
   transition-duration: 0.5s;
   &:hover {
      background-color: #ffffff;
      transition-property: all;
      transition-duration: 0.5s;
   }
   &:focus {
      background-color: #ffffff;
   }
`
