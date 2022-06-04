import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { VendorHeader } from '../components/Vendor/VendorHeader'

export const VendorLayout = () => {
   return (
      <div>
         <VendorHeader />
         <VendorLayoutConteiner>
            <VendorContentConteiner>
               <Outlet />
            </VendorContentConteiner>
         </VendorLayoutConteiner>
      </div>
   )
}

const VendorLayoutConteiner = styled.div`
   display: flex;
   justify-content: center;
`
const VendorContentConteiner = styled.div`
   width: 1440px;
   padding: 210px 60px 0 60px;
`
