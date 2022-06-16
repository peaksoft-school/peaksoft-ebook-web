import styled from '@emotion/styled'
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { OutlookOfBooks } from '../../components/UI/AboutBook/OutlookOfBooks/OutlookOfBooks'
import { adminActions, getBookById } from '../../store/admin-slice'
import { DEFAULT_ROUTES, VENDOR_ROUTES } from '../../utils/constants/routes'
import { AboutBook } from '../../components/UI/AboutBook/AboutBook'
import { LANGUAGES, TYPES_OF_BOOKS } from '../../utils/constants/general'
import { DescriptionOfBook } from '../../components/UI/AboutBook/DescriptionOfBook/DescriptionOfBook'
import { ReactComponent as LikeIcon } from '../../assets/icons/like-icon.svg'
import { AnimatedModal } from '../../components/UI/Modals/AnimatedModal'
import { Button } from '../../components/UI/Buttons/Button'
import { theme } from '../../utils/constants/theme'
import { removeVendorBook } from '../../store/vendor-slice'
import { Notification } from '../../components/UI/Notification/Notification'

export const VendorBookInnerPage = () => {
   const { book } = useSelector((state) => state.admin)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { bookId } = useParams()

   const [isShowModal, setIsShowModal] = useState(false)

   const showNotification = (message) =>
      toast(
         <Notification
            title="Удаление книги"
            message={message}
            type="success"
         />
      )

   useEffect(() => {
      dispatch(getBookById(bookId))
      return () => dispatch(adminActions.resetBook())
   }, [])

   const translateLanguageToRussian = (languageFromBase) => {
      return Object.values(LANGUAGES).find(
         (language) => language.key === languageFromBase
      )?.title
   }
   const setIsShowDeleteModalHandler = () => {
      setIsShowModal((isShowed) => !isShowed)
   }
   const deleteBookHandler = () => {
      dispatch(removeVendorBook({ id: bookId }))
         .unwrap()
         .then(() => {
            showNotification('Книга успешно удалена!')
            setIsShowDeleteModalHandler()
            navigate(DEFAULT_ROUTES.INDEX.PATH)
         })
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
   return (
      <>
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
                        whiteButtonInnerText="Удалить"
                        onClickToWhiteButton={setIsShowDeleteModalHandler}
                        orangeButtonInnerText="Редактировать"
                     />
                  </BookInformationContainer>
               </AboutBookInnerContainer>
               <DescriptionOfBook
                  aboutBook={book?.aboutBook}
                  fragmentOfBook={book?.[currentBookType()]?.fragmentOfBook}
                  thirdBook={book?.fileInformation.thirdPhoto}
               />
            </AboutBookContainer>
         </ParentContainer>
         <AnimatedModal
            isMounted={isShowModal}
            onCloseModal={setIsShowDeleteModalHandler}
         >
            <ModalInnerContainer>
               <h1>
                  Вы уверены, что хотите удалить
                  <span>“{book?.title}” ?</span>
               </h1>
               <div>
                  <CancelButton onClick={setIsShowDeleteModalHandler}>
                     Отменить
                  </CancelButton>
                  <Button
                     padding="10px 24px"
                     bgColor={theme.secondary.darkBackground}
                     fontSize="16px"
                     ling-height="21.79px"
                     bgColorHover="#484848"
                     bgColorActive={theme.secondary.orange}
                     onClick={deleteBookHandler}
                  >
                     Удалить
                  </Button>
               </div>
            </ModalInnerContainer>
         </AnimatedModal>
      </>
   )
}

const ParentContainer = styled.div`
   width: 100%;
   margin-bottom: 107px;
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
const ModalInnerContainer = styled.div`
   padding: 20px 69px;
   display: flex;
   flex-direction: column;
   gap: 36px 0;
   h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      text-align: center;
      color: #000000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      span {
         margin-top: 0.5rem;
         font-weight: bold;
         text-transform: capitalize;
      }
   }
   div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 32px;
   }
`
const CancelButton = styled.button`
   outline: none;
   border: none;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: #a3a3a3;
   background: inherit;
   padding: 10px 24px;
   cursor: pointer;
   &:hover {
      opacity: 0.9;
   }
   &:active {
      color: #000000;
   }
`
