import styled from '@emotion/styled'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'
import { TYPES_OF_BOOKS } from '../../../../utils/constants/general'
import { AboutBookFields } from '../Fields/AboutBookFields'
import { AudioBookForm } from './AudioBookForm'
import { ElectronicBookForm } from './ElectronicBookForm'
import { PaperBookForm } from './PaperBookForm'

export const CurrentBookForm = ({ type, imagesOfBook }) => {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
      reset,
   } = useForm()
   console.log(errors)
   const [selectedGenre, setSelectedGenre] = useState('')
   const { language, changeLanguage, resetLanguage } = useSelectLanguage()

   const renderCurrentForm = () => {
      switch (type) {
         case TYPES_OF_BOOKS.PAPER.type: {
            return (
               <PaperBookForm
                  register={register}
                  onAddHandler={handleSubmit}
                  images={imagesOfBook}
                  changeLanguage={changeLanguage}
                  language={language}
                  control={control}
               />
            )
         }
         case TYPES_OF_BOOKS.AUDIO.type: {
            return (
               <AudioBookForm
                  images={imagesOfBook}
                  onAddHandler={handleSubmit}
                  changeLanguage={changeLanguage}
                  language={language}
                  control={control}
               />
            )
         }
         case TYPES_OF_BOOKS.ELECTRONIC.type: {
            return (
               <ElectronicBookForm
                  images={imagesOfBook}
                  onAddHandler={handleSubmit}
                  changeLanguage={changeLanguage}
                  language={language}
                  control={control}
               />
            )
         }
         default: {
            return (
               <PaperBookForm
                  images={imagesOfBook}
                  onAddHandler={handleSubmit}
                  changeLanguage={changeLanguage}
                  language={language}
                  control={control}
               />
            )
         }
      }
   }

   return (
      <CurrentBookFormContainer>
         <LeftSideContainer>
            <AboutBookFields
               register={register}
               control={control}
               selectedGenre={selectedGenre}
               setSelectedGenre={setSelectedGenre}
            />
         </LeftSideContainer>
         <RightSideContainer>{renderCurrentForm()}</RightSideContainer>
         <button
            onClick={() =>
               reset({
                  aboutBook: '',
                  genreId: setSelectedGenre(''),
                  language: resetLanguage,
               })
            }
         >
            reset
         </button>
      </CurrentBookFormContainer>
   )
}

const CurrentBookFormContainer = styled.div`
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
