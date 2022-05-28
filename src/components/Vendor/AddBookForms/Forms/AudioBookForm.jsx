import React from 'react'
import styled from '@emotion/styled'
import { LanguageField } from '../Fields/LanguageField'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { FieldWithText } from '../Fields/FieldWithText'
import { Checkbox } from '../../../UI/Checkbox/Checkbox'
import { FileUploader } from '../../../UI/FileUploader/FileUploader'
import { SendButton } from '../SendButton/SendButton'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'

export const AudioBookForm = () => {
   const { language, changeLanguage } = useSelectLanguage()
   return (
      <>
         <RightSideContainer>
            <InnerRightSideContainer>
               <FieldContainer>
                  <FieldName large>Язык </FieldName>
                  <LanguageField
                     selectedLanguage={language}
                     onSelectLanguage={changeLanguage}
                  />
               </FieldContainer>
               <FieldContainer>
                  <FieldName large>Год выпуска </FieldName>
                  <FieldWithText innerText="гг" />
               </FieldContainer>
            </InnerRightSideContainer>
            <FieldContainer>
               <FieldName large>Длительность </FieldName>
               <DurationContainer>
                  <FieldWithText innerText="ч" width="118px" />
                  <FieldWithText innerText="мин" width="130px" />
                  <FieldWithText innerText="сек" width="125px" />
               </DurationContainer>
            </FieldContainer>
            <BestsellerContainer>
               <Checkbox />
               <FieldName large withoutAsterisk>
                  Бестселлер
               </FieldName>
            </BestsellerContainer>
            <InnerRightSideContainer>
               <FieldContainer>
                  <FieldName large>Стоимость </FieldName>
                  <FieldWithText innerText="сом" />
               </FieldContainer>
               <FieldContainer>
                  <FieldName large withoutAsterisk>
                     Скидка
                  </FieldName>
                  <FieldWithText innerText="%" />
               </FieldContainer>
            </InnerRightSideContainer>
            <UploadAudioParentContainer>
               <UploadAudioContainer>
                  <FieldName large>Загрузите фрагмент аудиозаписи </FieldName>
                  <InnerUploadAudioContainer>
                     <FileUploader />
                     <MaxSizeText>максимум 10 мин.</MaxSizeText>
                  </InnerUploadAudioContainer>
               </UploadAudioContainer>
               <UploadAudioContainer>
                  <FieldName large>Загрузите аудиозапись </FieldName>
                  <InnerUploadAudioContainer>
                     <FileUploader />
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
   margin-bottom: 30px;
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
