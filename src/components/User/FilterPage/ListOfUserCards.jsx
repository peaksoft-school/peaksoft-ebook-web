import styled from '@emotion/styled'
import React from 'react'
import { UserBookCard } from '../../UI/Card/UserBookCard'

export const ListOfUserCards = () => {
   return (
      <ListOfUserCardsContainer>
         <UserBookCard />
         <UserBookCard />
         <UserBookCard />
         <UserBookCard />
         <UserBookCard />
         <UserBookCard />
         <UserBookCard />
         <UserBookCard />
      </ListOfUserCardsContainer>
   )
}

const ListOfUserCardsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 20px;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-gap: 4rem;
   padding-bottom: 70px;
`
