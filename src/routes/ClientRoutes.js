import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layout/UserLayout'
import { ClientBasket } from '../pages/Client/ClientBasket'
import { CLIENT_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route
               path={CLIENT_ROUTES.CLIENT_BASKET.PATH}
               element={<ClientBasket />}
            />
         </Route>
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
