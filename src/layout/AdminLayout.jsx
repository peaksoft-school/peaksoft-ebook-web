import styled from '@emotion/styled/macro'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../components/Admin/AdminHeader'
import { SideDrawer } from '../components/Admin/SideDrawer'

export const AdminLayout = () => {
   return (
      <AdminLayoutContainer>
         <SideDrawer />
         <ContentContainer>
            <AdminHeader />
            <Outlet />
         </ContentContainer>
      </AdminLayoutContainer>
   )
}

const AdminLayoutContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   position: absolute;
   top: 0;
   height: 100%;
   width: 100%;
`

const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 30px;
`
