import styled from '@emotion/styled'
import { forwardRef } from 'react'

export const RadioButton = forwardRef((props, ref) => {
   return <RadioInput {...props} ref={ref} type="radio" />
})
const RadioInput = styled.input`
   & {
      accent-color: #ff4c00;
      width: 26px;
      height: 26px;
      cursor: pointer;
      background-color: none;
   }
`
