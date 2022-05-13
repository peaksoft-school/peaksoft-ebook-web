import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ADMIN_ROUTES, DEFAULT_ROUTES } from '../utils/constants/routes'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path={DEFAULT_ROUTES.INDEX.PATH}
            element={<Navigate to={ADMIN_ROUTES.APPLICATIONS.PATH} />}
         />
         <Route
            path={ADMIN_ROUTES.APPLICATIONS.PATH}
            element={<div>Заявки</div>}
         />
         <Route
            path={ADMIN_ROUTES.VENDORS.PATH}
            element={<div>Продавцы</div>}
         />
         <Route
            path={ADMIN_ROUTES.USERS.PATH}
            element={<div>Пользователи</div>}
         />
         <Route path={ADMIN_ROUTES.BOOKS.PATH} element={<div>Книги</div>} />
         <Route
            path={DEFAULT_ROUTES.NOT_FOUND.PATH}
            element={<div>Страница не найдена</div>}
         />
      </Routes>
   )
}
