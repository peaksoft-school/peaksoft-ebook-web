import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/Authorization/SignIn'
import { SignUpClient } from '../components/Authorization/SignUpClient'
import { SignUpVendor } from '../components/Authorization/SignUpVendor'
import { UserLayout } from '../layout/UserLayout'
import { BecomeVendor } from '../pages/Client/BecomeVendor'
import { Main } from '../pages/Client/Main'
import { signInUser, signUpClient, signUpVendor } from '../store/auth-slice'
import { DEFAULT_ROUTES } from '../utils/constants/routes'

export const GuestRoutes = () => {
   const dispatch = useDispatch()
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route
               path=""
               element={
                  <>
                     <Main />
                     <SignIn onSubmit={(data) => dispatch(signInUser(data))} />
                     <SignUpClient
                        onSubmit={(data) => dispatch(signUpClient(data))}
                     />
                     <SignUpVendor
                        onSubmit={(data) => dispatch(signUpVendor(data))}
                     />
                  </>
               }
            />
         </Route>
         <Route
            path={DEFAULT_ROUTES.BECOME_VENDOR.PATH}
            element={<BecomeVendor />}
         />
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Not Found Page</div>}
         />
      </Routes>
   )
}
