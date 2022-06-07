import styled from '@emotion/styled'
import React from 'react'
import { GenreItem } from './GenreItem'

export const GenreMenu = ({ genres, onGenreItem }) => {
   return (
      <GenreMenuContainer>
         {genres.length > 0 &&
            genres.map((genre) => (
               <GenreItem
                  key={genre.genreId}
                  genre={genre.genreName}
                  count={genre.count}
                  onGenreItem={onGenreItem}
               />
            ))}
         {genres.length === 0 && <p>Not Found</p>}
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
   height: 445px;
   position: absolute;
   top: 100%;
   left: 50%;
   transform: translate(-50%, -0%);
   z-index: 97;
   animation: GENRES 0.3s;
   @keyframes GENRES {
      from {
         top: 0%;
      }
      to {
         top: 100%;
      }
   }
`
