import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/Authorization/SignIn'
import { SignUpClient } from '../components/Authorization/SignUpClient'
import { signInUser, signUpClient } from '../store/auth-slice'
import { DEFAULT_ROUTES } from '../utils/constants/routes'

export const GuestRoutes = () => {
   const dispatch = useDispatch()
   return (
      <Routes>
         <Route
            path={DEFAULT_ROUTES.INDEX.PATH}
            element={
               <>
                  <div>I`m Guest</div>
                  <SignIn onSubmit={(data) => dispatch(signInUser(data))} />
                  <SignUpClient
                     onSubmit={(data) => dispatch(signUpClient(data))}
                  />
               </>
            }
         />
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Not Found Page</div>}
         />
      </Routes>
   )
}
