import styled from '@emotion/styled/macro'
import React, { forwardRef } from 'react'

export const InputForDiscount = forwardRef(({ discount, ...props }, ref) => {
   return (
      <InputForDiscountContainer>
         <input type="number" value={discount || ''} {...props} ref={ref} />
         <span>%</span>
      </InputForDiscountContainer>
   )
})
const InputForDiscountContainer = styled.div`
   position: relative;
   display: flex;
   width: 100%;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #969696;
   border: 1.2px solid #c4c4c4;
   & input {
      width: 127px;
      background: inherit;
      outline: none;
      border: none;
      padding: 10px 36px 10px 20px;
      min-width: 100px;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 16px;
      color: #969696;
      &::-webkit-inner-spin-button {
         -webkit-appearance: none;
         display: none;
      }
   }
   & span {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
`
