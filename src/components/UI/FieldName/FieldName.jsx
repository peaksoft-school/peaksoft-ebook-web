import styled from '@emotion/styled'
import React from 'react'

export const FieldName = ({ children, withoutAsterisk, ...props }) => {
   return (
      <StyledFieldName {...props}>
         {children}
         {!withoutAsterisk && <span>*</span>}
      </StyledFieldName>
   )
}

const StyledFieldName = styled.label`
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: ${({ large }) => (large ? '16px' : '14px ')};
   line-height: 130%;
   color: #1c1c1c;
   & span {
      color: #f10000;
   }
`
