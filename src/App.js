import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './routes/AppRoutes'
import { LOCAL_STORAGE_USER_KEY } from './utils/constants/general'
import { localstorage } from './utils/helpers/general'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
   const { role, token, userName } = useSelector((state) => state.auth)
   useEffect(() => {
      if (token) {
         localstorage.save(LOCAL_STORAGE_USER_KEY, { token, role, userName })
      }
   }, [token, role, userName])
   return (
      <>
         <StyledToastContainer
            position="top-center"
            autoClose={1000}
            closeOnClick
            hideProgressBar
         />
         <AppRoutes />
      </>
   )
}

export default App

const StyledToastContainer = styled(ToastContainer)`
   position: fixed;
   z-index: 999;
   top: 20%;
   right: 50%;
   transform: translate(-50%, -50%);
   .Toastify__bounce-enter--top-center {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 0;
      width: fit-content;
   }
   .Toastify__close-button {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 5px;
   }
   .Toastify__close-button svg {
      width: 18px;
   }
`
