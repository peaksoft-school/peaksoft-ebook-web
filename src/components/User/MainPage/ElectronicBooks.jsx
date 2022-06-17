import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { AboutBookWithSlider } from './AboutBookWithSlider'

export const ElectronicBooks = ({ eBooks }) => {
   return (
      <Container id="electronicbooks">
         <Nav>
            <h1>Электронные книги</h1>
            <StyledLink to="/">Смотреть все</StyledLink>
         </Nav>
         <AboutBookWithSlider books={eBooks} />
      </Container>
   )
}

const Container = styled.section`
   padding: 0 80px;
   display: flex;
   flex-direction: column;
   gap: 94px 0;
   min-height: 623px;
`

const Nav = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 25px;
   h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
      color: #1c1c1c;
   }
`
const StyledLink = styled(Link)`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-decoration-line: underline;
   color: #ff4c00;
`
