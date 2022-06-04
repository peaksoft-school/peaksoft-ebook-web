import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ReactComponent as ArrowDrop } from '../../../../assets/icons/arrow_drop.svg'
import { LANGUAGES } from '../../../../utils/constants/general'
import { PopUp } from '../../../UI/PopUp/PopUp'

export const LanguageField = ({
   selectedLanguage,
   onSelectLanguage,
   onChange,
}) => {
   const [isActive, setIsActive] = useState(false)

   const openOptionsHandler = () => {
      setIsActive((isActive) => !isActive)
   }
   const changeOptionHandler = (option) => {
      onSelectLanguage(
         Object.values(LANGUAGES).find((language) => language.title === option)
      )
      openOptionsHandler()
      onChange(
         Object.values(LANGUAGES).find((language) => language.title === option)
            ?.key
      )
   }

   const languages = [
      {
         title: 'Кыргызский',
         value: 'Кыргызский',
         id: 'e1',
         action: changeOptionHandler,
      },
      {
         title: 'Русский',
         value: 'Русский',
         id: 'e2',
         action: changeOptionHandler,
      },
      {
         title: 'Английский',
         value: 'Английский',
         id: 'e3',
         action: changeOptionHandler,
      },
   ]
   return (
      <LanguageFieldContainer>
         <SelectLanguage onClick={openOptionsHandler}>
            <span>{selectedLanguage.title}</span>
            <ArrowDrop />
         </SelectLanguage>
         {isActive && (
            <PopUp
               options={languages}
               width="191px"
               onCloseBackDrop={() => setIsActive(false)}
            />
         )}
      </LanguageFieldContainer>
   )
}

const LanguageFieldContainer = styled.div`
   position: relative;
   width: 184px;
`
const SelectLanguage = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   border: 1px solid #c4c4c4;
   padding: 10px 18px;
   font-family: 'Open Sans';
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
   cursor: pointer;
`
