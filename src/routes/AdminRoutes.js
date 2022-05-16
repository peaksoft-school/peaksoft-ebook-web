import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { Vendors } from '../pages/Admin/VendorSection/Vendors'
import { VendorBooks } from '../pages/Admin/VendorSection/VendorBooks'
import { VendorDetails } from '../pages/Admin/VendorSection/VendorDetails'
import { VendorProfile } from '../pages/Admin/VendorSection/VendorProfile'
import { ADMIN_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<AdminLayout />}>
            <Route
               path={DEFAULT_ROUTES.INDEX.PATH}
               element={<Navigate to={ADMIN_ROUTES.APPLICATIONS.PATH} />}
            />
            <Route
               path={ADMIN_ROUTES.APPLICATIONS.PATH}
               element={<div>Заявки</div>}
            />
            <Route path={ADMIN_ROUTES.VENDORS.PATH} element={<Vendors />} />
            <Route
               path={ADMIN_ROUTES.VENDORS_DETAILS.PATH}
               element={<VendorDetails />}
            >
               <Route
                  path={ADMIN_ROUTES.VENDORS_DETAILS.PATH}
                  element={<Navigate to={ADMIN_ROUTES.VENDORS.PATH} />}
               />
               <Route
                  path={ADMIN_ROUTES.VENDORS_PROFILE.PATH}
                  element={<VendorProfile />}
               />
               <Route
                  path={ADMIN_ROUTES.VENDORS_BOOKS.PATH}
                  element={<VendorBooks countOfBooks={0} />}
               />
            </Route>
            <Route
               path={ADMIN_ROUTES.USERS.PATH}
               element={<div>Пользователи</div>}
            />
            <Route path={ADMIN_ROUTES.BOOKS.PATH} element={<div>Книги</div>} />
            <Route
               path={DEFAULT_ROUTES.NOT_FOUND.PATH}
               element={<div>Страница не найдена</div>}
            />
         </Route>
      </Routes>
   )
}
