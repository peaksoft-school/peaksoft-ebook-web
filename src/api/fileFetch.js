import { SERVER_BASE_URL } from '../utils/constants/general'
import { getJwt } from '../utils/helpers/general'

export const fileFetch = async (options) => {
   const token = getJwt()
   try {
      const { path, body, method } = options

      const requestOptions = {
         method: method || 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
         body: body || {},
      }
      const response = await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)

      const result = await response.json()
      if (!response.ok) {
         let errorMessage = 'Something went wrong'
         if (result && result.message) {
            errorMessage = result.message
         }
         throw new Error(errorMessage)
      }
      return result
   } catch (e) {
      throw new Error(e.message)
   }
}
