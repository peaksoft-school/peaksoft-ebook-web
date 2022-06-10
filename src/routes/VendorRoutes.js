import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { OutlookOfBooks } from '../components/UI/AboutBook/OutlookOfBooks/OutlookOfBooks'
import { VendorLayout } from '../layout/VendorLayout'
import { VendorMainPage } from '../pages/Vendor/VendorMainPage/VendorMainPage'
import { VendorProfile } from '../pages/Vendor/VendorMainPage/VendorProfile'
import { VENDOR_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'
import { AddBook } from '../pages/Vendor/AddBook'

export const VendorRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<VendorLayout />}>
            <Route
               path=""
               element={<Navigate to={VENDOR_ROUTES.VENDOR_MAIN_PAGE.PATH} />}
            />
            <Route
               path={VENDOR_ROUTES.VENDOR_MAIN_PAGE.PATH}
               element={<VendorMainPage />}
            />
            <Route
               path={VENDOR_ROUTES.VENDOR_PROFILE.PATH}
               element={<VendorProfile />}
            />
            <Route
               path={VENDOR_ROUTES.VENDOR_ABOUT_BOOKS.PATH}
               element={<OutlookOfBooks />}
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
