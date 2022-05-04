import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorNotification } from '../components/UI/Notification/ErrorNotification'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="*" element={<ErrorNotification />} />
      </Routes>
   )
}
