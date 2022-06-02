import styled from '@emotion/styled'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { optionsForFieldsThatMustBeNumber } from '../../../../utils/constants/general'
import { discountOptions } from '../../../../utils/helpers/general'
import { Checkbox } from '../../../UI/Checkbox/Checkbox'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { FieldWithText } from '../Fields/FieldWithText'
import { LanguageField } from '../Fields/LanguageField'
import { SendButton } from '../SendButton/SendButton'

export const PaperBookForm = ({
   language,
   changeLanguage,
   discount,
   setDiscount,
}) => {
   const { register, control, watch } = useFormContext()
   const isBestsellerChecked = watch('isBestseller')

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
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Год выпуска </FieldName>
               <Controller
                  name="yearOfIssue"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                     <InputMask
                        mask="9999"
                        maskChar=""
                        onChange={(e) => onChange(Number(e.target.value))}
                        value={value}
                     >
                        {(inputProps) => (
                           <FieldWithText innerText="гг" {...inputProps} />
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
                  {...register(
                     'paperBook.numberOfPages',
                     optionsForFieldsThatMustBeNumber
                  )}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Кол-во книг </FieldName>
               <FieldWithText
                  innerText="шт."
                  type="number"
                  {...register(
                     'paperBook.numberOfSelected',
                     optionsForFieldsThatMustBeNumber
                  )}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large>Стоимость </FieldName>
               <FieldWithText
                  innerText="сом"
                  type="number"
                  {...register('price', optionsForFieldsThatMustBeNumber)}
               />
            </FieldContainer>
            <FieldContainer>
               <FieldName large withoutAsterisk>
                  Скидка
               </FieldName>
               <FieldWithText
                  innerText="%"
                  type="number"
                  isDefaultValueMustBeEmpty
                  value={discount}
                  {...register('discount', discountOptions(setDiscount))}
               />
            </FieldContainer>
            <FieldContainer>
               <BestsellerContainer>
                  <Controller
                     control={control}
                     name="isBestseller"
                     defaultValue=""
                     render={({ field: { onChange } }) => {
                        return (
                           <Checkbox
                              onChange={onChange}
                              isChecked={isBestsellerChecked}
                           />
                        )
                     }}
                  />
                  <FieldName large withoutAsterisk>
                     Бестселлер
                  </FieldName>
               </BestsellerContainer>
            </FieldContainer>
         </InnerRightSideContainer>
         <SendButton />
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
