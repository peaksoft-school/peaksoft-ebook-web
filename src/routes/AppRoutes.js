import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorModal } from '../components/UI/Modals/ErrorModal'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="*" element={<ErrorModal isOpen />} />
      </Routes>
   )
}
