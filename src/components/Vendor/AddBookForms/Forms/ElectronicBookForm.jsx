import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'
import { optionsForFieldsThatMustBeNumber } from '../../../../utils/constants/general'
import { discountOptions } from '../../../../utils/helpers/general'
import { Checkbox } from '../../../UI/Checkbox/Checkbox'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { FileUploader } from '../../../UI/FileUploader/FileUploader'
import { FieldWithText } from '../Fields/FieldWithText'
import { LanguageField } from '../Fields/LanguageField'
import { SendButton } from '../SendButton/SendButton'

export const ElectronicBookForm = ({ onUploadEbookFile, ebookFile }) => {
   const { language, changeLanguage } = useSelectLanguage()
   const { register, control } = useFormContext()
   const [discount, setDiscount] = useState(0)
   return (
      <>
         <RightSideContainer>
            <InnerRightSideContainer>
               <FieldParentContainer>
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
                        rules={{ required: true }}
                        render={({ field: { onChange } }) => (
                           <InputMask
                              mask="9999"
                              maskChar=""
                              onChange={(e) => onChange(Number(e.target.value))}
                           >
                              {(inputProps) => (
                                 <FieldWithText
                                    innerText="гг"
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
                        {...register(
                           'electronicBook.numberOfPages',
                           optionsForFieldsThatMustBeNumber
                        )}
                     />
                  </FieldContainer>
                  <BestsellerContainer>
                     <BestsellerInnerContainer>
                        <Checkbox {...register('isBestseller')} />
                        <FieldName large withoutAsterisk>
                           Бестселлер
                        </FieldName>
                     </BestsellerInnerContainer>
                  </BestsellerContainer>
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
                        value={discount}
                        isDefaultValueMustBeEmpty
                        {...register('discount', discountOptions(setDiscount))}
                     />
                  </FieldContainer>
               </FieldParentContainer>
               <UploadFileContainer>
                  <FieldName large>Загрузите книгу </FieldName>
                  <UploadFileInnerContainer>
                     <FileUploader
                        type="pdf"
                        onGetFile={onUploadEbookFile}
                        isLoading={ebookFile.isLoading}
                        isSuccess={ebookFile.isSuccess}
                     />
                  </UploadFileInnerContainer>
               </UploadFileContainer>
            </InnerRightSideContainer>
         </RightSideContainer>
         <SendButton />
      </>
   )
}

const RightSideContainer = styled.div`
   width: 35%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const InnerRightSideContainer = styled.div`
   width: 100%;
`
const FieldParentContainer = styled.div`
   width: 100%;
   gap: 0 42px;
   display: grid;
   grid-template: repeat(2, 1fr) / repeat(2, 1fr);
   justify-items: start;
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
`
const BestsellerInnerContainer = styled.div`
   display: flex;
   width: 100%;
   gap: 0 33px;
`
const BestsellerContainer = styled.div`
   display: flex;
   align-items: center;
`
const UploadFileContainer = styled.div`
   margin-top: 10px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`
const UploadFileInnerContainer = styled.div`
   margin-top: 10px;
`
