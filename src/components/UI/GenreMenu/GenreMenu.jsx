import styled from '@emotion/styled'
import React from 'react'
import { GenreItem } from './GenreItem'

export const GenreMenu = ({ genres, onGenreItem }) => {
   return (
      <GenreMenuContainer>
         {genres.map((genre) => (
            <GenreItem
               key={genre.genre}
               genre={genre.genre}
               count={genre.count}
               onGenreItem={onGenreItem}
            />
         ))}
      </GenreMenuContainer>
   )
}

const GenreMenuContainer = styled.div`
   width: fit-content;
   background: #f8f8f8;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 108px;
   padding: 31px 30px;
   min-width: 1280px;
   min-height: 445px;
   position: absolute;
   top: 50px;
   left: 0;
   animation: GENRES 0.3s;
   @keyframes GENRES {
      from {
         top: -150px;
      }
      to {
         top: 50px;
      }
   }
`
