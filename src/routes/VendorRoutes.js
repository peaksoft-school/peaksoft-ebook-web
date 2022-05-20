import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { VendorLayout } from '../layout/VendorLayout'
import { AddBook } from '../pages/Vendor/AddBook'
import { DEFAULT_ROUTES, VENDOR_ROUTES } from '../utils/constants/routes'

export const VendorRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<VendorLayout />}>
            <Route path={VENDOR_ROUTES.ADD_BOOK.PATH} element={<AddBook />} />
         </Route>
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
