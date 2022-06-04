import { SERVER_BASE_URL } from '../utils/constants/general'
import { getJwt } from '../utils/helpers/general'

export const appFetch = async (options, responseOption) => {
   const token = getJwt()
   try {
      const { path, body, method, params } = options
      const requestOptions = {
         method: method || 'GET',
         headers: token
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
              }
            : { 'Content-Type': 'application/json' },
      }
      if (method !== 'GET') {
         requestOptions.body = JSON.stringify(body || {})
      }
      if (params) {
         const queryParamsStringValue = Object.keys(params)
            .map((paramKey) => `${paramKey}=${params[paramKey]}`)
            .join('&')
         const path = `${path}?${queryParamsStringValue}`
      }
      const response = await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)
      console.log(responseOption)
      const result = responseOption?.asText
         ? await response.text()
         : await response.json()

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
