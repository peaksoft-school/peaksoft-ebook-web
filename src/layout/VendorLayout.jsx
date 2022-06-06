import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { VendorFooter } from '../components/Vendor/VendorFooter'
import { VendorHeader } from '../components/Vendor/VendorHeader'

export const VendorLayout = () => {
   return (
      <Layout>
         <VendorHeader />
         <Content>
            <Outlet />
         </Content>
         <VendorFooter />
      </Layout>
   )
}

const Layout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: stretch;
`

const Content = styled.main`
   flex-grow: 1;
   flex-shrink: 0;
   min-height: 100vh;
   padding: 43px 80px 50px 80px;
`
