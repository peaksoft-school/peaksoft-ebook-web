import styled from '@emotion/styled'
import React from 'react'
import { useSelectLanguage } from '../../../../hooks/useSelectLanguage'
import { Checkbox } from '../../../UI/Checkbox/Checkbox'
import { FieldName } from '../../../UI/FieldName/FieldName'
import { FileUploader } from '../../../UI/FileUploader/FileUploader'
import { FieldWithText } from '../Fields/FieldWithText'
import { LanguageField } from '../Fields/LanguageField'
import { SendButton } from '../SendButton/SendButton'

export const ElectronicBookForm = () => {
   const { language, changeLanguage } = useSelectLanguage()
   return (
      <>
         <RightSideContainer>
            <InnerRightSideContainer>
               <FieldParentContainer>
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
                  <FieldContainer>
                     <FieldName large>Объем </FieldName>
                     <FieldWithText innerText="стр." />
                  </FieldContainer>
                  <BestsellerContainer>
                     <BestsellerInnerContainer>
                        <Checkbox />
                        <FieldName large withoutAsterisk>
                           Бестселлер
                        </FieldName>
                     </BestsellerInnerContainer>
                  </BestsellerContainer>
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
               </FieldParentContainer>
               <UploadFileContainer>
                  <FieldName large>Загрузите книгу </FieldName>
                  <UploadFileInnerContainer>
                     <FileUploader type="pdf" />
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
