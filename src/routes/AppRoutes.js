import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchInput } from '../components/UI/SearchInput'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="*" element={<SearchInput />} />
      </Routes>
   )
}
