import styled from '@emotion/styled'
import { forwardRef } from 'react'
import checkboxDefaultIcon from '../../../assets/icons/checkbox_default.svg'
import checkboxCheckedIcon from '../../../assets/icons/checkbox_checked.svg'

export const Checkbox = forwardRef(({ isChecked, onChange, ...props }, ref) => {
   return (
      <StyledCheckbox isChecked={isChecked} {...props}>
         <input
            ref={ref}
            type="checkbox"
            onChange={onChange}
            checked={isChecked}
            {...props}
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
      background-image: url(${checkboxDefaultIcon});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 22px;
      height: 22px;
   }
   input:checked + span {
      transition: 0.3s;
      background-image: url(${checkboxCheckedIcon});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
   }
`
