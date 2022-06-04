import { useState } from 'react'
import { flushSync } from 'react-dom'

export const useUploadFile = () => {
   const [file, setFile] = useState({
      value: null,
      isLoading: false,
      isSuccess: false,
   })
   const uploadFile = ({ target: { files } }) => {
      flushSync(() => {
         setFile((prevFile) => {
            return {
               ...prevFile,
               isLoading: true,
            }
         })
      })
      setTimeout(() => {
         flushSync(() => {
            setFile({
               value: files[0],
               isLoading: false,
               isSuccess: true,
            })
         })
      }, 1000)
   }
   const resetFile = () => {
      setFile({
         value: null,
         isLoading: false,
         isSuccess: false,
      })
   }
   return [file, uploadFile, resetFile]
}
