import styled from '@emotion/styled'
import { useCallback, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'
import { flushSync } from 'react-dom'
import { useDispatch } from 'react-redux'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'
import { TYPES_OF_BOOKS } from '../../../../utils/constants/general'
import { Notification } from '../../../UI/Notification/Notification'
import { AboutBookFields } from '../Fields/AboutBookFields'
import { AudioBookForm } from './AudioBookForm'
import { ElectronicBookForm } from './ElectronicBookForm'
import { PaperBookForm } from './PaperBookForm'
import { addBook } from '../../../../store/vendor-slice'

export const CurrentBookForm = ({ type, imagesOfBook }) => {
   const dispatch = useDispatch()

   const [selectedGenre, setSelectedGenre] = useState([])

   const { language, changeLanguage, resetLanguage } = useSelectLanguage()

   const [audioFile, setAudioFile] = useState({
      fragment: {
         value: null,
         isLoading: false,
         isSuccess: false,
      },
      tape: {
         value: null,
         isLoading: false,
         isSuccess: false,
      },
   })
   const [ebookFile, setEbookFile] = useState({
      value: null,
      isLoading: false,
      isSuccess: false,
   })

   const uploadEbookFileHandler = ({ target: { files } }) => {
      flushSync(() => {
         setEbookFile((prevFiles) => {
            return {
               ...prevFiles,
               isLoading: true,
            }
         })
      })
      setTimeout(() => {
         flushSync(() => {
            setEbookFile({ value: files[0], isLoading: false, isSuccess: true })
         })
      }, 1000)
   }
   const uploadAudioFileHandler = ({ target: { name, files } }) => {
      flushSync(() => {
         setAudioFile((prevFiles) => {
            return {
               ...prevFiles,
               [name]: {
                  isLoading: true,
               },
            }
         })
      })
      setTimeout(() => {
         flushSync(() => {
            setAudioFile((prevFiles) => {
               return {
                  ...prevFiles,
                  [name]: {
                     value: files[0],
                     isLoading: false,
                     isSuccess: true,
                  },
               }
            })
         })
      }, 1000)
   }
   const { handleSubmit, reset } = useFormContext()

   const showErrorNotification = (message) =>
      toast(<Notification title="Ошибка" message={message} />)

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
   const submitHandler = (data) => {
      const isImagesPicked = Object.values(imagesOfBook).every(
         (image) => image !== null
      )
      if (isImagesPicked) {
         if (type === TYPES_OF_BOOKS.AUDIO.type) {
            if (Object.values(audioFile).every((file) => file.value !== null)) {
               console.log(data)
            } else {
               showErrorNotification('Загрузите аудиозаписи книги')
            }
         }
         if (type === TYPES_OF_BOOKS.ELECTRONIC.type) {
            if (ebookFile.value) {
               console.log(data)
            } else {
               showErrorNotification('Загрузите PDF книги')
            }
         }
         if (type === TYPES_OF_BOOKS.PAPER.type) {
            dispatch(
               addBook({
                  data: { ...data, bookType: type },
                  files: imagesOfBook,
               })
            )
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
         showErrorNotification('Заполните все поля')
      }
   }
   const onResetForm = useCallback(() => {
      const defaultValues = {
         title: '',
         authorFullName: '',
         aboutBook: '',
         genreId: setSelectedGenre(''),
         publishingHouse: '',
         [`${getCurrentTypeKey()}`]: { numberOfPages: '' },
         [`${getCurrentTypeKey()}`]: { numberOfSelected: '' },
         [`${getCurrentTypeKey()}`]: { fragmentOfBook: '' },
         language: resetLanguage,
         yearOfIssue: '',
         price: '',
         discount: '',
         isBestSeller: false,
      }
      reset(defaultValues)
   }, [type])

   useEffect(() => {
      onResetForm()
   }, [onResetForm])

   const renderCurrentForm = () => {
      switch (type) {
         case TYPES_OF_BOOKS.PAPER.type: {
            return (
               <PaperBookForm
                  images={imagesOfBook}
                  changeLanguage={changeLanguage}
                  language={language}
               />
            )
         }
         case TYPES_OF_BOOKS.AUDIO.type: {
            return (
               <AudioBookForm
                  images={imagesOfBook}
                  changeLanguage={changeLanguage}
                  language={language}
                  audioFile={audioFile}
                  onUploadAudioFile={uploadAudioFileHandler}
               />
            )
         }
         case TYPES_OF_BOOKS.ELECTRONIC.type: {
            return (
               <ElectronicBookForm
                  images={imagesOfBook}
                  changeLanguage={changeLanguage}
                  language={language}
                  onUploadEbookFile={uploadEbookFileHandler}
                  ebookFile={ebookFile}
               />
            )
         }
         default: {
            return (
               <PaperBookForm
                  images={imagesOfBook}
                  changeLanguage={changeLanguage}
                  language={language}
               />
            )
         }
      }
   }

   return (
      <CurrentBookFormContainer
         onSubmit={handleSubmit(submitHandler, errorHandler)}
      >
         <LeftSideContainer>
            <AboutBookFields
               selectedGenre={selectedGenre}
               setSelectedGenre={setSelectedGenre}
               getCurrentTypeKey={getCurrentTypeKey}
            />
         </LeftSideContainer>
         <RightSideContainer>{renderCurrentForm()}</RightSideContainer>
         <button onClick={onResetForm}>reset</button>
      </CurrentBookFormContainer>
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
