import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { Checkbox } from '../../../UI/Checkbox/Checkbox'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { FieldWithText } from '../Fields/FieldWithText'
import { LanguageField } from '../Fields/LanguageField'
import { SendButton } from '../SendButton/SendButton'

export const PaperBookForm = ({
   // images,
   onAddHandler,
   register,
   language,
   changeLanguage,
   control,
}) => {
   // console.log(images)
   const addBookHandler = (data) => {
      console.log(data)
   }
   const checkIsValueBelowZero = (value, setValue) => {
      return value <= 0 ? setValue(0) : setValue(value)
   }
   const [numberOfPages, setNumberOfPages] = useState(0)
   const [numberOfSelected, setNumberOfSelected] = useState(0)
   const [price, setPrice] = useState(0)
   const [discount, setDiscount] = useState(0)

   const optionsForFieldThatMustBeANumber = (setValue) => {
      return {
         required: true,
         valueAsNumber: true,
         onChange: ({ target: { value } }) =>
            checkIsValueBelowZero(value, setValue),
      }
   }
   const discountOptions = {
      valueAsNumber: true,
      onChange: ({ target: { value } }) =>
         checkIsValueBelowZero(value, setDiscount),
   }
   return (
      <>
         <InnerRightSideContainer>
            <FieldContainer>
               <FieldName large>Язык </FieldName>
               <Controller
                  control={control}
                  name="language"
                  render={({ field: { onChange } }) => {
                     return (
                        <LanguageField
                           selectedLanguage={language}
                           onSelectLanguage={changeLanguage}
                           onChange={onChange}
                        />
                     )
                  }}
                  defaultValue={language.key}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Год выпуска </FieldName>
               <Controller
                  name="yearOfIssue"
                  control={control}
                  render={({ field: { onChange } }) => (
                     <InputMask
                        mask="9999"
                        maskChar=""
                        onChange={(e) => onChange(Number(e.target.value))}
                     >
                        {(inputProps) => (
                           <FieldWithText
                              innerText="гг"
                              isDate
                              {...inputProps}
                           />
                        )}
                     </InputMask>
                  )}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Объем </FieldName>
               <FieldWithText
                  innerText="стр."
                  type="number"
                  value={numberOfPages}
                  {...register(
                     'numberOfPages',
                     optionsForFieldThatMustBeANumber(setNumberOfPages)
                  )}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Кол-во книг </FieldName>
               <FieldWithText
                  innerText="шт."
                  type="number"
                  value={numberOfSelected}
                  {...register(
                     'numberOfSelected',
                     optionsForFieldThatMustBeANumber(setNumberOfSelected)
                  )}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Стоимость </FieldName>
               <FieldWithText
                  innerText="сом"
                  type="number"
                  value={price}
                  {...register(
                     'price',
                     optionsForFieldThatMustBeANumber(setPrice)
                  )}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large withoutAsterisk>
                  Скидка
               </FieldName>
               <FieldWithText
                  innerText="%"
                  type="number"
                  value={discount}
                  {...register('discount', discountOptions)}
               />
            </FieldContainer>
            <FieldContainer>
               <BestsellerContainer>
                  <Checkbox {...register('isBestSeller')} />
                  <FieldName large withoutAsterisk>
                     Бестселлер
                  </FieldName>
               </BestsellerContainer>
            </FieldContainer>
         </InnerRightSideContainer>
         <SendButton onAdd={onAddHandler(addBookHandler)} />
      </>
   )
}

const InnerRightSideContainer = styled.div`
   width: 100%;
   gap: 0 42px;
   display: grid;
   grid-template: repeat(2, 1fr) / repeat(2, 1fr);
   justify-items: end;
`
const FieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
   font-family: 'Open Sans';
   line-height: 130%;
   label {
      margin-bottom: 12px;
   }
   width: 100%;
`
const BestsellerContainer = styled.div`
   display: flex;
   gap: 0 33px;
`
