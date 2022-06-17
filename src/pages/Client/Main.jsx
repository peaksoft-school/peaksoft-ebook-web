import styled from '@emotion/styled/macro'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/Buttons/Button'
import { Input } from '../../components/UI/Inputs/Input'
import { getBooksInMain, userActions } from '../../store/user-slice'
import { theme } from '../../utils/constants/theme'
import backLine from '../../assets/icons/back-line.svg'
import { Top3Books } from '../../components/User/MainPage/Top3Books'
import { Bestsellers } from '../../components/User/MainPage/Bestsellers'
import { ElectronicBooks } from '../../components/User/MainPage/ElectronicBooks'
import { AudioBooks } from '../../components/User/MainPage/AudioBooks'
import { LatestPublications } from '../../components/User/MainPage/LatestPublications'

export const Main = () => {
   const { books } = useSelector((state) => state.user)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getBooksInMain())
      return () => dispatch(userActions.resetBook())
   }, [])

   return (
      <ParentContainer>
         <Top3BooksContainer>
            <Top3Books books={books?.top3} />
         </Top3BooksContainer>
         <Bestsellers bestsellers={books?.latestPublications} />
         <LatestPublicationsContainer>
            <LatestPublications />
         </LatestPublicationsContainer>
         <AudioBooks audioBooks={books?.audio} />
         <ElectronicBooks eBooks={books?.ebook} />

         <SubscribeToTheNewsletter>
            <h1>Подписаться на рассылку</h1>
            <div>
               <Input type="email" placeholder="Напишите ваш E-mail" />
               <Button
                  padding="10px 24px"
                  bgColor={theme.secondary.darkBackground}
                  fontSize="16px"
                  ling-height="21.79px"
                  bgColorHover="#484848"
                  bgColorActive={theme.secondary.orange}
               >
                  Отправить
               </Button>
            </div>
         </SubscribeToTheNewsletter>
         <SocialNetworks>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Bконтакте</span>
         </SocialNetworks>
      </ParentContainer>
   )
}

const ParentContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 150px 0;
`
const Top3BooksContainer = styled.section`
   background: #1c1c1c;
   background-image: url(${backLine});
   min-height: 720px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
`
const SubscribeToTheNewsletter = styled.div`
   display: flex;
   flex-direction: column;
   gap: 45px 0;
   padding: 0 175px;
   & h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
      color: #222222;
   }
   & div {
      display: flex;
      input {
         height: 100%;
      }
   }
`

const SocialNetworks = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   padding: 0 370px;
   margin-bottom: 150px;
   span {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 130%;
      color: #222222;
      cursor: pointer;
   }
`
const LatestPublicationsContainer = styled.div`
   background: #1c1c1c;
   min-height: 960px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
`
