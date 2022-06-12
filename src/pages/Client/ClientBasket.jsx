import styled from '@emotion/styled/macro'
import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { TextButton } from '../../components/UI/Buttons/TextButton'
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
         'https://s3-alpha-sig.figma.com/img/66ac/38f9/629144e6ce4042ef47b5cc9c75a8714b?Expires=1655683200&Signature=aslgS3yAggXR2Mj5Z~aiQ3I68XApL3lgGwgLXi0HTrsf3r7t6j~7zBN~0Q7a0jEr-tTRYXKNIlb7E1IBScuD2MzClHXWQynRbFEzoWahKBeR7BRzDm7NxDKqjL~sENpaAK8vddXCUkPYhf-0DBnJYbTy~CH7FwRM~3wxv9O-uq4A4M6GcDNE8QGqmwbKgapc3G~3L~IxAzRBC3ZtRUq2mFn0IHJF0oKDrJuYoKQhcVn164G1XTYhXulSh9lZhh7OSOHtHc17qEFK2IJWiBlGvGIX15nay0warXFmD4x-vdJf1MjvIius8Mc0~e0HuzDEgrfkJ-XE2kt0OPy8aXSnCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      bookId: 1,
      title: 'Гарри Поттер и тайная комната ',
      authorFullName: 'Роулинг Джоан Кэтлин',
      price: 220,
      promocode: '22',
      discount: '11%',
   },
   {
      firstPhoto:
         'https://s3-alpha-sig.figma.com/img/66ac/38f9/629144e6ce4042ef47b5cc9c75a8714b?Expires=1655683200&Signature=aslgS3yAggXR2Mj5Z~aiQ3I68XApL3lgGwgLXi0HTrsf3r7t6j~7zBN~0Q7a0jEr-tTRYXKNIlb7E1IBScuD2MzClHXWQynRbFEzoWahKBeR7BRzDm7NxDKqjL~sENpaAK8vddXCUkPYhf-0DBnJYbTy~CH7FwRM~3wxv9O-uq4A4M6GcDNE8QGqmwbKgapc3G~3L~IxAzRBC3ZtRUq2mFn0IHJF0oKDrJuYoKQhcVn164G1XTYhXulSh9lZhh7OSOHtHc17qEFK2IJWiBlGvGIX15nay0warXFmD4x-vdJf1MjvIius8Mc0~e0HuzDEgrfkJ-XE2kt0OPy8aXSnCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      bookId: 3,
      title: 'Гарри Поттер и тайная комната ',
      authorFullName: 'Роулинг Джоан Кэтлин',
      price: 220,
      promocode: '22',
      discount: '11%',
   },
]

export const ClientBasket = () => {
   return (
      <Container>
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
               //    discount={basket.discount}
            />
         ))}
      </Container>
   )
}

const Container = styled.div`
   padding-top: 46px;
   width: 799px;
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
`

const StyledButton = styled.div`
   padding: 20px 0 24px 655px;
`
