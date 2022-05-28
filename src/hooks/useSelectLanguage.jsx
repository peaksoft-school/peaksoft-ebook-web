import { useState } from 'react'
import { LANGUAGES } from '../utils/constants/general'

export const useSelectLanguage = () => {
   const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.RUSSIAN)
   const changeLanguageHandler = (language) => {
      setSelectedLanguage(language)
   }
   const resetLanguage = () => {
      setSelectedLanguage(LANGUAGES.RUSSIAN)
   }
   return {
      language: selectedLanguage,
      changeLanguage: changeLanguageHandler,
      resetLanguage,
   }
}
