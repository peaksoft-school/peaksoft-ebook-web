import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layout/UserLayout'
import { Main } from '../pages/Client/Main'
import { DEFAULT_ROUTES } from '../utils/constants/routes'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<UserLayout />}>
            <Route path="" element={<Main />} />
         </Route>
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
