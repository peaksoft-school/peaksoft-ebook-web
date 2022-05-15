import React, { forwardRef, useState } from 'react'
import styled from '@emotion/styled'
import { ReactComponent as Eye } from '../../../assets/icons/Eye.svg'
import { ReactComponent as EyePassword } from '../../../assets/icons/EyePassword.svg'

export const InputForPassword = forwardRef(
   ({ error, width, fontSize, ...props }, ref) => {
      const [isEyeIconVisible, setIsEyeIconVisible] = useState(true)

      return (
         <StyledInputContainer
            Eye={Eye}
            error={error}
            width={width}
            fontSize={fontSize}
         >
            <input
               ref={ref}
               type={isEyeIconVisible ? 'password' : 'text'}
               {...props}
            />
            {isEyeIconVisible ? (
               <Eye
                  className="svg"
                  onClick={() => setIsEyeIconVisible(false)}
               />
            ) : (
               <EyePassword
                  className="svg"
                  onClick={() => setIsEyeIconVisible(true)}
               />
            )}
         </StyledInputContainer>
      )
   }
)
const StyledInputContainer = styled.div`
   width: ${({ width }) => (width ? `${width}px` : '100%')};
   height: 37px;
   font-size: ${({ fontSize }) => fontSize || '16px'};
   border: ${({ error }) =>
      error ? '0.5px solid #F10000' : '1px solid #c4c4c4'};
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
      background-color: ${({ error }) => (error ? '#FFF5F5' : '#f8f8f8;')};
      width: 100%;
      padding: 6px 51px 7px 18px;
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
      &::placeholder {
         color: #969696;
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
