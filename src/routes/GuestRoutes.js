import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/Authorization/SignIn'
import { SignUpClient } from '../components/Authorization/SignUpClient'
import { SignUpVendor } from '../components/Authorization/SignUpVendor'
import { UserLayout } from '../layout/UserLayout'
import { BecomeVendor } from '../pages/Client/BecomeVendor'
import { ClientBookInnerPage } from '../pages/Client/ClientBookInnerPage'
import { ClientPromocode } from '../pages/Client/ClientPromocode'
import { FilterPage } from '../pages/Client/FilterPage/FilterPage'
import { Main } from '../pages/Client/Main'
import { signInUser, signUpClient, signUpVendor } from '../store/auth-slice'
import { CLIENT_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'

export const GuestRoutes = () => {
   const dispatch = useDispatch()
   const renderAuthModals = () => {
      return (
         <>
            <SignIn onSubmit={(data) => dispatch(signInUser(data))} />
            <SignUpClient onSubmit={(data) => dispatch(signUpClient(data))} />
            <SignUpVendor onSubmit={(data) => dispatch(signUpVendor(data))} />
         </>
      )
   }
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route
               path=""
               element={
                  <>
                     <Main />
                     {renderAuthModals()}
                  </>
               }
            />
            <Route
               path={CLIENT_ROUTES.FILTER_PAGE.PATH}
               element={
                  <>
                     <FilterPage />
                     {renderAuthModals()}
                  </>
               }
            />
            <Route
               path={CLIENT_ROUTES.CLIENT_PROMOCODE.PATH}
               element={
                  <>
                     <ClientPromocode />
                     {renderAuthModals()}
                  </>
               }
            />
            <Route
               path={CLIENT_ROUTES.BOOK_INNER_PAGE.PATH}
               element={
                  <>
                     <ClientBookInnerPage />
                     {renderAuthModals()}
                  </>
               }
            />
         </Route>
         <Route
            path={DEFAULT_ROUTES.BECOME_VENDOR.PATH}
            element={
               <>
                  <BecomeVendor /> {renderAuthModals()}
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
