/* eslint-disable no-unsafe-optional-chaining */
import styled from '@emotion/styled/macro'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import { Button } from '../../../components/UI/Buttons/Button'
import { AdminBookCard } from '../../../components/UI/Card/AdminBookCard'
import { GenreMenuForAdmin } from '../../../components/UI/GenreMenu/GenreMenuForAdmin'
import { PopUp } from '../../../components/UI/PopUp/PopUp'
import { getAcceptedBooks, getGenres } from '../../../store/admin-slice'
import { theme } from '../../../utils/constants/theme'

export const Books = () => {
   const [showOptions, setShowOptions] = useState(false)
   const [offset, setOffset] = useState(1)
   const [isVisibleGenreMenu, setIsVisibleGenreMenu] = useState(false)
   const [genreId, setGenreId] = useState(28)
   const [bookType, setBookType] = useState('ALL')
   const dispatch = useDispatch()
   const listOfBooks = useSelector((state) => state.adminVendors.acceptedBooks)
   const genres = useSelector((state) => state.adminVendors.listOfGenres)

   const countOfPages = Math.ceil(listOfBooks?.length / 8)

   const changeVisibleGenreMenu = () => {
      setIsVisibleGenreMenu((prevState) => !prevState)
   }
   const showPopUp = () => {
      setShowOptions(!showOptions)
   }

   const getSelectedGenre = (id) => {
      setGenreId(id)
      dispatch(getAcceptedBooks({ offset, genreId: id, bookType: 'ALL' }))
   }

   const getSelectedType = (data) => {
      setBookType(data)
      dispatch(getAcceptedBooks({ offset, genreId: 28, bookType: data }))
   }

   useEffect(() => {
      dispatch(getAcceptedBooks({ offset, genreId, bookType }))
   }, [offset])

   useEffect(() => {
      dispatch(getGenres())
   }, [])

   const options = [
      {
         title: 'Все',
         value: 'ALL',
         id: 's13',
         action: (data) => {
            getSelectedType(data)
         },
      },
      {
         title: 'Бумажные книги',
         value: 'PAPERBOOK',
         id: 's14',
         action: (data) => {
            getSelectedType(data)
         },
      },
      {
         title: 'Аудиокниги',
         value: 'AUDIOBOOK',
         id: 's15',
         action: (data) => {
            getSelectedType(data)
         },
      },
      {
         title: 'Электронные книги',
         value: 'EBOOK',
         id: 's16',
         action: (data) => {
            getSelectedType(data)
         },
      },
   ]

   return (
      <BooksContainer>
         <BooksHeader>
            <ContainerOfGenre onClick={changeVisibleGenreMenu}>
               <p>Жанры:</p>
               <span>Все</span>
               <ArrowDownIcon />
               {isVisibleGenreMenu && (
                  <GenreMenuForAdmin
                     onGenreItem={getSelectedGenre}
                     genres={genres}
                  />
               )}
            </ContainerOfGenre>
            <ContainerOfGenre onClick={showPopUp}>
               <p>Тип:</p>
               <span>Все</span>
               <ArrowDownIcon />
               {showOptions && (
                  <PopUp
                     width="206px"
                     top="29px"
                     right="-105px"
                     padding="10px 10px"
                     boxShadow="0 5px 10px 3px rgba(226, 219, 219, 0.5)"
                     options={options}
                  />
               )}
            </ContainerOfGenre>
         </BooksHeader>
         <BooksAmount>Всего: {listOfBooks?.length}</BooksAmount>
         <ContentContainer>
            {listOfBooks?.map((books) => (
               <AdminBookCard
                  minWidth="269px"
                  maxHeight="412px"
                  minHeight="408px"
                  padding="10px 10px 76px 35px"
                  marginTop="15px"
                  key={books.bookId}
                  vendorImageUrl={books.fileInformation?.firstPhoto}
                  date={books.dateOfRegister}
                  name={books.title}
                  price={books.price}
                  offset={offset}
               />
            ))}
         </ContentContainer>
         {countOfPages > offset && (
            <Button
               padding="0.5% 47% 0.5% 48%"
               lHeight="18px"
               bgColor={theme.secondary.whiteBackground}
               weight="400"
               color={theme.secondary.placeholderGray}
               border="1px solid #c4c4c4"
               bgColorHover={theme.secondary.orange}
               colorHover={theme.primary.white}
               onClick={() => {
                  setOffset((prevOffset) => prevOffset + 1)
               }}
            >
               Смотреть больше
            </Button>
         )}
      </BooksContainer>
   )
}

const BooksContainer = styled.div`
   padding-top: 55px;
`
const BooksHeader = styled.div`
   display: flex;
   padding-bottom: 37px;
   width: 100%;
`
const ContainerOfGenre = styled.div`
   display: flex;
   width: max-content;
   justify-content: space-between;
   align-items: center;
   padding-right: 49.5px;
   cursor: pointer;
   position: relative;
   p {
      font-size: 16px;
      color: #b5b5b5;
      padding-right: 12px;
   }
   span {
      padding-right: 10px;
      line-height: 22px;
      font-size: 16px;
      font-weight: 600;
   }
`

const BooksAmount = styled.span`
   color: #969696;
   font-size: 16px;
   padding-bottom: 25px;
`

const ContentContainer = styled.div`
   padding-top: 30px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-gap: 2rem;
   padding-bottom: 70px;
`
