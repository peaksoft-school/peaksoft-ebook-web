import styled from '@emotion/styled/macro'
import React from 'react'
import audioIcon from '../../../assets/icons/audio-icon.svg'
import { Button } from '../Buttons/Button'
import { CheckboxHeart } from '../Checkbox/CheckboxHeart'

export const UserBookCard = ({
   name,
   author,
   price,
   imageURL,
   isAudio,
   onAddToBasket,
}) => {
   return (
      <UserCardContainer>
         <TypeIcons>
            {isAudio && (
               <AudioIcon>
                  <img src={audioIcon} alt="audio-icon-img" />
               </AudioIcon>
            )}
            <FavoriteBookIcon>
               <CheckboxHeart />
            </FavoriteBookIcon>
         </TypeIcons>
         <BooksImage src={imageURL} alt="book-image" />
         <BookDetailsContainer>
            <BookName>{name}</BookName>
            <BookAuthor>{author}</BookAuthor>
            <BookPrice>{price} с</BookPrice>
         </BookDetailsContainer>
         <AddToBusketButtonContainer>
            <Button
               onClick={onAddToBasket}
               bgColor="#FF4C00"
               bgColorActive="#1C1C1C"
               bgColorHover="#484848"
               margin="3px 0 10px 0"
            >
               Добавить в корзину
            </Button>
         </AddToBusketButtonContainer>
      </UserCardContainer>
   )
}
const AddToBusketButtonContainer = styled.div`
   position: absolute;
   opacity: 0;
   transition: visibility 1s, opacity 0.3s linear;
   Button {
      width: 224px;
   }
`
const FavoriteBookIcon = styled.button`
   position: absolute;
   opacity: 0;
   transition: visibility 1s, opacity 0.3s linear;
   cursor: pointer;
   left: 155px;
`
const UserCardContainer = styled.div`
   width: 224px;
   height: 422px;
   background-color: #f8f8f8;
   :hover ${AddToBusketButtonContainer} {
      transition: visibility 1s, opacity 0.3s ease-out;
      opacity: 1;
   }
   :hover ${FavoriteBookIcon} {
      transition: visibility 1s, opacity 0.3s ease-out;
      opacity: 1;
   }
`
const BookDetailsContainer = styled.div`
   background-color: #f8f8f8;
`
const BookName = styled.p`
   margin: 6px 0px 6px 0px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   text-transform: uppercase;
   font-size: 14px;
   line-height: 120%;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
`
const BookAuthor = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   color: #222222;
   margin: 0px 0px 6px 0px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
`
const BookPrice = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 120%;
   color: #222222;
`
const TypeIcons = styled.div`
   position: absolute;
   button {
      background: none;
      border: none;
      padding: 20px;
   }
`
const AudioIcon = styled.button`
   cursor: pointer;
   position: absolute;
`
const BooksImage = styled.img`
   width: 224px;
   height: 343px;
   object-fit: cover;
   object-position: top;
`
