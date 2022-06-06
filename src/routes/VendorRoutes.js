import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { VendorLayout } from '../layout/VendorLayout'
import { AddBook } from '../pages/Vendor/AddBook'
import { VendorBookInnerPage } from '../pages/Vendor/VendorBookInnerPage'
import { DEFAULT_ROUTES, VENDOR_ROUTES } from '../utils/constants/routes'

export const VendorRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<VendorLayout />}>
            <Route path={VENDOR_ROUTES.ADD_BOOK.PATH} element={<AddBook />} />
            <Route
               path={VENDOR_ROUTES.BOOK_INNER_PAGE.PATH}
               element={<VendorBookInnerPage />}
            />
         </Route>
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
