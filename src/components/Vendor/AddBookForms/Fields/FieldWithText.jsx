import styled from '@emotion/styled'
import React, { forwardRef } from 'react'

export const FieldWithText = forwardRef(
   (
      {
         innerText,
         paddingRight,
         width,
         value,
         isDefaultValueMustBeEmpty,
         ...props
      },
      ref
   ) => {
      const currentValue = isDefaultValueMustBeEmpty ? value || '' : value
      return (
         <FieldWithTextContainer paddingRight={paddingRight} width={width}>
            <input {...props} value={currentValue} ref={ref} />
            <span>{innerText}</span>
         </FieldWithTextContainer>
      )
   }
)

const FieldWithTextContainer = styled.div`
   transition: all 0.5s;
   width: ${({ width }) => width || '184px'};
   border: 1px solid #c4c4c4;
   display: flex;
   font-family: 'Open Sans';
   line-height: 130%;
   align-items: center;
   position: relative;
   height: fit-content;
   &:hover {
      background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
      transition: all 0.5s;
   }
   span {
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 400;
      font-size: 16px;
      color: #969696;
   }
   input {
      width: 100%;
      padding: ${({ paddingRight }) =>
         paddingRight
            ? `10px ${paddingRight}px 10px 18px`
            : '10px 52px 10px 18px'};
      outline: none;
      border: none;
      &::-webkit-inner-spin-button {
         -webkit-appearance: none;
         display: none;
      }
      color: #222222;
      font-size: 16px;
   }
`
