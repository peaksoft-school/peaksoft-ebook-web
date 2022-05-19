import styled from '@emotion/styled'
import React from 'react'
import { ReactComponent as NewBook } from '../../../../assets/icons/new-book.svg'

export const OutlookOfBooks = ({ main, second, isNew }) => {
   return (
      <OutlookOfBooksContainer>
         <MainImageOfBook url={main}>
            {isNew && <NewBookSticker />}
         </MainImageOfBook>
         <SecondImageOfBook url={second} />
      </OutlookOfBooksContainer>
   )
}

const OutlookOfBooksContainer = styled.div`
   width: 578px;
   height: 571px;
   display: flex;
   justify-content: space-between;
`

const MainImageOfBook = styled.div`
   height: 100%;
   width: 357px;
   background: ${({ url }) => `url(${url})`} no-repeat center;
   background-size: cover;
   position: relative;
`
const NewBookSticker = styled(NewBook)`
   position: absolute;
   right: -103px;
   bottom: 32px;
`
const SecondImageOfBook = styled.div`
   width: 201px;
   height: 321px;
   background: ${({ url }) => `url(${url})`} no-repeat center;
   background-size: cover;
`
