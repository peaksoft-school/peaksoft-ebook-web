import styled from '@emotion/styled'
import React from 'react'
import { GenreItem } from './GenreItem'
import { PopUpBackdrop } from '../PopUp/PopUpBackdrop'

export const GenreMenuForAdmin = ({
   genres,
   onCloseBackDrop,
   onGenreItem,
   ...props
}) => {
   return (
      <>
         <PopUpBackdrop onClose={onCloseBackDrop} />
         <GenreMenuContainer {...props}>
            {genres.map((genre) => (
               <GenreItem
                  key={genre.genreId}
                  genre={genre.genreName}
                  id={genre.genreId}
                  count={genre.count}
                  onGenreItem={onGenreItem}
               />
            ))}
         </GenreMenuContainer>
      </>
   )
}

const GenreMenuContainer = styled.div`
   width: fit-content;
   background: white;
   padding: 31px 30px;
   width: 395px;
   max-height: 366px;
   position: absolute;
   top: 50px;
   left: 0;
   animation: GENRES 0.3s;
   z-index: 99;
   box-shadow: 0 5px 10px 3px rgba(226, 219, 219, 0.5);
   @keyframes GENRES {
      from {
         top: -150px;
      }
      to {
         top: 50px;
      }
   }
   overflow-y: scroll;

   &::-webkit-scrollbar {
      background-color: transparent;
      width: 0.3rem;
      border-radius: 10rem;
   }
   &::-webkit-scrollbar-thumb {
      border: 4px solid #c4c4c4;
      border-radius: 5px;
      transform: rotate(90deg);
   }
   &::-webkit-scrollbar-thumb:hover {
      border: 4px solid #bdbdbd;
   }
`
