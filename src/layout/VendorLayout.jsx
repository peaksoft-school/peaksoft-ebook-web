import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { VendorFooter } from '../components/Vendor/VendorFooter'
import { VendorHeader } from '../components/Vendor/VendorHeader'

export const VendorLayout = () => {
   const [height, setHeight] = useState(window.innerHeight)

   useEffect(() => {
      const updateWindowDimensions = () => {
         const newHeight = window.innerHeight
         setHeight(newHeight)
      }
      window.addEventListener('resize', updateWindowDimensions)

      return () => window.removeEventListener('resize', updateWindowDimensions)
   }, [])

   return (
      <Layout height={height}>
         <VendorHeader />
         <main>
            <Outlet />
         </main>
         <VendorFooter />
      </Layout>
   )
}

const Layout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: stretch;
   main {
      flex-grow: 1;
      flex-shrink: 0;
      min-height: ${({ height }) => `${height}px`};
   }
`
