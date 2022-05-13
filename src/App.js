import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { LOCAL_STORAGE_USER_KEY } from './utils/constants/general'
import { localstorage } from './utils/helpers/general'

const App = () => {
   const { role, isAuth, token, userName } = useSelector((state) => state.auth)

   const [searchParams, setSearchParams] = useSearchParams()

   useEffect(() => {
      if (token) {
         localstorage.save(LOCAL_STORAGE_USER_KEY, { token, role, userName })
      }
   }, [token, role, userName])

   useEffect(() => {
      if (isAuth && searchParams.get('sign-in')) {
         setSearchParams('')
      }
   }, [isAuth, searchParams])

   return <AppRoutes />
}

export default App
