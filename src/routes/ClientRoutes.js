import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BECOME_VENDOR_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'
import { UserLayout } from '../layout/UserLayout'
import { BecomeVendor } from '../components/User/BecomeVendor'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route
            path={DEFAULT_ROUTES.INDEX.PATH}
            element={
               <div>
                  <UserLayout />
               </div>
            }
         />
         <Route
            path={BECOME_VENDOR_ROUTES.BECOME_VENDOR.PATH}
            element={<BecomeVendor />}
         />
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
