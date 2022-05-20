import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { VendorHeader } from '../components/Vendor/VendorHeader'

export const VendorLayout = () => {
   return (
      <>
         <VendorHeader />
         <Outlet />
         <Footer>IT IS FOOTER</Footer>
      </>
   )
}
const Footer = styled.footer`
   width: 1200px;
   margin: 0 auto;
   padding-top: 100px;
`
