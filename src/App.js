import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppRoutes } from './routes/AppRoutes'
import { LOCAL_STORAGE_USER_KEY } from './utils/constants/general'
import { localstorage } from './utils/helpers/general'

const App = () => {
   const { role, token, userName } = useSelector((state) => state.auth)

   useEffect(() => {
      if (token) {
         localstorage.save(LOCAL_STORAGE_USER_KEY, { token, role, userName })
      }
   }, [token, role, userName])

   return <AppRoutes />
}

export default App
