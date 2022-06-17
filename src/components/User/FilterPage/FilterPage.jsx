import styled from '@emotion/styled'
import React from 'react'
import { FilterPageHeader } from './FilterPageHeader'
import { FilterSection } from './FilterSection'
import { ListOfUserCards } from './ListOfUserCards'

export const FilterPage = () => {
   return (
      <FilterPageContainer>
         <FilterPageHeader />
         <MainContentFilterPage>
            <FilterSection />
            <ListOfUserCards />
         </MainContentFilterPage>
      </FilterPageContainer>
   )
}

const FilterPageContainer = styled.div`
   margin: 40px;
`
const MainContentFilterPage = styled.div`
   display: flex;
   align-items: center;
`
