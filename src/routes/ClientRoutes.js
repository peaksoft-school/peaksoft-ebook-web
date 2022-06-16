import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClientPersonalProfile } from '../components/User/ClientPersonalProfile'
import { UserLayout } from '../layout/UserLayout'
import { BecomeVendor } from '../components/User/BecomeVendor'
import {
   BECOME_VENDOR_ROUTES,
   CLIENT_ROUTES,
   DEFAULT_ROUTES,
} from '../utils/constants/routes'
import { ClientBasket } from '../pages/Client/ClientBasket'
import { ClientPromocode } from '../pages/Client/ClientPromocode'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route
               path={CLIENT_ROUTES.CLIENT_PROFILE.PATH}
               element={<ClientPersonalProfile />}
            />
            <Route
               path={CLIENT_ROUTES.CLIENT_BASKET.PATH}
               element={<ClientBasket />}
            />
            <Route
               path={CLIENT_ROUTES.CLIENT_PROMOCODE.PATH}
               element={<ClientPromocode />}
            />
         </Route>
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
