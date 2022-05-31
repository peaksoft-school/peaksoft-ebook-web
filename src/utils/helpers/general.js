import { store } from '../../store'

export const padTo2Digits = (value) => {
   return value.toString().padStart(2, '0')
}
export const formatDate = {
   DD_MM_YYYY: (date) => {
      return [
         padTo2Digits(date.getDate()),
         padTo2Digits(date.getMonth() + 1),
         date.getFullYear(),
      ].join('/')
   },
   YYYY_MM_DD: (date) => {
      return [
         date.getFullYear(),
         padTo2Digits(date.getMonth() + 1),
         padTo2Digits(date.getDate()),
      ].join('-')
   },
}
export const getTimeAsString = (seconds) => {
   const min = padTo2Digits(Math.floor(seconds / 60))
   const sec = padTo2Digits(seconds - 60 * min)
   return `${min} : ${sec}`
}
export const localstorage = {
   save(key, value) {
      return localStorage.setItem(key, JSON.stringify(value))
   },
   get(key) {
      return JSON.parse(localStorage.getItem(key))
   },
   remove(key) {
      return localStorage.removeItem(key)
   },
   clear() {
      return localStorage.clear()
   },
}

export const getJwt = () => {
   return store.getState().auth.token
}

export const discountOptions = (setDiscount) => {
   return {
      onChange: ({ target: { value } }) => {
         if (value <= 100 && value.length <= 6 && value >= 0) {
            setDiscount(value)
         }
      },
      setValueAs: (v) => Number(v),
   }
}
