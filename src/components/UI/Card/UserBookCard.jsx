import styled from '@emotion/styled/macro'
import React from 'react'
import audioIcon from '../../../assets/icons/audio-icon.svg'
import { Button } from '../Buttons/Button'
import { Checkbox } from '../Checkbox/CheckboxHeart'

export const UserBookCard = ({
   name,
   author,
   price,
   bookURL,
   bookType,
   onAddToBasket,
}) => {
   return (
      <UserCardConteiner>
         <TypeIcons>
            {bookType ===
            (
               <AudioIcon>
                  <img src={audioIcon} alt="audio-icon-img" />
               </AudioIcon>
            )}
            <FovoritesIcon>
               <Checkbox />
            </FovoritesIcon>
         </TypeIcons>
         <BooksImage src={bookURL} alt="book-image" />
         <CardText>
            <BooksName>{name}</BooksName>
            <BooksAthor>{author}</BooksAthor>
            <BooksPrice>{price} с</BooksPrice>
         </CardText>
         <AddBasket>
            <Button
               onClick={onAddToBasket}
               bgColor="#FF4C00"
               bgColorActive="#1C1C1C"
               bgColorHover="#484848"
               margin="3px 0 10px 0"
            >
               Добавить в корзину
            </Button>
         </AddBasket>
      </UserCardConteiner>
   )
}
const AddBasket = styled.div`
   position: absolute;
   opacity: 0;
   transition: visibility 1s, opacity 0.3s linear;
   Button {
      width: 224px;
   }
`
const FovoritesIcon = styled.button`
   position: absolute;
   opacity: 0;
   transition: visibility 1s, opacity 0.3s linear;
   cursor: pointer;
   left: 155px;
`
const UserCardConteiner = styled.div`
   width: 224px;
   height: 422px;
   background-color: #f8f8f8;
   :hover ${AddBasket} {
      transition: visibility 1s, opacity 0.3s ease-out;
      opacity: 1;
   }
   :hover ${FovoritesIcon} {
      transition: visibility 1s, opacity 0.3s ease-out;
      opacity: 1;
   }
`
const CardText = styled.div`
   background-color: #f8f8f8;
`
const BooksName = styled.p`
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
const BooksAthor = styled.p`
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
const BooksPrice = styled.p`
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
`
