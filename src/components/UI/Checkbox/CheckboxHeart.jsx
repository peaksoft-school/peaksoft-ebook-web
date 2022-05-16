import styled from '@emotion/styled'
import { forwardRef } from 'react'
import checkboxDefaultHeart from '../../../assets/icons/checkboxDefaultHeart.svg'
import checkboxCheckedHeart from '../../../assets/icons/checkboxCheckedHeart.svg'

export const CheckboxHeart = forwardRef(({ isChecked, onChange }, ref) => {
   return (
      <StyledCheckbox isChecked={isChecked}>
         <input
            ref={ref}
            type="checkbox"
            onChange={onChange}
            checked={isChecked}
         />
         <span className="check" />
      </StyledCheckbox>
   )
})
const StyledCheckbox = styled.label`
   cursor: pointer;
   & input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
   }
   span {
      position: absolute;
      background-image: url(${checkboxDefaultHeart});
      background-repeat: no-repeat;
      width: 20px;
      height: 19px;
   }
   input:checked + span {
      transition: 0.3s;
      background-image: url(${checkboxCheckedHeart});
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
   }
`
