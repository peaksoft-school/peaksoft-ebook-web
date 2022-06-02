import styled from '@emotion/styled'
import { useCallback, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { flushSync } from 'react-dom'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'
import { LANGUAGES, TYPES_OF_BOOKS } from '../../../../utils/constants/general'
import { Notification } from '../../../UI/Notification/Notification'
import { AboutBookFields } from '../Fields/AboutBookFields'
import { AudioBookForm } from './AudioBookForm'
import { ElectronicBookForm } from './ElectronicBookForm'
import { PaperBookForm } from './PaperBookForm'
import { addBook } from '../../../../store/vendor-slice'
import { useUploadFile } from '../../../../hooks/useUploadFile'
import { SuccessConfirmModal } from '../../../UI/Modals/SuccessConfirmModal'

export const CurrentBookForm = ({ type, imagesOfBook, resetImages }) => {
   const dispatch = useDispatch()

   const { handleSubmit, reset } = useFormContext()

   const [selectedGenre, setSelectedGenre] = useState([])

   const { language, changeLanguage, resetLanguage } = useSelectLanguage()

   const [audioFragment, uploadAudioFragment, resetAudioFragment] =
      useUploadFile()

   const [audioTape, uploadAudioTape, resetAudioTape] = useUploadFile()

   const [eBookFile, uploadeBook, reseteBook] = useUploadFile()

   const [durationOfAudioBook, setDurationOfAudioBook] = useState({
      hour: 0,
      minute: 0,
      second: 0,
   })
   const [discount, setDiscount] = useState(0)
   const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)

   const showErrorNotification = (message) =>
      toast(<Notification title="Ошибка" message={message} />)

   const showSuccessNotification = () => {
      flushSync(() => {
         setIsShowSuccessModal(true)
      })
      setTimeout(() => {
         flushSync(() => {
            setIsShowSuccessModal(false)
         })
      }, 1000)
   }
   const getCurrentTypeKey = () => {
      switch (type) {
         case TYPES_OF_BOOKS.PAPER.type:
            return TYPES_OF_BOOKS.PAPER.key

         case TYPES_OF_BOOKS.AUDIO.type:
            return TYPES_OF_BOOKS.AUDIO.key

         case TYPES_OF_BOOKS.ELECTRONIC.type:
            return TYPES_OF_BOOKS.ELECTRONIC.key

         default:
            return TYPES_OF_BOOKS.PAPER.key
      }
   }
   const onResetForm = useCallback(() => {
      const defaultValues = {
         title: '',
         authorFullName: '',
         aboutBook: '',
         publishingHouse: '',
         yearOfIssue: '',
         language: LANGUAGES.RUSSIAN.key,
         price: '',
         discount: '',
      }
      if (type === TYPES_OF_BOOKS.AUDIO.type) {
         defaultValues.audioBook = setDurationOfAudioBook({
            hour: 0,
            minute: 0,
            second: 0,
         })
      }
      if (type === TYPES_OF_BOOKS.ELECTRONIC.type) {
         defaultValues.electronicBook = {
            fragmentOfBook: '',
            numberOfPages: '',
         }
      }
      if (type === TYPES_OF_BOOKS.PAPER.type) {
         defaultValues.paperBook = {
            numberOfPages: '',
            numberOfSelected: '',
            fragmentOfBook: '',
         }
      }
      reset(defaultValues)
      resetAudioFragment()
      resetAudioTape()
      reseteBook()
      setDiscount(0)
      resetImages()
      setSelectedGenre('')
      resetLanguage()
   }, [type])

   const actionsAfterUploadBook = {
      resetForm: onResetForm,
      showSuccessNotification,
      showErrorNotification,
   }
   const uploadAudioBook = (data) => {
      if (audioFragment.value && audioTape.value) {
         dispatch(
            addBook({
               data,
               files: {
                  ...imagesOfBook,
                  audioFragment: audioFragment.value,
                  bookFile: audioTape.value,
               },
               ...actionsAfterUploadBook,
            })
         )
      } else {
         showErrorNotification('Загрузите аудиозаписи книги')
      }
   }
   const uploadElectronicBook = (data) => {
      if (eBookFile.value) {
         dispatch(
            addBook({
               data,
               files: {
                  ...imagesOfBook,
                  bookFile: eBookFile.value,
               },
               ...actionsAfterUploadBook,
            })
         )
      } else {
         showErrorNotification('Загрузите PDF книги')
      }
   }
   const uploadPaperBook = (data) => {
      dispatch(
         addBook({
            data,
            files: imagesOfBook,
            ...actionsAfterUploadBook,
         })
      )
   }
   const submitHandler = (data) => {
      const isImagesPicked = Object.values(imagesOfBook).every(
         (image) => image !== null
      )
      const bookData = { ...data, bookType: type }

      if (isImagesPicked) {
         if (type === TYPES_OF_BOOKS.AUDIO.type) {
            uploadAudioBook(bookData)
         }
         if (type === TYPES_OF_BOOKS.ELECTRONIC.type) {
            uploadElectronicBook(bookData)
         }
         if (type === TYPES_OF_BOOKS.PAPER.type) {
            uploadPaperBook(bookData)
         }
      } else {
         showErrorNotification('Загрузите фотографии книги')
      }
   }

   const errorHandler = (errors) => {
      const isFormIncompleted = Object.values(errors).some((error) => {
         if (!error.type) {
            return Object.values(error).some((err) => err.type === 'required')
         }
         return error.type === 'required'
      })
      if (isFormIncompleted) {
         showErrorNotification('Пожалуйста, заполните все поля')
      }
   }

   useEffect(() => {
      onResetForm()
   }, [onResetForm])

   const renderCurrentForm = () => {
      switch (type) {
         case TYPES_OF_BOOKS.PAPER.type: {
            return (
               <PaperBookForm
                  changeLanguage={changeLanguage}
                  language={language}
                  discount={discount}
                  setDiscount={setDiscount}
               />
            )
         }
         case TYPES_OF_BOOKS.AUDIO.type: {
            return (
               <AudioBookForm
                  changeLanguage={changeLanguage}
                  language={language}
                  audioFragment={audioFragment}
                  onUploadAudioFile={uploadAudioFragment}
                  audioTape={audioTape}
                  onUploadAudioTape={uploadAudioTape}
                  onChangeDuration={setDurationOfAudioBook}
                  durationOfAudioBook={durationOfAudioBook}
                  discount={discount}
                  setDiscount={setDiscount}
               />
            )
         }
         case TYPES_OF_BOOKS.ELECTRONIC.type: {
            return (
               <ElectronicBookForm
                  changeLanguage={changeLanguage}
                  language={language}
                  onUploadEbookFile={uploadeBook}
                  eBookFile={eBookFile}
                  discount={discount}
                  setDiscount={setDiscount}
               />
            )
         }
         default: {
            return (
               <PaperBookForm
                  changeLanguage={changeLanguage}
                  language={language}
                  discount={discount}
                  setDiscount={setDiscount}
               />
            )
         }
      }
   }

   return (
      <>
         <CurrentBookFormContainer
            onSubmit={handleSubmit(submitHandler, errorHandler)}
         >
            <LeftSideContainer>
               <AboutBookFields
                  selectedGenre={selectedGenre}
                  setSelectedGenre={setSelectedGenre}
                  getCurrentTypeKey={getCurrentTypeKey}
                  isAudioBook={type === TYPES_OF_BOOKS.AUDIO.type}
               />
            </LeftSideContainer>
            <RightSideContainer>{renderCurrentForm()}</RightSideContainer>
         </CurrentBookFormContainer>
         <SuccessConfirmModal
            isOpen={isShowSuccessModal}
            title="Ваш запрос был успешно отправлен!"
         />
      </>
   )
}

const CurrentBookFormContainer = styled.form`
   display: flex;
   width: 100%;
   gap: 0 42px;
`
const LeftSideContainer = styled.div`
   width: 65%;
   display: flex;
   flex-direction: column;
   gap: 30px 0;
   margin-bottom: 72px;
`

const RightSideContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 35%;
`
