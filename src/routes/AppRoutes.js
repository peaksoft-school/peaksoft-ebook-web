import React from 'react'
import { useSelector } from 'react-redux'
import { ROLES } from '../utils/constants/general'
import { AdminRoutes } from './AdminRoutes'
import { ClientRoutes } from './ClientRoutes'
import { GuestRoutes } from './GuestRoutes'
import { VendorRoutes } from './VendorRoutes'

export const AppRoutes = () => {
   const { isAuthorized, role } = useSelector((state) => state.auth)

   if (!isAuthorized) {
      return <GuestRoutes />
   }
   return (
      <>
         {role === ROLES.ADMIN && <AdminRoutes />}
         {role === ROLES.VENDOR && <VendorRoutes />}
         {role === ROLES.CLIENT && <ClientRoutes />}
      </>
   )
}
