import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { VendorLayout } from '../layout/VendorLayout'
import { VendorMainPage } from '../pages/Vendor/VendorMainPage/VendorMainPage'
import { VendorProfile } from '../pages/Vendor/VendorMainPage/VendorProfile'
import { VENDOR_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'
import { AddBook } from '../pages/Vendor/AddBook'
import { VendorBookInnerPage } from '../pages/Vendor/VendorBookInnerPage'

export const VendorRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<VendorLayout />}>
            <Route path="" element={<VendorMainPage />} />
            <Route
               path={VENDOR_ROUTES.BOOK_INNER_PAGE.PATH}
               element={<VendorBookInnerPage />}
            />
            <Route
               path={VENDOR_ROUTES.VENDOR_PROFILE.PATH}
               element={<VendorProfile />}
            />
            <Route path={VENDOR_ROUTES.ADD_BOOK.PATH} element={<AddBook />} />
         </Route>
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
