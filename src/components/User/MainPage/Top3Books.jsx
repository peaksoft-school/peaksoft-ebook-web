import styled from '@emotion/styled/macro'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'

function nextSlideHandler() {
   const allSlides = document.querySelectorAll('.single-slide')
   const previous = '1'
   const current = '2'
   const next = '3'
   return allSlides.forEach((slide) => {
      const order = slide.getAttribute('data-order')
      switch (order) {
         case current:
            return slide.setAttribute('data-order', previous)

         case next:
            return slide.setAttribute('data-order', current)
         case previous:
            return slide.setAttribute('data-order', next)

         default:
            return slide.setAttribute('data-order', previous)
      }
   })
}
function previousHandler() {
   const allSlides = document.querySelectorAll('.single-slide')
   const previous = '1'
   const current = '2'
   const next = '3'
   return allSlides.forEach((slide) => {
      const order = slide.getAttribute('data-order')
      switch (order) {
         case next:
            return slide.setAttribute('data-order', previous)

         case previous:
            return slide.setAttribute('data-order', current)
         case current:
            return slide.setAttribute('data-order', next)

         default:
            return slide.setAttribute('data-order', previous)
      }
   })
}

export const Top3Books = ({ books }) => {
   const navigate = useNavigate()

   const passToBookInnerPage = (id) => {
      return navigate(`/${id}`)
   }
   return (
      <Container>
         <StyledArrowLeft onClick={previousHandler} />
         <StyledDiv>
            {books.map((book, index) => (
               <Slide
                  key={book.bookId}
                  data-order={`${index + 1}`}
                  className="single-slide"
               >
                  <BackImage
                     src={book.fileInformation.firstPhoto}
                     alt={book.title}
                     onClick={() => passToBookInnerPage(book.bookId)}
                  />
                  <BookInformation>
                     <p>{book.title || 'Название книги'}</p>
                     <p>
                        <span>{book.authorFullname || 'Автор'}</span>
                        <span>{book.price} с</span>
                     </p>
                  </BookInformation>
               </Slide>
            ))}
         </StyledDiv>
         <StyledArrowRight onClick={nextSlideHandler} />
      </Container>
   )
}
const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 0 101px;
   width: 832px;
   position: relative;
`
const StyledDiv = styled.div`
   width: 471px;
   position: relative;
   bottom: 50%;
   min-height: 217px;
`
const BookInformation = styled.div`
   transition: 2s ease;
   width: 100%;
   display: flex;
   flex-direction: column;
   p:first-of-type {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #d6d6d6;
      text-align: start;
      max-height: 1.2rem;
      word-wrap: break-word;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 4px;
      text-transform: capitalize;
   }
   p:nth-of-type(2) {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #8c8c8c;
      display: flex;
      align-items: center;
      width: 100%;
      max-height: 1.2rem;
      word-wrap: break-word;
      max-width: 100%;
      text-overflow: ellipsis;
      word-wrap: break-word;
      justify-content: space-between;
      span:first-of-type {
         max-width: 200px;
         text-transform: capitalize;
      }
      span {
         word-wrap: break-word;
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
         text-align: start;
      }
      span:last-of-type {
         max-width: 50px;
         font-family: 'Open Sans';
         font-style: normal;
         font-weight: 600;
         font-size: 16px;
         line-height: 22px;
         color: #ff4c00;
         max-width: 90px;
      }
   }
`

const Slide = styled.div`
   & {
      display: flex;
      flex-direction: column;
      gap: 14px 0;
      align-items: center;
      text-align: center;
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      transition: 1.5s ease;
      cursor: pointer;
   }

   /* Left slide*/
   &[data-order='1'] {
      left: 10%;
      width: 138px;
      height: 217px;
      transform: scale(1, 1) translateX(-50%);
      z-index: 1;
      opacity: 0.6;
      & ${BookInformation} {
         display: none;
      }
   }

   /* Middle slide */
   &[data-order='2'] {
      left: 50%;
      top: -108px;
      width: 292px;
      height: 468px;
      transform: translateX(-50%);
      z-index: 3;
      opacity: 1;
   }

   /* Right slide*/
   &[data-order='3'] {
      left: 90%;
      width: 138px;
      height: 217px;
      transform: scale(1, 1) translateX(-50%);
      z-index: 2;
      opacity: 0.6;
      & ${BookInformation} {
         display: none;
      }
   }
   &:nth-of-type(2) {
      order: 3;
   }

   &:nth-of-type(1) {
      order: 2;
   }
   &:nth-of-type(3) {
      order: 1;
   }
`

const BackImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

const StyledArrowLeft = styled(ArrowLeft)`
   cursor: pointer;
`
const StyledArrowRight = styled(ArrowRight)`
   cursor: pointer;
`
