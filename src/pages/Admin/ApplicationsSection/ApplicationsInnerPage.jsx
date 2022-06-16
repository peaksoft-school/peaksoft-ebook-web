import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { theme } from '../../../utils/constants/theme'
import { OutlookOfBooks } from '../../../components/UI/AboutBook/OutlookOfBooks/OutlookOfBooks'
import { AboutBook } from '../../../components/UI/AboutBook/AboutBook'
import { DescriptionOfBook } from '../../../components/UI/AboutBook/DescriptionOfBook/DescriptionOfBook'
import { Input } from '../../../components/UI/Inputs/Input'
import { Modal } from '../../../components/UI/Modals/Modal'
import { Button } from '../../../components/UI/Buttons/Button'
import { acceptBook, getBookById, refuseBook } from '../../../store/admin-slice'
import { SuccessConfirmModalForAdmin } from '../../../components/UI/Modals/SuccessConfirmModalForAdmin'

export const ApplicationsInnerPage = () => {
   const [showSuccess, setShowSuccess] = useState(false)
   const [showModal, setShowModal] = useState(false)
   const [message, setMessage] = useState('')
   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const specificBook = useSelector((state) => state.admin.book)

   useEffect(() => {
      dispatch(getBookById(id))
   }, [])

   useEffect(() => {
      const timeout = setTimeout(() => setShowSuccess(false), 2000)

      return () => {
         clearTimeout(timeout)
      }
   }, [showSuccess])

   const showDeleteModal = () => {
      setShowModal(true)
   }

   const showSuccessModal = (bookId) => {
      dispatch(
         acceptBook({
            id: { id: bookId },
            showModal: () => setShowSuccess(true),
            navigate: () => navigate('/applications'),
         })
      )
   }

   const refusedBook = (e, id) => {
      e.preventDefault()
      dispatch(
         refuseBook({
            id,
            message,
            navigate: () => navigate('/applications'),
            showModal: () => showDeleteModal(true),
         })
      )
   }
   const reconvertSizeOfBookToString = () => {
      const book =
         specificBook?.bookType === 'PAPERBOOK' ? 'paperBook' : 'electronicBook'
      return specificBook?.bookType === 'AUDIOBOOK'
         ? `${specificBook.audioBook.hour} ч. ${specificBook.audioBook.minute} мин. ${specificBook.audioBook.second} сек.`
         : `${specificBook?.[book]?.numberOfPages} стр.`
   }
   return (
      <>
         <Container>
            <Breadcrumbs>
               <Link to="/applications">Заявки</Link>
               <Typography color={theme.primary.black}>
                  {specificBook?.title}
               </Typography>
            </Breadcrumbs>
            <FirstLineContainer>
               <OutlookOfBooks
                  main={specificBook?.fileInformation.firstPhoto}
                  second={specificBook?.fileInformation.secondPhoto}
                  isNew={specificBook?.isNew}
               />
               <AboutBook
                  title={specificBook?.title}
                  price={specificBook?.price}
                  author={specificBook?.authorFullName}
                  genre={specificBook?.genre.rusName}
                  language={specificBook?.language}
                  publishingHouse={specificBook?.publishingHouse}
                  yearOfIssue={specificBook?.yearOfIssue}
                  audioUrl={specificBook?.audioBook?.urlFragment}
                  whiteButtonInnerText="Отклонить"
                  onClickToWhiteButton={() => showDeleteModal(id)}
                  orangeButtonInnerText="Принять"
                  onClickToOrangeButton={() => showSuccessModal(id)}
                  isAudioBook={specificBook?.bookType === 'AUDIOBOOK'}
                  size={reconvertSizeOfBookToString()}
               />
            </FirstLineContainer>
            <SecondLineContainer>
               <DescriptionOfBook
                  aboutBook={specificBook?.aboutBook}
                  thirdBook={specificBook?.fileInformation?.thirdPhoto}
                  fragmentOfBook={specificBook?.paperBook?.fragmentOfBook}
               />
            </SecondLineContainer>
         </Container>

         <SuccessConfirmModalForAdmin
            isOpen={showSuccess}
            onCloseBackDrop={() => setShowSuccess(false)}
            title={`"${specificBook?.title}" `}
         />

         <Modal
            isOpen={showModal}
            onCloseBackDrop={(e) => {
               e.stopPropagation()
               setShowModal(false)
            }}
         >
            <StyledModal
               onSubmit={(e) => refusedBook(e, id)}
               onChange={(e) => setMessage(e.target.value)}
            >
               <div>
                  <p>Причина вашего отклонения</p>
                  <Input
                     type="text"
                     placeholder="Напишите причину отклонения..."
                     value={message}
                  />
               </div>
               <div>
                  <Button
                     fontSize="16px"
                     bgColor="#222222"
                     color="white"
                     bgColorHover="#484848"
                     bgColorActive="#F34901"
                     type="submit"
                  >
                     Отправить
                  </Button>
               </div>
            </StyledModal>
         </Modal>
      </>
   )
}

const Container = styled.div`
   padding-top: 50px;
   .MuiBreadcrumbs-root {
      font-size: 14px;
      font-weight: 400px;
      a {
         text-decoration: none;
         color: inherit;
      }
   }
   .MuiTypography-root {
      font-size: 14px;
      font-weight: 400px;
   }
`

const FirstLineContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 72px;
`

const SecondLineContainer = styled.div`
   display: flex;
   padding: 123px 0;
`
const StyledModal = styled.form`
   div {
      padding: 0 20px 20px 20px;
      p {
         padding: 20px 250px 15px 0;
         font-size: 16px;
         line-height: 20px;
      }
   }
   button {
      margin-left: 350px;
   }
   input {
      width: 483px;
      height: 108px;
      margin: 0px auto;
      ::placeholder {
         color: #969696;
         font-size: 14px;
         font-weight: 400;
         position: absolute;
      }
   }
`
