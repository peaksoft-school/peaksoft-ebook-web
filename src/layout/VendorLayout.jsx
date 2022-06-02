import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { VendorFooter } from '../components/Vendor/VendorFooter'
import { VendorHeader } from '../components/Vendor/VendorHeader'

export const VendorLayout = () => {
   return (
      <Layout>
         <VendorHeader />
         <main>
            <Outlet />
         </main>
         <VendorFooter />
      </Layout>
   )
}

const Layout = styled.div`
   min-height: 100%;
   display: flex;
   flex-direction: column;
   align-items: stretch;
   main {
      flex-grow: 1;
      flex-shrink: 0;
   }
`
