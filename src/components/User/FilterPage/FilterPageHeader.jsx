import { Breadcrumbs, Typography } from '@mui/material'
import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../../../utils/constants/theme'
import vector from '../../../assets/icons/vector.svg'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'

export const FilterPageHeader = () => {
   return (
      <div>
         <Breadcrumbs>
            <Link to="/">Главная</Link>
            <Typography color={theme.primary.black}>Психология</Typography>
         </Breadcrumbs>
         <FilterPageHeaderContainer>
            <FoundBooks>Найдены 2344 книг</FoundBooks>
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
         </FilterPageHeaderContainer>
      </div>
   )
}

const FilterPageHeaderContainer = styled.div`
   width: 1200px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const FoundBooks = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #969696;
`
const BreadCrambsContainer = styled.div`
   display: flex;
   align-items: center;
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
