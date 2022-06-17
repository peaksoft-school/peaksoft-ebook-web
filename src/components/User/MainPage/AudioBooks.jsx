import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

export const AudioBooks = ({ audioBooks }) => {
   const convertDurationAsText = (duration) => {
      return `${duration?.hour} ч. ${duration?.minute} мин. ${duration?.second} сек.`
   }
   return (
      <Container>
         <Nav>
            <h1>Аудиокниги</h1>
            <StyledLink to="/">Смотреть все</StyledLink>
         </Nav>
         <Content>
            <FlexBlock>
               <FirstImg>
                  <img
                     src={audioBooks[0]?.fileInformation.firstPhoto}
                     alt="img"
                  />
               </FirstImg>
               <h1>{audioBooks[0]?.title}</h1>
               <h5>{audioBooks[0]?.authorFullName}</h5>
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
                  />
               </SecondImg>
               <h1>{audioBooks[1]?.title}</h1>
               <h5>{audioBooks[1]?.authorFullName}</h5>
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
                  />
               </ThirdImg>
               <h1>{audioBooks[2]?.title}</h1>
               <h5>{audioBooks[2]?.authorFullName}</h5>
               <Footer>
                  <p>{convertDurationAsText(audioBooks[2]?.audioBook)}</p>
                  <span>{audioBooks[2]?.price || 0} с</span>
               </Footer>
            </FlexBlock>
         </Content>
      </Container>
   )
}
const Container = styled.div`
   padding: 0 80px;
   display: flex;
   flex-direction: column;
   min-height: 623px;
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
   margin-top: 45px;
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
   }
`
const FirstImg = styled.div`
   margin-top: 280px;
   img {
      width: 309px;
      height: 309px;
   }
`
const SecondImg = styled.div`
   margin-top: 110px;
   img {
      width: 441px;
      height: 441px;
   }
`
const ThirdImg = styled.div`
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
