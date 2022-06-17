import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layout/UserLayout'
import { CLIENT_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'
import { Main } from '../pages/Client/Main'
import { ClientBasket } from '../pages/Client/ClientBasket'
import { ClientPromocode } from '../pages/Client/ClientPromocode'
import { ClientPersonalProfile } from '../pages/Client/ClientPersonalProfile'
import { BecomeVendor } from '../pages/Client/BecomeVendor'
import { FilterPage } from '../pages/Client/FilterPage/FilterPage'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route path="" element={<Main />} />
            <Route
               path={CLIENT_ROUTES.PROFILE.PATH}
               element={<ClientPersonalProfile />}
            />
            <Route
               path={CLIENT_ROUTES.FILTER_PAGE.PATH}
               element={<FilterPage />}
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
