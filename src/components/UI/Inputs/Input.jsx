import React, { forwardRef } from 'react'
import styled from '@emotion/styled'

export const Input = forwardRef((props, ref) => {
   return <StyledInput ref={ref} {...props} />
})
const StyledInput = styled.input`
   width: ${({ width }) => (width ? `${width}px` : '100%')};
   height: 37px;
   background-color: ${({ error }) => (error ? '#FFF5F5' : '#f8f8f8')};
   padding: 10px 18px;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   border: ${({ error }) =>
      error ? '0.5px solid #F10000' : '1px solid #c4c4c4'};
   outline: none;
   transition-property: all;
   transition-duration: 0.5s;
   &:hover {
      background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
      transition-property: all;
      transition-duration: 0.5s;
   }
   &:focus {
      background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
   }
   &::placeholder {
      color: #969696;
   }
`
