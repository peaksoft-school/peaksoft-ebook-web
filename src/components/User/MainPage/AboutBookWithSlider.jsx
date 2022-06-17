import React, { useRef, useState, useCallback } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'

export const AboutBookWithSlider = ({ books }) => {
   const sliderRef = useRef()
   const [imageIndex, setImageIndex] = useState(0)
   const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      className: 'slides',
      arrows: false,
      beforeChange: (_, index) => {
         setImageIndex(index)
      },
      initialSlide: 0,
   }
   const currentBook = useCallback(() => {
      return books[imageIndex]
   }, [imageIndex, books])
   return (
      <Content>
         <Text>
            <Title>{currentBook()?.title || 'Название книги'}</Title>
            <p>{currentBook()?.aboutBook || 'О книге'}</p>
            <TextBottom>
               <StyledLink to={`/${currentBook()?.bookId}`}>
                  Подробнее
               </StyledLink>
               <span>{currentBook()?.price || 0} с</span>
            </TextBottom>
         </Text>
         <SliderContainer>
            <Slider {...settings} ref={sliderRef}>
               {books.map((book, index) => (
                  <ImageSlide active={index === imageIndex} key={book.bookId}>
                     <img
                        src={book.fileInformation.firstPhoto}
                        alt={book.name}
                     />
                  </ImageSlide>
               ))}
            </Slider>
            <Buttons>
               <StyledArrowLeft onClick={sliderRef.current?.slickPrev} />
               <StyledArrowRight onClick={sliderRef.current?.slickNext} />
            </Buttons>
         </SliderContainer>
      </Content>
   )
}
const Content = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: 0 94px;
`
const Text = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 491px;
   min-width: 491px;
   max-height: 421px;
   min-height: 421px;

   p {
      width: 100%;
      float: left;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #222222;
      word-wrap: break-word;
      max-width: 491px;
      min-height: 105px;
      max-height: 105px;
      overflow: hidden;
      margin-bottom: 29px;
   }
`
const Title = styled.div`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 56px;
   line-height: 130%;
   color: #222222;
   max-width: 448px;
   word-wrap: break-word;
   float: left;
   max-height: 200px;
   min-height: 200px;
   text-overflow: ellipsis;
   margin-bottom: 50px;
`
const TextBottom = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   span {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: #ff4c00;
   }
`
const SliderContainer = styled.div`
   width: 700px;
   min-height: 450px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 0 80px;
   width: 80%;
   overflow: hidden;
   white-space: nowrap;
   .slick-list {
      white-space: nowrap;
      width: 100vh;
   }
   .slick-slide > div {
      width: 247px;
   }
`
const ImageSlide = styled.div`
   height: 340px !important;
   transition: 0.5s ease;
   transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0.7)')};
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
   }
`
const Buttons = styled.div`
   position: relative;
   top: 15px;
   svg {
      width: 60px;
   }
   display: flex;
   gap: 0 36.6px;
   align-items: center;
   justify-content: end;
`
const StyledArrowLeft = styled(ArrowLeft)`
   cursor: pointer;
`
const StyledArrowRight = styled(ArrowRight)`
   cursor: pointer;
`
const StyledLink = styled(Link)`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-decoration-line: underline;
   color: #ff4c00;
`
