import styled from '@emotion/styled/macro'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserHeader } from '../components/User/UserHeader'

export const UserLayout = () => {
   return (
      <UsersLayout>
         <UserHeader countOfItems={0} />
         <ContentContainer>
            <Outlet />
         </ContentContainer>
      </UsersLayout>
   )
}

const UsersLayout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: stretch;
`
const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   flex-grow: 1;
   flex-shrink: 0;
   min-height: 100vh;
   padding: 170px 0 0 95px;
`
