/* eslint-disable no-irregular-whitespace */
import styled from '@emotion/styled'
import React, { useState } from 'react'

export const DescriptionOfBook = ({
   aboutBook,
   fragmentOfBook,
   thirdBook,
   isAudioBook,
}) => {
   const [selectedTab, setSelectedTab] = useState('about-book')
   const isAboutBookSelected = selectedTab === 'about-book'
   const isReadFragmentSelected = selectedTab === 'read-fragment'
   return (
      <DescriptionOfBookContainer>
         <DescriptionTextContainer>
            <DescriptionTabsContainer>
               <AboutBooksTab
                  onClick={() => setSelectedTab('about-book')}
                  isActive={isAboutBookSelected}
               >
                  О книге
               </AboutBooksTab>
               {!isAudioBook && (
                  <ReadFragmentTab
                     onClick={() => setSelectedTab('read-fragment')}
                     isActive={isReadFragmentSelected}
                  >
                     Читать фрагмент
                  </ReadFragmentTab>
               )}
            </DescriptionTabsContainer>
            {isAboutBookSelected && <AboutBookText>{aboutBook}</AboutBookText>}
            {isReadFragmentSelected && (
               <ReadFragmentText>{fragmentOfBook}</ReadFragmentText>
            )}
         </DescriptionTextContainer>
         <ThirdImageOfBook url={thirdBook} />
      </DescriptionOfBookContainer>
   )
}

const DescriptionOfBookContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   gap: 0 107px;
   font-family: 'Open Sans';
   color: #222222;
`
const ThirdImageOfBook = styled.div`
   width: 385px;
   height: 614px;
   background: ${({ url }) => `url(${url})`} no-repeat center;
   background-size: cover;
   position: relative;
`
const DescriptionTextContainer = styled.div`
   width: 676px;
`
const DescriptionTabsContainer = styled.div`
   width: 302px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 62px 0 86px 0;
   & span {
      font-weight: 600;
      font-size: 18px;
      line-height: 130%;
      cursor: pointer;
   }
`
const AboutBooksTab = styled.span`
   color: ${({ isActive }) => (isActive ? '#F34901' : '#C4C4C4')};
`
const ReadFragmentTab = styled.span`
   color: ${({ isActive }) => (isActive ? '#F34901' : '#C4C4C4')};
`
const AboutBookText = styled.p`
   width: 100%;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
`
const ReadFragmentText = styled.p`
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
`
