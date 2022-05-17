import styled from '@emotion/styled/macro'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserHeader } from '../components/User/UserHeader'

export const UserLayout = () => {
   return (
      <>
         <UserHeader countOfItems={0} />
         <ContentContainer>
            <Outlet />
         </ContentContainer>
      </>
   )
}

const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 170px 0 0 95px;
`
