import styled from '@emotion/styled'
import React from 'react'
import { theme } from '../../../../utils/constants/theme'
import { Button } from '../../../UI/Buttons/Button'

export const SendButton = ({ onAdd }) => {
   return (
      <SendButtonContainer>
         <Button
            onClick={onAdd}
            bgColor={theme.secondary.orange}
            ling-height="19px"
            bgColorHover="#FE6F33"
            bgColorActive="#E54400"
         >
            Отправить
         </Button>
      </SendButtonContainer>
   )
}

const SendButtonContainer = styled.div`
   display: flex;
   justify-content: end;
   width: 100%;
`
