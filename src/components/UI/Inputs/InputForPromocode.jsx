import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { ReactComponent as ArrowRight } from '../../../assets/icons/ArrowRight.svg'

export const InputForPromocode = forwardRef((props, ref) => {
   return (
      <StyledInputVectorIcon>
         <input {...props} ref={ref} />

         <ArrowRight className="svg" />
      </StyledInputVectorIcon>
   )
})
const StyledInputVectorIcon = styled.div`
   width: ${({ width }) => (width ? `${width}px` : '332px')};
   height: 34px;
   border: 1px solid #c4c4c4;
   display: flex;
   align-items: center;
   position: relative;
   transition: border 0.3s ease;

   &:focus-within {
      transition: border 0.3s ease;
      border: 0.5px solid #f34901;
   }
   input {
      font-size: ${({ fontSize }) => fontSize || '14px'};
      border: none;
      outline: none;
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      padding: 9px 18px;
      &:focus::-webkit-input-placeholder {
         color: transparent;
      }
      &:hover {
         background-color: #ffffff;
      }
      &:focus {
         background-color: #ffffff;
      }
   }
   .svg {
      position: absolute;
      right: 12px;
      &:focus {
         background-color: #ffffff;
      }
   }
`
