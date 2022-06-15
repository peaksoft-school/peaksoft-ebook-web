import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClientPersonalProfile } from '../components/User/ClientPersonalProfile'
import { UserLayout } from '../layout/UserLayout'
import { CLIENT_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route
               path={CLIENT_ROUTES.CLIENT_PROFILE.PATH}
               element={<ClientPersonalProfile />}
            />
         </Route>
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
