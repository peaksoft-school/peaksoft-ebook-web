import styled from '@emotion/styled'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { Input } from '../../../UI/Inputs/Input'
import { SelectGenreDropdown } from '../SelectGenreDropdown/SelectGenreDropdown'

export const AboutBookFields = ({
   isAudioBook,
   selectedGenre,
   setSelectedGenre,
   getCurrentTypeKey,
}) => {
   const { watch, register, control } = useFormContext()

   const aboutBookText = watch('aboutBook')

   const fragmentOfBookText = watch(`${getCurrentTypeKey()}.fragmentOfBook`)

   const selectGenreOptions = {
      required: true,
      validate: {
         checkIfGenreIsEmpty: (v) => v !== '' || 'ERROR MESSAGE',
      },
   }
   return (
      <>
         <FieldContainer>
            <FieldName large>Название книги </FieldName>
            <Input
               borderActive
               placeholder="Напишите полное название книги"
               {...register('title', { required: true })}
            />
         </FieldContainer>
         <FieldContainer>
            <FieldName large>ФИО автора </FieldName>
            <Input
               borderActive
               placeholder="Напишите ФИО автора"
               {...register('authorFullName', { required: true })}
            />
         </FieldContainer>
         <FieldContainer>
            <FieldName large>Выберите жанр </FieldName>
            <Controller
               control={control}
               name="genreId"
               render={({ field: { onChange } }) => {
                  return (
                     <SelectGenreDropdown
                        selectedGenre={selectedGenre}
                        onSelectGenre={setSelectedGenre}
                        onChange={onChange}
                     />
                  )
               }}
               rules={selectGenreOptions}
            />
         </FieldContainer>
         {!isAudioBook && (
            <FieldContainer>
               <FieldName large>Издательство </FieldName>
               <Input
                  borderActive
                  placeholder="Напишите название издательства"
                  {...register('publishingHouse', { required: true })}
               />
            </FieldContainer>
         )}
         <FieldContainer>
            <FieldName large>О книге </FieldName>
            <textarea
               placeholder="Напишите о книге"
               value={aboutBookText}
               {...register('aboutBook', {
                  required: true,
               })}
               maxLength={1234}
            />
            <FieldTextLength>
               {aboutBookText?.length || 0} / 1234
            </FieldTextLength>
         </FieldContainer>
         {!isAudioBook && (
            <FieldContainer>
               <FieldName large>Фрагмент книги </FieldName>
               <textarea
                  placeholder="Напишите фрагмент книги"
                  value={fragmentOfBookText}
                  {...register(`${getCurrentTypeKey()}.fragmentOfBook`, {
                     required: true,
                  })}
                  maxLength={9234}
               />
               <FieldTextLength>
                  {fragmentOfBookText?.length || 0} / 9234
               </FieldTextLength>
            </FieldContainer>
         )}
      </>
   )
}
const FieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   font-family: 'Open Sans';
   line-height: 130%;
   color: #969696;
   label {
      margin-bottom: 12px;
   }
   input {
      height: auto;
   }
   textarea {
      transition: all 0.5s;
      width: 100%;
      resize: none;
      min-height: 199px;
      border: 1px solid #c4c4c4;
      outline: none;
      padding: 16px 15px;
      font-weight: 400;
      font-size: 16px;
      background-color: #f8f8f8;
      &:hover {
         background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
         transition: all 0.5s;
      }
      &:focus {
         background-color: ${({ error }) => (error ? '#FFF5F5' : '#ffffff')};
         border: 1px solid #f10000;
      }
      &::placeholder {
         color: #969696;
      }
      &::-webkit-scrollbar {
         background-color: transparent;
         width: 0.4rem;
         border-radius: 10rem;
      }
      &::-webkit-scrollbar-thumb {
         border: 4px solid #c4c4c4;
         border-radius: 5px;
         transform: rotate(90deg);
      }
      &::-webkit-scrollbar-thumb:hover {
         border: 4px solid #bdbdbd;
      }
   }
`
const FieldTextLength = styled.p`
   margin-top: 10px;
   width: 100%;
   text-align: end;
   color: #b5b5b5;
`
