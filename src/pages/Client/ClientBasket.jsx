import styled from '@emotion/styled/macro'
import { Breadcrumbs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/UI/Buttons/Button'
import { TextButton } from '../../components/UI/Buttons/TextButton'
import { InputForPromocode } from '../../components/UI/Inputs/InputForPromocode'
import { SuccessModal } from '../../components/UI/Modals/SuccessModal'
import { ClientBasketItem } from '../../components/User/ClientBasketItem'
import { DEFAULT_ROUTES } from '../../utils/constants/routes'
import { theme } from '../../utils/constants/theme'

const DATA = [
   {
      firstPhoto:
         'https://s3-alpha-sig.figma.com/img/66ac/38f9/629144e6ce4042ef47b5cc9c75a8714b?Expires=1655683200&Signature=aslgS3yAggXR2Mj5Z~aiQ3I68XApL3lgGwgLXi0HTrsf3r7t6j~7zBN~0Q7a0jEr-tTRYXKNIlb7E1IBScuD2MzClHXWQynRbFEzoWahKBeR7BRzDm7NxDKqjL~sENpaAK8vddXCUkPYhf-0DBnJYbTy~CH7FwRM~3wxv9O-uq4A4M6GcDNE8QGqmwbKgapc3G~3L~IxAzRBC3ZtRUq2mFn0IHJF0oKDrJuYoKQhcVn164G1XTYhXulSh9lZhh7OSOHtHc17qEFK2IJWiBlGvGIX15nay0warXFmD4x-vdJf1MjvIius8Mc0~e0HuzDEgrfkJ-XE2kt0OPy8aXSnCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      bookId: 2,
      title: 'Гарри Поттер и тайная комната ',
      authorFullName: 'Роулинг Джоан Кэтлин',
      price: 220,
      promocode: '22',
      discount: '11',
   },
   {
      firstPhoto:
         'https://s3-alpha-sig.figma.com/img/5485/c0c9/8a3c093891f4501e8ae42eb81b716745?Expires=1656288000&Signature=KFVE8-m1J9YfalHqIe2vzZiqJuv4MVpuFzHu0YkAr0H1UlriTu7cV2RssKv0A90Uj1gAFU2d67-tVqtxMm-~mj7F1Gd8jVvnCeaArIzS~J1ww0N7P0dbv9ik8I3T-pnA4bbKw6qM9DtcyUICOsOJ3vBREcdne~fwctDRlSGPOQ2A42jBJt-4oaeqaOkm4tj1sTWEtWTf1hoQc2sJmjU5CMUMzC3Uh66O12DkTxhIvRTDtSrMWspfJsgzI0DgeTuuW4l03JWKSXpGvMCOk5QDZUdMFO9pO~Dhp6dmcnSt3c19M2bX1G4kcOSLRFSCI7V5j4~3O92rN8S8MHvzEWnupw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      bookId: 1,
      title: 'История книги на Руси и Сочи',
      authorFullName: 'А.Бахтиаров',
      price: 310,
      promocode: '22',
      discount: '11%',
   },
   {
      firstPhoto:
         'https://s3-alpha-sig.figma.com/img/5832/f113/509dad26f63c503c63d2317244d87089?Expires=1656288000&Signature=L3JJwUa1cokyIM61vnr3d9zLgivmGNARf18s6s3RCgtoVAXVjH9YjRjkS00g4HeWxTPBtzSHR0YC3yqOdjnxdXS9fGbe0hPpKmGETsjR7LJH7ORKEmqwBTYzjNUbCgSbpP6FAaM5WK6scM8QsMQKtVxRFm7xYVmD2i2kzDyVmSwo7I0A6hGOjQ9MWOPJLoqneANUZ7uYruuqdT2aQaO047-q9Q6ctj5w2vg~xRkZEz4bzfVpqXANaq3~xCPcA6XnPTFm5pwgeyOfe7VZLNtMwgMfuTRSDP8tTGd052st~5Td1zbIIQFZrLHUauLN6987EtP9ZArkzoci7Dm6-69ptw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      bookId: 3,
      title: 'Тонкое искусство пофигизма',
      authorFullName: 'Марк Мэнсон',
      price: 440,
      promocode: '22',
      discount: '11%',
   },
]

export const ClientBasket = () => {
   const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false)
   return (
      <>
         <Container>
            <ContainerOfBasket>
               <Breadcrumbs>
                  <Link to={DEFAULT_ROUTES.INDEX.PATH}>Главная</Link>
                  <Typography color={theme.primary.black}>Корзина</Typography>
               </Breadcrumbs>
               <HeadContainer>
                  <BooksTitle>Ваши книги</BooksTitle>
                  <BooksAmount>Всего: 3</BooksAmount>
               </HeadContainer>
               <StyledButton>
                  <StyledTextButton>Очистить корзину</StyledTextButton>
               </StyledButton>
               {DATA.map((basket) => (
                  <ClientBasketItem
                     key={basket.bookId}
                     bookId={basket.bookId}
                     firstPhoto={basket.firstPhoto}
                     title={basket.title}
                     authorFullName={basket.authorFullName}
                     price={basket.price}
                     promocode={basket.promocode}
                     // discount={basket.discount}
                  />
               ))}
            </ContainerOfBasket>
            <ContainerOfBooking>
               <StyledContainer>
                  <StyledTitle>Общая стоимость</StyledTitle>
                  <StyledUl>
                     <div>
                        <li>Количество книг:</li>
                        <li>Скидка</li>
                        <li>Сумма </li>
                     </div>
                     <ul>
                        <li>3 шт</li>
                        <li>0 c</li>
                        <li>970 c</li>
                     </ul>
                  </StyledUl>
                  <StyledPromocode>
                     <InputForPromocode placeholder="Введите промокод" />
                  </StyledPromocode>
                  <StyledTotal>
                     <li>Итого:</li>
                     <li>970 с</li>
                  </StyledTotal>
               </StyledContainer>
               <Button
                  padding="10px 131px"
                  lHeight="18px"
                  bgColor="#222222"
                  weight="400"
                  color="#ffffff"
                  bgColorHover="#484848"
                  colorHover={theme.primary.white}
                  bgColorActive={theme.secondary.orange}
                  onClick={(e) => {
                     setIsOpenSuccessModal(true)
                     e.stopPropagation()
                  }}
               >
                  Оформить заказ
               </Button>
            </ContainerOfBooking>
         </Container>
         <SuccessModal
            isOpen={isOpenSuccessModal}
            onClose={() => setIsOpenSuccessModal(false)}
            onCloseBackDrop={() => setIsOpenSuccessModal(false)}
         />
      </>
   )
}
const StyledTotal = styled.div`
   display: flex;
   justify-content: space-between;
   padding-right: 39px;
   padding-left: 39px;
   padding-top: 26px;
   li {
      font-size: 16px;
      font-weight: 600;
      color: #222222;
      text-align: right;
      list-style: none;
   }
`
const StyledPromocode = styled.div`
   padding: 32px 21px 0px 21px;
`

const StyledUl = styled.div`
   display: flex;
   justify-content: space-between;
   padding-right: 39px;
   padding-left: 39px;
   ul {
      text-align: right;
   }
   li {
      color: #696969;
      padding-bottom: 12px;
      list-style: none;
   }
`

const StyledTitle = styled.div`
   font-size: 18px;
   font-weight: 400;
   padding: 20px 108px 32px 100px;
`

const ContainerOfBooking = styled.div`
   padding-right: 80px;
   padding-top: 32px;
`
const ContainerOfBasket = styled.div`
   width: 799px;
`

const StyledContainer = styled.div`
   margin-bottom: 24px;
   width: 374px;
   height: 310px;
   border: 1px solid #c4c4c4;
`

const Container = styled.div`
   padding-top: 46px;
   display: flex;
   justify-content: space-between;
   .MuiBreadcrumbs-root {
      font-size: 14px;
      font-weight: 400;
      a {
         text-decoration: none;
         color: inherit;
      }
   }
   .MuiTypography-root {
      font-size: 14px;
      font-weight: 400;
   }
`

const HeadContainer = styled.div`
   padding-top: 32px;
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding-bottom: 12px;
   border-bottom: 1px solid #c4c4c4;
`
const BooksAmount = styled.span`
   color: #969696;
   font-size: 16px;
`
const BooksTitle = styled.span`
   font-weight: 600;
   font-size: 24px;
`

const StyledTextButton = styled(TextButton)`
   color: #545454;
   &:hover {
      color: #222222;
   }
`

const StyledButton = styled.div`
   padding: 20px 0 24px 655px;
`
