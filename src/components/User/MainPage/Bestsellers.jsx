import styled from '@emotion/styled/macro'
import React, { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'

export const Bestsellers = ({ bestsellers }) => {
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
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
      beforeChange: (_, index) => {
         setImageIndex(index)
      },
   }
   const currentBook = useCallback(() => {
      return bestsellers[imageIndex]
   }, [imageIndex, bestsellers])
   return (
      <Container>
         <Nav>
            <h1>Бестселлеры</h1>
            <StyledLink to="/">Смотреть все</StyledLink>
         </Nav>
         <Content>
            <Text>
               <Title>{currentBook()?.title}</Title>
               <p>{currentBook()?.aboutBook}</p>
               <TextBottom>
                  <StyledLink to="/">Подробнее</StyledLink>
                  <span>{currentBook()?.price} с</span>
               </TextBottom>
            </Text>
            <SliderContainer>
               <Slider {...settings} ref={sliderRef}>
                  {bestsellers.map((book, index) => (
                     <ImageSlide
                        active={index === imageIndex}
                        key={book.bookId}
                     >
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
      </Container>
   )
}

const Container = styled.div`
   padding: 0 80px;
   display: flex;
   flex-direction: column;
   gap: 94px 0;
`

const Nav = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
      color: #1c1c1c;
   }
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
const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 0 94px;
`
const Text = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 491px;
   min-width: 491px;
   p {
      margin-top: 50px;
      width: 100%;
      float: left;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #222222;
      word-wrap: break-word;
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
   max-height: 219px;
   text-overflow: ellipsis;
`
const TextBottom = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin-top: 28px;
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
   min-height: 480px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 0 80px;
   padding: 40px;
   width: 80%;
   overflow: hidden;
   white-space: nowrap;
   .slick-list {
      white-space: nowrap;
      width: 100vh;
   }
   .slick-slide {
      margin-right: 25px;
   }
   .slick-slide > div {
      width: 247px;
   }
`
const ImageSlide = styled.div`
   height: 340px !important;
   transition: 0.5s ease;
   transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(0.8)')};
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
   }
`
const Buttons = styled.div`
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
