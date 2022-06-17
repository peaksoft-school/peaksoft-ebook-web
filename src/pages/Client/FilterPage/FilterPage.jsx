import styled from '@emotion/styled'
import React from 'react'

import { FilterSection } from './FilterSection'
import { ListOfUserCards } from './ListOfUserCards'

export const FilterPage = () => {
   return (
      <FilterPageContainer>
         <FilterSection />
         <MainContentFilterPage>
            <ListOfUserCards />
         </MainContentFilterPage>
      </FilterPageContainer>
   )
}

const FilterPageContainer = styled.div`
   margin: 0 auto;
   display: flex;
   padding: 0 80px;
`
const MainContentFilterPage = styled.div`
   display: flex;
   align-items: center;
`
