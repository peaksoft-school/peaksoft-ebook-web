import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchInput } from '../components/UI/SearchInput/SearchInput'

const books = [
   {
      id: 'e1',
      nameOfBook: 'Harry Potter',
   },
   {
      id: 'e2',
      nameOfBook: 'Harry Potter',
   },
   {
      id: 'e3',
      nameOfBook: 'Harry Potter',
   },
   {
      id: 'e4',
      nameOfBook: 'Harry Potter',
   },
]

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="*" element={<SearchInput booksList={books} />} />
      </Routes>
   )
}
