import styled from '@emotion/styled'
import React from 'react'
import { GenreItem } from './GenreItem'

export const GenreMenu = ({ genres, onGenreItem }) => {
   return (
      <GenreMenuContainer>
         {genres.map((genre) => (
            <GenreItem
               key={Math.random().toString()}
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
`
