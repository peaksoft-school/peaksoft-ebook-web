import styled from '@emotion/styled'
import React from 'react'
import { UserBookCard } from '../../../components/UI/Card/UserBookCard'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import vector from '../../../assets/icons/vector.svg'

export const ListOfUserCards = () => {
   return (
      <ListOfUserCardsContainer>
         <SortContainer>
            <BreadCrambsContainer>
               <BreadCrambs>
                  <p>Зарубежная литература</p>
                  <img src={vector} alt="x" />
               </BreadCrambs>
               <BreadCrambs>
                  <p>Русский язык</p>
                  <img src={vector} alt="x" />
               </BreadCrambs>
            </BreadCrambsContainer>
            <OptionContainer>
               <p>Сортировать</p>
               <ArrowDownIcon />
            </OptionContainer>
         </SortContainer>
         <div>
            <UserBookCard />
            {/* <UserBookCard />
            <UserBookCard />
            <UserBookCard />
            <UserBookCard />
            <UserBookCard />
            <UserBookCard />
            <UserBookCard /> */}
         </div>
      </ListOfUserCardsContainer>
   )
}

const SortContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const ListOfUserCardsContainer = styled.div`
   /* display: flex;
   justify-content: space-between;
   padding-top: 20px;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-gap: 4rem;
   padding-bottom: 70px; */
`
const BreadCrambs = styled.div`
   display: flex;
   background: #f8f8f8;
   margin: 20px;
   padding: 10px 24px;
   border: 1px solid #c4c4c4;
   align-items: center;
   img {
      width: 9px;
      height: 9px;
      margin-left: 15px;
   }
`
const BreadCrambsContainer = styled.div`
   display: flex;
   align-items: center;
`
const OptionContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      margin-right: 12px;
   }
`
