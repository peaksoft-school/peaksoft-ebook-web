import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as FooterImg } from '../../../assets/images/FooterImg.svg'

export const LatestPublications = () => {
   return (
      <Container>
         <Nav>
            <h1>Последние публикации</h1>
            <StyledLink to="/filter-page">Смотреть все</StyledLink>
         </Nav>
         <Content>
            <Genres>
               <ul>
                  <li>Бизнес-литература</li>
                  <li>Детские книги</li>
                  <li>Хобби и досуг</li>
                  <li>Публицистика</li>
                  <li>Учебная литература</li>
                  <li>
                     <hr /> Поэзия
                  </li>
               </ul>
            </Genres>
            <BookContainer>
               <div>
                  <FooterImg />
               </div>
               <AboutBook>
                  <h4>История книги</h4>
                  <p>
                     Предлагаемый перевод является первой <br /> попыткой
                     обращения к творчеству Павла <br /> Орозия — римского
                     христианского историка <br /> начала V века, сподвижника{' '}
                     <br /> и современника знаменитого Августина Блаженн...
                  </p>
                  <Footer>
                     <p>Подробнее</p>
                     <span>456 с</span>
                  </Footer>
               </AboutBook>
            </BookContainer>
         </Content>
      </Container>
   )
}
const Container = styled.div`
   padding: 0 80px;
   display: flex;
   flex-direction: column;
   gap: 94px 0;
   min-height: 823px;
   width: 100%;
`
const BookContainer = styled.div`
   display: flex;
   gap: 0 88px;
   align-items: flex-end;
`

const Nav = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
      color: #f8f8f8;
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
const Content = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   gap: 0 150px;
`

const Genres = styled.div`
   ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px 0;
      color: #969696;
      li {
         cursor: pointer;
      }
      li:last-of-type {
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 0 14px;
         hr {
            height: 1px;
            width: 69px;
         }
      }
      width: 228px;
   }
`
const AboutBook = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 50px;
   margin-bottom: 100px;
   min-width: 305px;
   h4 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      text-transform: uppercase;
      color: #d1d1d1;
   }
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #d1d1d1;
   }
`
const Footer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-decoration-line: underline;
      color: #ff4c00;
      cursor: pointer;
   }
   span {
      color: #d1d1d1;
   }
`
