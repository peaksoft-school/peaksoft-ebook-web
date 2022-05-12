import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserHeader } from '../components/User/UserHeader'

export const UserLayout = () => {
   return (
      <>
         <UserHeader countOfItems={0} />
         <Outlet />
      </>
   )
}
