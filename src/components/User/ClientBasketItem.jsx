import styled from '@emotion/styled/macro'
import React from 'react'
import { ReactComponent as Vector } from '../../assets/icons/vector.svg'
import { UnderlinedButton } from '../UI/Buttons/UnderlinedButton'
import { ReactComponent as Minus } from '../../assets/icons/minus.svg'
import { ReactComponent as Plus } from '../../assets/icons/plus-count.svg'

export const ClientBasketItem = ({
   firstPhoto,
   bookId,
   title,
   authorFullName,
   price,
   promocode,
   discount,
}) => {
   return (
      <Container key={bookId}>
         <StyledImage>
            <img src={firstPhoto} alt="book" />
         </StyledImage>
         <StyledData>
            <ul>
               <StyledTitle>{title}</StyledTitle>
               <StyledAuthor>{authorFullName}</StyledAuthor>
               {promocode ? (
                  <StyledPromocode>Промокод {promocode}%</StyledPromocode>
               ) : (
                  ''
               )}
               {discount ? (
                  <StyledPromocode>Скидка {discount}%</StyledPromocode>
               ) : (
                  ''
               )}
               <ContainerOfCounut>
                  <Minus />
                  <div>1</div>
                  <Plus />
               </ContainerOfCounut>
            </ul>
         </StyledData>
         <StyledDiv>
            <StyledIcons>
               <Vector />
            </StyledIcons>
            <StyledSpan>{price} c</StyledSpan>
            <StyledUndelinedButton>Добавить в избранное</StyledUndelinedButton>
         </StyledDiv>
      </Container>
   )
}

const ContainerOfCounut = styled.div`
   width: 75px;
   height: 28px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   &:hover rect {
      fill: #222222;
      cursor: pointer;
   }
`

const StyledImage = styled.div`
   padding-left: 30px;
   img {
      width: 110px;
      height: 176px;
      object-fit: cover;
   }
`

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 204px;
   margin-top: 20px;
   margin-bottom: 28px;
   border-bottom: 1px solid #c4c4c4;
   &:last-child {
      border-bottom: none;
   }
`

const StyledTitle = styled.li`
   padding-top: 42px;
   font-size: 18px;
   font-weight: 400;
   padding-bottom: 10px;
`

const StyledAuthor = styled.li`
   font-size: 14px;
   font-weight: 400;
   color: #969696;
   padding-bottom: 14px;
`

const StyledData = styled.div`
   ul {
      list-style: none;
   }
`

const StyledPromocode = styled.li`
   font-size: 14px;
   font-weight: 400;
   color: #f10000;
   padding-bottom: 21px;
`

const StyledDiv = styled.div`
   width: 200px;
`

const StyledSpan = styled.div`
   padding: 54px 89px 48px 35px;
`

const StyledIcons = styled.div`
   svg {
      cursor: pointer;
      position: relative;
      left: 45%;
      width: 200px;
   }
`
const StyledUndelinedButton = styled(UnderlinedButton)`
   padding-left: 40px;
   font-weight: 400;
   font-size: 14px;
`
