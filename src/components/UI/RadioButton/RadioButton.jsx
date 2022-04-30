import styled from '@emotion/styled'
import { forwardRef } from 'react'

export const RadioButton = forwardRef((props, ref) => {
   return (
      <RadioInput>
         <input {...props} ref={ref} type="radio" name="gender" />
      </RadioInput>
   )
})
const RadioInput = styled.div`
   input[name='gender'] {
      accent-color: #ff4c00;
      width: 26px;
      height: 26px;
      cursor: pointer;
      background-color: none;
   }
`
