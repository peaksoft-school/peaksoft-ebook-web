import styled from '@emotion/styled'
import React from 'react'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import { Button } from '../../UI/Buttons/Button'
import { Checkbox } from '../../UI/Checkbox/Checkbox'
import { RadioButton } from '../../UI/RadioButton/RadioButton'
import { SearchInput } from '../../UI/SearchInput/SearchInput'

export const FilterSection = () => {
   const bookList = []
   return (
      <FilterSectionContainer>
         <OptionContainer>
            <p>Жанры</p>
            <ArrowDownIcon />
         </OptionContainer>
         <hr />
         <FilterTypeContainer>
            <SearchInputContainer>
               <SearchInput booksList={bookList} />
            </SearchInputContainer>
            <FilterType>
               <Checkbox />
               <p>Зарубежная литература</p>
            </FilterType>
            <FilterType>
               <Checkbox />
               <p>Зарубежная литература</p>
            </FilterType>
            <FilterType>
               <Checkbox />
               <p>Зарубежная литература</p>
            </FilterType>
            <FilterType>
               <Checkbox />
               <p>Зарубежная литература</p>
            </FilterType>
            <FilterType>
               <Checkbox />
               <p>Зарубежная литература</p>
            </FilterType>
         </FilterTypeContainer>
         <div>
            <OptionContainer>
               <p>Тип</p>
               <ArrowDownIcon />
            </OptionContainer>
            <hr />
            <FilterType>
               <RadioButton />
               <p>Бумажная книга</p>
            </FilterType>
            <FilterType>
               <RadioButton />
               <p>Аудиокнига</p>
            </FilterType>
            <FilterType>
               <RadioButton />
               <p>Электронная книга</p>
            </FilterType>
         </div>
         <div>
            <OptionContainer>
               <p>Стоимость</p>
               <ArrowDownIcon />
            </OptionContainer>
            <hr />
            <PriceContainer>
               <Button> от 500</Button>
               <Button>от 500</Button>
            </PriceContainer>
         </div>
         <div>
            <OptionContainer>
               <p>Язык издания</p>
               <ArrowDownIcon />
            </OptionContainer>
            <hr />
            <FilterType>
               <Checkbox />
               <p>Кыргызский язык</p>
            </FilterType>
            <FilterType>
               <Checkbox />
               <p>Русский язык</p>
            </FilterType>
            <FilterType>
               <Checkbox />
               <p>Английский язык</p>
            </FilterType>
         </div>
      </FilterSectionContainer>
   )
}

const FilterSectionContainer = styled.div`
   width: 236px;
`
const OptionContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0 8px 0;
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
   }
`
const SearchInputContainer = styled.div`
   margin-top: 15px;
`
const FilterTypeContainer = styled.div``
const FilterType = styled.div`
   display: flex;
   align-items: center;
   margin-top: 15px;
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      margin-left: 30px;
   }
`
const PriceContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   button {
      width: 123px;
      height: 37px;
      background: white;
      color: black;
      border: 1px solid #c4c4c4;
   }
`
