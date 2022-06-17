import styled from '@emotion/styled'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { OutlookOfBooks } from '../../components/UI/AboutBook/OutlookOfBooks/OutlookOfBooks'
import { adminActions, getBookById } from '../../store/admin-slice'
import { DEFAULT_ROUTES, VENDOR_ROUTES } from '../../utils/constants/routes'
import { AboutBook } from '../../components/UI/AboutBook/AboutBook'
import {
   LANGUAGES,
   SIGN_IN_QUERY_PARAMS,
   TYPES_OF_BOOKS,
} from '../../utils/constants/general'
import { DescriptionOfBook } from '../../components/UI/AboutBook/DescriptionOfBook/DescriptionOfBook'
import { ReactComponent as LikeIcon } from '../../assets/icons/like-icon.svg'
import { Notification } from '../../components/UI/Notification/Notification'
import { addToBasket, postLike } from '../../store/user-slice'

export const ClientBookInnerPage = () => {
   const { book } = useSelector((state) => state.admin)
   const { isAuthorized } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const [, setSearchParams] = useSearchParams()

   const { bookId } = useParams()

   const showNotification = ({ title, message, type }) =>
      toast(
         <Notification
            title={title || 'Успешно'}
            message={message}
            type={type || 'success'}
         />
      )

   useEffect(() => {
      dispatch(getBookById(bookId))
      return () => dispatch(adminActions.resetBook())
   }, [getBookById])

   const translateLanguageToRussian = (languageFromBase) => {
      return Object.values(LANGUAGES).find(
         (language) => language.key === languageFromBase
      )?.title
   }

   const checkIsAudioBook = useCallback(() => {
      return book?.bookType === TYPES_OF_BOOKS.AUDIO.type
   }, [book])

   const currentBookType = useCallback(() => {
      if (book.bookType === TYPES_OF_BOOKS.AUDIO.type) {
         return TYPES_OF_BOOKS.AUDIO.key
      }
      if (book.bookType === TYPES_OF_BOOKS.ELECTRONIC.type) {
         return TYPES_OF_BOOKS.ELECTRONIC.key
      }
      if (book.bookType === TYPES_OF_BOOKS.PAPER.type) {
         return TYPES_OF_BOOKS.PAPER.key
      }
      return book.bookType
   }, [book])

   const reconvertSizeOfBook = useCallback(() => {
      if (book?.bookType === TYPES_OF_BOOKS.AUDIO.type) {
         return `0 ч. 3 мин. 44 сек.`
      }
      return `${book?.[currentBookType()].numberOfPages || 0} стр.`
   }, [book])

   const addToFavoriteHandler = () => {
      return isAuthorized
         ? dispatch(postLike({ id: bookId, showNotification }))
         : setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
   }
   const addToBasketHandler = () => {
      return isAuthorized
         ? dispatch(addToBasket({ id: bookId, showNotification }))
         : setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
   }
   return (
      <ParentContainer>
         <NameOfPageContainer>
            <Link to={DEFAULT_ROUTES.INDEX.PATH}>
               {DEFAULT_ROUTES.INDEX.LABEL}
            </Link>
            <span>{` / ${
               book?.title || VENDOR_ROUTES.BOOK_INNER_PAGE.LABEL
            }`}</span>
         </NameOfPageContainer>
         <AboutBookContainer>
            <AboutBookInnerContainer>
               <OutlookOfBooks
                  main={book?.fileInformation.firstPhoto}
                  second={book?.fileInformation.secondPhoto}
                  isNew={book?.isNew}
               />
               <BookInformationContainer>
                  <ActionsContainer>
                     <span>
                        <LikeIcon />({book?.likes || 0})
                     </span>
                     <span>В корзине ({book?.baskets || 0}) </span>
                  </ActionsContainer>
                  <AboutBook
                     title={book?.title}
                     price={book?.price || 0}
                     author={book?.authorFullName}
                     genre={book?.genre.rusName}
                     language={
                        translateLanguageToRussian(book?.language) ||
                        LANGUAGES.RUSSIAN.title
                     }
                     publishingHouse={book?.publishingHouse}
                     yearOfIssue={book?.yearOfIssue}
                     size={reconvertSizeOfBook()}
                     isAudioBook={checkIsAudioBook()}
                     whiteButtonInnerText="В избранное"
                     onClickToWhiteButton={addToFavoriteHandler}
                     orangeButtonInnerText="Добавить в корзину"
                     onClickToOrangeButton={addToBasketHandler}
                  />
               </BookInformationContainer>
            </AboutBookInnerContainer>
            <DescriptionOfBook
               aboutBook={book?.aboutBook}
               fragmentOfBook={book?.[currentBookType()]?.fragmentOfBook}
               thirdBook={book?.fileInformation.thirdPhoto}
               isAudioBook={checkIsAudioBook()}
            />
         </AboutBookContainer>
      </ParentContainer>
   )
}

const ParentContainer = styled.div`
   width: 100%;
   margin-bottom: 107px;
   padding: 0 80px;
`
const AboutBookContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 123px 0;
`
const BookInformationContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px 0;
`
const ActionsContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0 14px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   span {
      display: flex;
      gap: 0 8px;
      align-items: center;
   }
`
const AboutBookInnerContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 0 107px;
`
const NameOfPageContainer = styled.div`
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   & a {
      color: #969696;
      text-decoration: none;
   }
   & span {
      color: #000000;
      text-transform: capitalize;
   }

   margin-bottom: 82px;
`
