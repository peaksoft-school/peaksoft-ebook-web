import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DEFAULT_ROUTES } from '../utils/constants/routes'

export const VendorRoutes = () => {
   return (
      <Routes>
         <Route
            path={DEFAULT_ROUTES.INDEX.PATH}
            element={<div>Главная Страница Вендора</div>}
         />
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
