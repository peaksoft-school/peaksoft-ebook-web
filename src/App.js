import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { localstorage } from './utils/helpers/general'

const App = () => {
   const { role, isAuth, token, userName } = useSelector((state) => state.auth)

   const [searchParams, setSearchParams] = useSearchParams()

   useEffect(() => {
      if (token) {
         localstorage.save('user', { token, role, userName })
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
