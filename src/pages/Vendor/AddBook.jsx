import styled from '@emotion/styled/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import { ImagePicker } from '../../components/UI/ImagePicker/ImagePicker'
import { DEFAULT_ROUTES, VENDOR_ROUTES } from '../../utils/constants/routes'
import circle from '../../assets/icons/circle-for-list.svg'

export const AddBook = () => {
   return (
      <AddBookContainer>
         <NameOfPageContainer>
            <Link to={DEFAULT_ROUTES.INDEX.PATH}>
               {DEFAULT_ROUTES.INDEX.LABEL}
            </Link>
            <span>{` / ${VENDOR_ROUTES.ADD_BOOK.LABEL}`}</span>
         </NameOfPageContainer>
         <UploadImagesContainer>
            <UploadImageText>
               Загрузите 3 фото <span>*</span>
            </UploadImageText>
            <InnerUploadImagesContainer>
               <ImagePickersContainer>
                  <SingleImageWithText>
                     <ImagePicker />
                     <h4>Главное фото</h4>
                  </SingleImageWithText>
                  <SingleImageWithText>
                     <ImagePicker />
                     <h4>2</h4>
                  </SingleImageWithText>
                  <SingleImageWithText>
                     <ImagePicker />
                     <h4>3</h4>
                  </SingleImageWithText>
               </ImagePickersContainer>
               <DescriptionAboutUploadImage>
                  <div>
                     <p>
                        Публикации с качественными фото получают больше
                        откликов!
                     </p>
                     <h3>Фотографии должны быть:</h3>
                     <ul>
                        <div>
                           <img src={circle} alt="circle" />
                           <li>
                              Фон должен быть нейтральным, без теней, рисунков,
                              посторонних объектов или засветов
                           </li>
                        </div>
                        <div>
                           <img src={circle} alt="circle" />
                           <li>Фото обязательно должно быть цветным</li>
                        </div>
                        <div>
                           <img src={circle} alt="circle" />
                           <li>Фото</li>
                        </div>
                     </ul>
                  </div>
               </DescriptionAboutUploadImage>
            </InnerUploadImagesContainer>
         </UploadImagesContainer>
      </AddBookContainer>
   )
}

const AddBookContainer = styled.div`
   padding: 250px 80px 0 80px;
   margin: 0 auto;
   width: inherit;
   font-family: 'Open Sans';
`
const NameOfPageContainer = styled.div`
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   & a {
      color: #969696;
      text-decoration: none;
   }
   & span {
      color: #000000;
   }
`
const UploadImagesContainer = styled.div`
   width: 100%;
`
const UploadImageText = styled.p`
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   color: #969696;
   & span {
      color: red;
   }
`
const InnerUploadImagesContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const SingleImageWithText = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: fit-content;
   & h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      color: #969696;
   }
`
const ImagePickersContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: fit-content;
   height: 350px;
   ${SingleImageWithText} {
      padding-right: 20px;
   }
`
const DescriptionAboutUploadImage = styled.div`
   width: 449px;
   height: 312px;
   background: #ececec;
   padding: 30px 24px 40px 25px;
   & div {
      width: 400px;
      height: 242px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #222222;
      & p {
         font-weight: 400;
         font-size: 16px;
         line-height: 130%;
      }
      & h3 {
         font-weight: 600;
         font-size: 16px;
         line-height: 22px;
      }
      & ul {
         height: 126px;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         list-style: none;
         & div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
         }
         & li {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            padding-left: 14px;
         }
         & img {
            width: 8px;
            height: 8px;
         }
      }
   }
`
