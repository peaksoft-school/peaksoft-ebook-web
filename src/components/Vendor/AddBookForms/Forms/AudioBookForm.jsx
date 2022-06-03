import React from 'react'
import styled from '@emotion/styled'
import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { LanguageField } from '../Fields/LanguageField'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { FieldWithText } from '../Fields/FieldWithText'
import { Checkbox } from '../../../UI/Checkbox/Checkbox'
import { FileUploader } from '../../../UI/FileUploader/FileUploader'
import { SendButton } from '../SendButton/SendButton'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'
import { optionsForFieldsThatMustBeNumber } from '../../../../utils/constants/general'
import {
   discountOptions,
   timeFieldOptions,
} from '../../../../utils/helpers/general'

export const AudioBookForm = ({
   onUploadAudioFile,
   audioFragment,
   onUploadAudioTape,
   audioTape,
   durationOfAudioBook,
   onChangeDuration,
   discount,
   setDiscount,
}) => {
   const { language, changeLanguage } = useSelectLanguage()
   const { register, control } = useFormContext()
   return (
      <>
         <RightSideContainer>
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
            </InnerRightSideContainer>
            <FieldContainer>
               <FieldName large>Длительность </FieldName>
               <DurationContainer>
                  <FieldWithText
                     innerText="ч"
                     width="118px"
                     type="number"
                     value={durationOfAudioBook.hour}
                     isDefaultValueMustBeEmpty
                     {...register(
                        'audioBook.hour',
                        timeFieldOptions(onChangeDuration)
                     )}
                  />
                  <FieldWithText
                     innerText="мин"
                     width="130px"
                     value={durationOfAudioBook.minute}
                     type="number"
                     isDefaultValueMustBeEmpty
                     {...register(
                        'audioBook.minute',
                        timeFieldOptions(onChangeDuration)
                     )}
                  />
                  <FieldWithText
                     innerText="сек"
                     width="125px"
                     value={durationOfAudioBook.second}
                     type="number"
                     isDefaultValueMustBeEmpty
                     {...register(
                        'audioBook.second',
                        timeFieldOptions(onChangeDuration)
                     )}
                  />
               </DurationContainer>
            </FieldContainer>
            <BestsellerContainer>
               <Controller
                  control={control}
                  name="isBestseller"
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => {
                     return <Checkbox onChange={onChange} isChecked={!!value} />
                  }}
               />
               <FieldName large withoutAsterisk>
                  Бестселлер
               </FieldName>
            </BestsellerContainer>
            <InnerRightSideContainer>
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
            </InnerRightSideContainer>
            <UploadAudioParentContainer>
               <UploadAudioContainer>
                  <FieldName large>Загрузите фрагмент аудиозаписи </FieldName>
                  <InnerUploadAudioContainer>
                     <FileUploader
                        onGetFile={onUploadAudioFile}
                        isLoading={audioFragment.isLoading}
                        isSuccess={audioFragment.isSuccess}
                        id="fragment"
                     />
                     <MaxSizeText>максимум 10 мин.</MaxSizeText>
                  </InnerUploadAudioContainer>
               </UploadAudioContainer>
               <UploadAudioContainer>
                  <FieldName large>Загрузите аудиозапись </FieldName>
                  <InnerUploadAudioContainer>
                     <FileUploader
                        onGetFile={onUploadAudioTape}
                        isLoading={audioTape.isLoading}
                        isSuccess={audioTape.isSuccess}
                        id="tape"
                     />
                  </InnerUploadAudioContainer>
               </UploadAudioContainer>
            </UploadAudioParentContainer>
         </RightSideContainer>
         <SendButton />
      </>
   )
}

const RightSideContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px 0;
`
const FieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'Open Sans';
   line-height: 130%;
   label {
      margin-bottom: 12px;
   }
`
const BestsellerContainer = styled.div`
   display: flex;
   gap: 0 33px;
   width: 100%;
   position: relative;
`
const InnerRightSideContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: flex-start;
   gap: 0 46px;
`
const DurationContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 100%;
   gap: 0 20px;
`
const UploadAudioParentContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px 0;
`
const UploadAudioContainer = styled.div`
   width: 100%;
`
const InnerUploadAudioContainer = styled.div`
   margin-top: 10px;
   width: 100%;
   display: flex;
   gap: 0 14px;
`
const MaxSizeText = styled.span`
   display: flex;
   align-items: center;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   text-align: center;
   color: #a3a3a3;
`
