import styled from '@emotion/styled'
import React from 'react'
import { theme } from '../../../utils/constants/theme'
import { AudioListener } from '../AudioListener/AudioListener'
import { Button } from '../Buttons/Button'
import audio from '../../../assets/sounds/na_vostoke.mp3'

export const AboutBook = ({
   title,
   price,
   author,
   genre,
   language,
   publishingHouse,
   yearOfIssue,
   isAudioBook,
   size,
   whiteButtonInnerText,
   onClickToWhiteButton,
   orangeButtonInnerText,
   onClickToOrangeButton,
}) => {
   return (
      <AboutBookContainer>
         <TitleOfBook>{title}</TitleOfBook>
         <PriceOfBookContainer>
            <p>{price} c</p>
            {isAudioBook && (
               <AudioListenerContainer>
                  <AudioListener audio={audio} />
               </AudioListenerContainer>
            )}
         </PriceOfBookContainer>
         <InformationContainer>
            <InformationTextContainer>
               <h3>Автор</h3>
               <p>{author}</p>
            </InformationTextContainer>
            <InformationTextContainer>
               <h3>Жанр</h3>
               <p>{genre}</p>
            </InformationTextContainer>
            <InformationTextContainer>
               <h3>Язык</h3>
               <p>{language} </p>
            </InformationTextContainer>
            <InformationTextContainer>
               <h3>Издательство</h3>
               <p>{publishingHouse}</p>
            </InformationTextContainer>
            <InformationTextContainer>
               <h3>Год выпуска</h3>
               <p>{yearOfIssue}</p>
            </InformationTextContainer>
            <InformationTextContainer>
               <h3>{isAudioBook ? 'Длительность' : 'Объём'}</h3>
               <p>{size}</p>
            </InformationTextContainer>
         </InformationContainer>
         <ButtonsContainer>
            <div>
               <Button
                  padding="10px 30px"
                  bgColor="inherit"
                  ling-height="19px"
                  bgColorActive={theme.secondary.orange}
                  color={theme.secondary.orange}
                  fontWeight={600}
                  border="1px solid #F34901"
                  colorActive={theme.primary.white}
                  onClick={onClickToWhiteButton}
               >
                  {whiteButtonInnerText}
               </Button>
            </div>
            <div>
               <Button
                  padding="11px 30px"
                  bgColor={theme.secondary.orange}
                  ling-height="19px"
                  bgColorHover="#FE6F33"
                  bgColorActive="#E54400"
                  fontWeight={600}
                  onClick={onClickToOrangeButton}
               >
                  {orangeButtonInnerText}
               </Button>
            </div>
         </ButtonsContainer>
      </AboutBookContainer>
   )
}

const AboutBookContainer = styled.div`
   font-family: 'Open Sans';
   line-height: 130%;
   color: #222222;
`
const TitleOfBook = styled.h1`
   font-weight: 600;
   font-size: 28px;
`
const PriceOfBookContainer = styled.div`
   font-weight: 600;
   font-size: 16px;
   line-height: 120%;
   color: #f34901;
   padding: 55px 0 47px 0;
   position: relative;
`
const ButtonsContainer = styled.div`
   display: flex;
   padding-top: 76px;
   justify-content: space-between;
   position: relative;
   & button {
      min-width: 224px;
      max-width: 235px;
   }
   & div:last-child {
      width: max-content;
      position: absolute;
      left: 244px;
   }
`
const InformationContainer = styled.div`
   min-width: 401px;
   height: 160px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const InformationTextContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
   font-size: 14px;
   & h3 {
      font-weight: 600;
      min-width: 245px;
   }
   & p {
      font-weight: 400;
      min-width: 200px;
      text-transform: capitalize;
   }
   &:last-of-type p {
      text-transform: none;
   }
`
const AudioListenerContainer = styled.div`
   position: absolute;
   right: -35%;
   top: 52%;
   transform: translate(-50%, -50%);
`
