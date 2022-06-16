import styled from '@emotion/styled/macro'
import React, { useState } from 'react'
import { ReactComponent as PromocodeImage } from '../../assets/icons/promocode-image.svg'
import { Button } from '../../components/UI/Buttons/Button'
import { Input } from '../../components/UI/Inputs/Input'
import { ErrorModal } from '../../components/UI/Modals/ErrorModal'

export const ClientPromocode = () => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <>
         <ContainerOfPromocode>
            <StyledDiv>
               <PromocodeImage />
               <StyledImage>
                  <b>Активация промокода eBook</b>
               </StyledImage>
            </StyledDiv>
            <StyledInput>
               <Input placeholder="Введите промокод" />
               <Button
                  onClick={(e) => {
                     setIsOpen(true)
                     e.stopPropagation()
                  }}
               >
                  Активировать
               </Button>
            </StyledInput>
            <p>
               Промокоды eBook на скидки и подарки вы можете получить в
               рассылках.
            </p>
         </ContainerOfPromocode>
         <ErrorModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onCloseBackDrop={() => setIsOpen(false)}
         />
      </>
   )
}

const ContainerOfPromocode = styled.div`
   padding-top: 60px;
   margin: 0 auto;
   p {
      padding-left: 50px;
   }
`
const StyledImage = styled.div`
   margin: 0 auto;
   padding-left: 25px;
   padding-bottom: 26px;
`

const StyledInput = styled.div`
   display: flex;
   padding-bottom: 26px;
   input {
      width: 507px;
      height: 34px;
      font-weight: 400;
      font-size: 14px;
   }
   button {
      background: #f34901;
      padding: 8px 40px;
      height: 34px;
   }
`
const StyledDiv = styled.div`
   padding-left: 180px;
`