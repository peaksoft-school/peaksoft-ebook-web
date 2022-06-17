import styled from '@emotion/styled'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as NewBook } from '../../../assets/icons/new-book.svg'

export const AudioBooks = ({ audioBooks }) => {
   const navigate = useNavigate()
   const convertDurationAsText = (duration) => {
      return `${duration?.hour || 0} ч. ${duration?.minute || 0} мин. ${
         duration?.second || 0
      } сек.`
   }
   const passToBookInnerPage = (id) => {
      navigate(`/${id}`)
   }
   return (
      <Container id="audiobooks">
         <Nav>
            <h1>Аудиокниги</h1>
            <StyledLink to="/filter-page">Смотреть все</StyledLink>
         </Nav>
         <Content>
            <FlexBlock>
               <FirstImg>
                  <img
                     src={audioBooks[0]?.fileInformation.firstPhoto}
                     alt="img"
                     onClick={() => passToBookInnerPage(audioBooks[0]?.bookId)}
                  />
                  {audioBooks[0]?.isNew && <NewBookSticker />}
               </FirstImg>
               <h1>{audioBooks[0]?.title || 'Название книги'}</h1>
               <h5>{audioBooks[0]?.authorFullName || 'Автор книги'}</h5>
               <Footer>
                  <p>{convertDurationAsText(audioBooks[0]?.audioBook)}</p>
                  <span>{audioBooks[0]?.price || 0} с</span>
               </Footer>
            </FlexBlock>
            <FlexBlock>
               <SecondImg>
                  <img
                     src={audioBooks[1]?.fileInformation.firstPhoto}
                     alt="img"
                     onClick={() => passToBookInnerPage(audioBooks[1]?.bookId)}
                  />
                  {audioBooks[1]?.isNew && <NewBookSticker />}
               </SecondImg>
               <h1>{audioBooks[1]?.title || 'Название книги'}</h1>
               <h5>{audioBooks[1]?.authorFullName || 'Автор книги'}</h5>
               <Footer>
                  <p>{convertDurationAsText(audioBooks[1]?.audioBook)}</p>
                  <span>{audioBooks[1]?.price || 0}с</span>
               </Footer>
            </FlexBlock>
            <FlexBlock>
               <ThirdImg>
                  <img
                     src={audioBooks[2]?.fileInformation.firstPhoto}
                     alt="img"
                     onClick={() => passToBookInnerPage(audioBooks[2]?.bookId)}
                  />
                  {audioBooks[2]?.isNew && <NewBookSticker />}
               </ThirdImg>
               <h1>{audioBooks[2]?.title || 'Название книги'}</h1>
               <h5>{audioBooks[2]?.authorFullName || 'Автор книги'}</h5>
               <Footer>
                  <p>{convertDurationAsText(audioBooks[2]?.audioBook)}</p>
                  <span>{audioBooks[2]?.price || 0} с</span>
               </Footer>
            </FlexBlock>
         </Content>
      </Container>
   )
}
const Container = styled.section`
   padding: 0 80px;
   display: flex;
   flex-direction: column;
   min-height: 623px;
   width: 100%;
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
const Content = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 35px;
   h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: #222222;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
   }
   h5 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #343434;
   }
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #8c8c8c;
   }
   img {
      object-fit: cover;
      object-position: top;
      cursor: pointer;
   }
`
const FirstImg = styled.div`
   margin-top: 280px;
   position: relative;
   img {
      width: 309px;
      height: 309px;
   }
`
const SecondImg = styled.div`
   margin-top: 110px;
   position: relative;

   img {
      width: 441px;
      height: 441px;
   }
`
const ThirdImg = styled.div`
   position: relative;
   img {
      width: 344px;
      height: 305px;
   }
`
const Footer = styled.div`
   display: flex;
   justify-content: space-between;
`
const FlexBlock = styled.div`
   display: flex;
   flex-direction: column;
   gap: 7px;
`
const NewBookSticker = styled(NewBook)`
   position: absolute;
   right: -103px;
   top: 15px;
   z-index: 2;
`
