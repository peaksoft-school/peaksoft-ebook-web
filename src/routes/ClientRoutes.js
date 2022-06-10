import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DEFAULT_ROUTES } from '../utils/constants/routes'
import { UserLayout } from '../layout/UserLayout'

export const ClientRoutes = () => {
   return (
      <Routes>
         <Route
            path={DEFAULT_ROUTES.INDEX.PATH}
            element={
               <div>
                  <UserLayout />
               </div>
            }
         />

         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
