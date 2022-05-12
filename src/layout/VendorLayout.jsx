import React from 'react'
import { VendorHeader } from '../components/Vendor/VendorHeader'

export const VendorLayout = ({ children }) => {
   return (
      <>
         <VendorHeader />
         {children}
      </>
   )
}
