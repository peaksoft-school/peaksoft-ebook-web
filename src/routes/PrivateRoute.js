import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = ({ when, to }) => {
   return when ? <Outlet /> : <Navigate to={to} />
}
