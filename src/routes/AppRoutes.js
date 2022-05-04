import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="*" element={<div>Hello World</div>} />
      </Routes>
   )
}
