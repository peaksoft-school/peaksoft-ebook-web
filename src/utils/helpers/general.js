import { store } from '../../store'

export const getTimeAsString = (seconds) => {
   const min = Math.floor(seconds / 60)
   const stringSec = String(seconds)
   const sec = Math.floor(seconds / 60 - min <= 0.15)
      ? `0${stringSec[stringSec.length - 1]}`
      : `${seconds - 60 * min}`
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
