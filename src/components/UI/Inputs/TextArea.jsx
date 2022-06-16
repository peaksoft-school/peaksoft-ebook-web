import React, { forwardRef } from 'react'
import styled from '@emotion/styled'

export const TextArea = forwardRef((props, ref) => {
   return <StyledInput ref={ref} {...props} />
})
const StyledInput = styled.textarea`
   width: 483px;
   height: 108px;
   background-color: ${({ error }) => (error ? '#FFF5F5' : '#f8f8f8')};
   padding: 10px 18px;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   border: ${({ error }) =>
      error ? '0.5px solid #F10000' : '1px solid #c4c4c4'};
   outline: none;
   transition-property: all;
   transition-duration: 0.5s;
   resize: none;
   &:hover {
      background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
      transition-property: all;
      transition-duration: 0.5s;
   }
   &:focus {
      background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
      border: ${({ borderActive }) =>
         borderActive ? '1px solid #F10000' : '1px solid #c4c4c4'};
   }
   &::placeholder {
      color: #969696;
   }
`
