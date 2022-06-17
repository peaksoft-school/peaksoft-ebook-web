import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClientPersonalProfile } from '../components/User/ClientPersonalProfile'
import { UserLayout } from '../layout/UserLayout'
import { CLIENT_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'
import { Main } from '../pages/Client/Main'
import { BecomeVendor } from '../pages/Client/BecomeVendor'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route path="" element={<Main />} />
            <Route
               path={CLIENT_ROUTES.PROFILE.PATH}
               element={<ClientPersonalProfile />}
            />
         </Route>
         <Route
            path={DEFAULT_ROUTES.BECOME_VENDOR.PATH}
            element={<BecomeVendor />}
         />
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
