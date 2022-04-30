import React, { forwardRef, useState } from 'react'
import styled from '@emotion/styled'
import { ReactComponent as Eye } from '../../../assets/icons/Eye.svg'
import { ReactComponent as EyePassword } from '../../../assets/icons/EyePassword.svg'

export const InputForPassword = forwardRef((props, ref) => {
   const [isEyeIconVisible, setIsEyeIconVisible] = useState(false)

   return (
      <StyledInputIcon Eye={Eye}>
         <input
            ref={ref}
            type={isEyeIconVisible ? 'password' : 'text'}
            {...props}
         />
         {isEyeIconVisible ? (
            <EyePassword
               className="svg"
               onClick={() => setIsEyeIconVisible(false)}
            />
         ) : (
            <Eye className="svg" onClick={() => setIsEyeIconVisible(true)} />
         )}
      </StyledInputIcon>
   )
})
const StyledInputIcon = styled.div`
   width: ${({ width }) => (width ? `${width}px` : '514px')};
   height: 38px;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   border: 1px solid #c4c4c4;
   background-color: #f8f8f8;
   display: flex;
   align-items: center;
   position: relative;
   transition: background-color 0.3s ease;
   &:focus-within path {
      transition: fill 0.3s ease;
      background-color: #ffffff;
      fill: #1c1c1c;
   }
   &:hover {
      background-color: #ffffff;
      transition-property: all;
      transition-duration: 0.5s;
   }
   input {
      font-size: ${({ fontSize }) => fontSize || '16px'};
      border: none;
      outline: none;
      background-color: #f8f8f8;
      width: 485px;
      padding: 9px 18px;
      transition: background-color 0.3s ease;
      &:hover {
         background-color: #ffffff;
         transition-property: all;
         transition-duration: 0.5s;
      }
      &:focus {
         transition: background-color 0.3s ease;
         background-color: #ffffff;
      }
   }

   .svg {
      transition: background-color 0.3s ease;
      position: absolute;
      cursor: pointer;
      right: 18px;
      width: 24px;
      height: 24px;
   }
`
