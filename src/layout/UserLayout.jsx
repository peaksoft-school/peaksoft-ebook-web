import styled from '@emotion/styled/macro'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserFooter } from '../components/User/UserFooter'
import { UserHeader } from '../components/User/UserHeader'

export const UserLayout = () => {
   return (
      <Layout>
         <UserHeader />
         <Content>
            <Outlet />
         </Content>
         <UserFooter />
      </Layout>
   )
}
const Layout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: stretch;
   width: 100%;
`

const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   min-height: 100vh;
`
