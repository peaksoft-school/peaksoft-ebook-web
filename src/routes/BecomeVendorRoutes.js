import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BecomeVendor } from '../components/User/BecomeVendor'
import { BECOME_VENDOR_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'

export const BecomeVendorRoutes = () => {
   return (
      <Routes>
         <Route
            path={BECOME_VENDOR_ROUTES.BECOMEVENDOR.PATH}
            element={<BecomeVendor />}
         >
            {/* <div></div> */}
         </Route>

         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
