import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/Authorization/SignIn'
import { SignUpClient } from '../components/Authorization/SignUpClient'
import { DEFAULT_ROUTES } from '../utils/constants/routes'

export const GuestRoutes = () => {
   return (
      <Routes>
         <Route
            path={DEFAULT_ROUTES.INDEX.PATH}
            element={
               <>
                  <div>I`m Guest</div>
                  <SignIn />
                  <SignUpClient />
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
