import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg'

const songImg = [
   {
      id: 1,
      img: 'https://upload.wikimedia.org/wikipedia/ru/3/39/Shrek.jpg',
      title: 'Bekbolsun',
   },
   {
      id: 2,
      img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/bf/%D0%93%D0%B5%D1%80%D0%BE%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A8%D1%80%D0%B5%D0%BA%C2%BB.jpg/800px-%D0%93%D0%B5%D1%80%D0%BE%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A8%D1%80%D0%B5%D0%BA%C2%BB.jpg',
      title: 'Bekbolsun',
   },
   {
      id: 3,
      img: 'data:image/jpeg;base64,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',
      title: 'Bekbolsun',
   },
]

export const BookSlider = ({ books }) => {
   console.log(books)
   const [currentBook, setCurrentBook] = useState(songImg[0])

   const [filteredBooks, setFilteredBooks] = useState(
      songImg.filter((item) => item.id !== currentBook.id)
   )
   const nextHandler = () => {
      setCurrentBook(filteredBooks.at(-1))

      setFilteredBooks((prevBooks) => {
         return [currentBook, prevBooks.pop()]
      })
   }
   const previousHandler = () => {
      setCurrentBook(filteredBooks[0])

      setFilteredBooks((prevBooks) => {
         return [prevBooks.shift(), currentBook]
      })
   }
   return (
      <Container>
         <StyledArrowLeft onClick={previousHandler} />
         <StyledDiv>
            {filteredBooks.map((item) => (
               <div key={item.id}>
                  <BackDrop />
                  <BackImage src={item.img} alt="" />
               </div>
            ))}
            <CurrentBook>
               <img src={currentBook.img} alt="" />
               <div>
                  <p>Гарри Поттер и Тайная ко...</p>
                  <span>Роулинг Джоан Кэтлин</span>
                  <span>450 с</span>
               </div>
            </CurrentBook>
         </StyledDiv>
         <StyledArrowRight onClick={nextHandler} />
      </Container>
   )
}
const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 0 101px;
`
const StyledDiv = styled.div`
   display: flex;
   width: fit-content;
   gap: 0 195px;
   position: relative;
`

const BackImage = styled.img`
   width: 138px;
   height: 217px;
   object-fit: cover;
`
const BackDrop = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 98%;
   background: #0000004b;
`
const CurrentBook = styled.div`
   /* background-color: red; */
   display: flex;
   justify-content: center;
   flex-direction: column;
   color: white;
   align-items: center;
   width: fit-content;
   img {
      width: 292px;
      height: 468px;
      object-fit: cover;
   }
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`
const StyledArrowLeft = styled(ArrowLeft)`
   cursor: pointer;
`
const StyledArrowRight = styled(ArrowRight)`
   cursor: pointer;
`
