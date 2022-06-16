import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import { Button } from '../../../components/UI/Buttons/Button'
import { VendorBookCard } from '../../../components/UI/Card/VendorBookCard'
import { PopUp } from '../../../components/UI/PopUp/PopUp'
import {
   getCardOfVendorBooks,
   getCountOfVendorsBooks,
   getAllVendorsBooks,
} from '../../../store/vendor-slice'
import { theme } from '../../../utils/constants/theme'

export const VendorMainPage = () => {
   const [showOptions, setShowOptions] = useState(false)
   const [offset, setOffset] = useState(1)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { cardOfVendorBooks } = useSelector((state) => state.vendor)
   const { countOfVendorBooks } = useSelector((state) => state.vendor)

   useEffect(() => {
      dispatch(getAllVendorsBooks({ data: 'books', offset: 1 }))
   }, [])
   const showPopUp = () => {
      setShowOptions(!showOptions)
   }
   useEffect(() => {
      dispatch(getCountOfVendorsBooks())
   }, [])
   useEffect(() => {
      dispatch(getCardOfVendorBooks({ offset }))
   }, [offset])
   const navigateToInnerBook = (bookId) => {
      navigate(`${bookId}`)
   }

   const options = [
      {
         title: 'Все',
         value: 'books',
         id: 's1',
         action: (data) => dispatch(getAllVendorsBooks({ data, offset: 1 })),
      },
      {
         title: 'В избранном',
         value: 'favorite-books',
         id: 's2',
         action: (data) => dispatch(getAllVendorsBooks({ data, offset: 1 })),
      },
      {
         title: 'В корзине',
         value: 'basket-books',
         id: 's3',
         action: (data) => dispatch(getAllVendorsBooks({ data, offset: 1 })),
      },
      {
         title: 'Со скидками',
         value: 'books-discount',
         id: 's9',
      },
      {
         title: 'В обработке',
         value: 'books-in-process',
         id: 's5',
         action: (data) => dispatch(getAllVendorsBooks({ data, offset: 1 })),
      },
      {
         title: 'Отклоненные',
         value: 'books-refused',
         id: 's6',
         action: (data) => dispatch(getAllVendorsBooks({ data, offset: 1 })),
      },
   ]

   return (
      <VendorMainPageContainer>
         <HeadContainer>
            <BooksAmount>Всего книг {countOfVendorBooks.all || 0}</BooksAmount>
            <ContainerOfIcons onClick={showPopUp}>
               <span>Все</span>
               <ArrowDownIcon />
               {showOptions && (
                  <PopUpContainer>
                     <PopUp
                        width="191px"
                        top="25px"
                        padding="10px 10px"
                        options={options}
                     />
                  </PopUpContainer>
               )}
            </ContainerOfIcons>
         </HeadContainer>

         <VendorBookCardContainer>
            {cardOfVendorBooks.map((book) => (
               <VendorBookCard
                  minWidth="305px"
                  maxHeight="427px"
                  key={book?.bookId}
                  id={book.bookId}
                  baskets={book.baskets || 0}
                  vendorImageUrl={book.fileInformation?.firstPhoto}
                  amountOfLikes={book?.likes || 0}
                  date={book?.dateOfRegister}
                  name={book?.title}
                  price={book?.price}
                  isInProccess={book?.adminWatch === false}
                  isRejected={book?.isRejected}
                  onClickToBook={() => navigateToInnerBook(book?.bookId)}
               />
            ))}
         </VendorBookCardContainer>
         <SubmitSeeMore>
            {getCountOfVendorsBooks.countOfPages > offset && (
               <Button
                  padding="10px 580px 10px 580px"
                  lHeight="18px"
                  bgColor={theme.secondary.whiteBackground}
                  color={theme.secondary.placeholderGray}
                  border="1px solid #C4C4C4"
                  bgColorHover={theme.secondary.orange}
                  colorHover={theme.primary.white}
                  onClick={() => {
                     setOffset((prevOffset) => prevOffset + 1)
                  }}
               >
                  Смотреть больше
               </Button>
            )}
         </SubmitSeeMore>
      </VendorMainPageContainer>
   )
}

const VendorMainPageContainer = styled.div``
const HeadContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding-bottom: 25px;
   background: white;
   border-bottom: 1px solid #c4c4c4;
`
const BooksAmount = styled.span`
   color: #969696;
   font-size: 16px;
   padding-left: 35px;
`
const ContainerOfIcons = styled.div`
   display: flex;
   width: max-content;
   justify-content: space-between;
   align-items: center;
   padding-right: 35px;
   cursor: pointer;
   span {
      padding-right: 10px;
      line-height: 22px;
      font-size: 16px;
      font-weight: 600;
   }
`
const PopUpContainer = styled.div`
   position: relative;
   right: -10px;
   z-index: 99;
`
const VendorBookCardContainer = styled.div`
   padding-top: 20px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-gap: 4rem;
   padding-bottom: 70px;
`
const SubmitSeeMore = styled.div`
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: 50px;
`
