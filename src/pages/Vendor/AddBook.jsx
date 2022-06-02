import styled from '@emotion/styled/macro'
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { ImagePicker } from '../../components/UI/ImagePicker/ImagePicker'
import { DEFAULT_ROUTES, VENDOR_ROUTES } from '../../utils/constants/routes'
import circle from '../../assets/icons/circle-for-list.svg'
import { RadioButton } from '../../components/UI/RadioButton/RadioButton'
import { TYPES_OF_BOOKS } from '../../utils/constants/general'
import { CurrentBookForm } from '../../components/Vendor/AddBookForms/Forms/CurrentBookForm'

export const AddBook = () => {
   const typesOfBook = Object.values(TYPES_OF_BOOKS)
   const methodsOfForm = useForm()
   const [selectedType, setSelectedType] = useState(TYPES_OF_BOOKS.PAPER.type)
   const changeTypeOfBookHandler = (type) => {
      setSelectedType(type)
   }
   const isTypeOfBookSelected = useCallback(
      (type) => {
         return selectedType === type
      },
      [selectedType]
   )
   const [imageOfBook, setImageOfBook] = useState({
      firstPhoto: null,
      secondPhoto: null,
      thirdPhoto: null,
   })
   const collectBookImageHandler = (name, image) => {
      setImageOfBook((prevImages) => {
         return {
            ...prevImages,
            [name]: image[0],
         }
      })
   }

   const resetBookImages = () => {
      setImageOfBook({
         firstPhoto: null,
         secondPhoto: null,
         thirdPhoto: null,
      })
   }

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
                     <ImagePicker
                        name="firstPhoto"
                        file={imageOfBook.firstPhoto}
                        setFile={setImageOfBook}
                        onDrop={(file) =>
                           collectBookImageHandler('firstPhoto', file)
                        }
                     />
                     <h4>Главное фото</h4>
                  </SingleImageWithText>
                  <SingleImageWithText>
                     <ImagePicker
                        name="secondPhoto"
                        file={imageOfBook.secondPhoto}
                        setFile={setImageOfBook}
                        onDrop={(file) =>
                           collectBookImageHandler('secondPhoto', file)
                        }
                     />
                     <h4>2</h4>
                  </SingleImageWithText>
                  <SingleImageWithText>
                     <ImagePicker
                        name="thirdPhoto"
                        file={imageOfBook.thirdPhoto}
                        setFile={setImageOfBook}
                        onDrop={(file) =>
                           collectBookImageHandler('thirdPhoto', file)
                        }
                     />
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
         <TypesOfUploadBookContainer>
            <p>Тип</p>
            <TypesContainer>
               {typesOfBook.map((bookType) => (
                  <div key={bookType.type}>
                     <RadioButton
                        value={bookType.title}
                        onChange={() => changeTypeOfBookHandler(bookType.type)}
                        checked={isTypeOfBookSelected(bookType.type)}
                     />
                     <span>{bookType.title}</span>
                  </div>
               ))}
            </TypesContainer>
         </TypesOfUploadBookContainer>
         <FormProvider {...methodsOfForm}>
            <CurrentBookForm
               type={selectedType}
               imagesOfBook={imageOfBook}
               resetImages={resetBookImages}
            />
         </FormProvider>
      </AddBookContainer>
   )
}

const AddBookContainer = styled.div`
   padding: 43px 80px 78px 80px;
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
   margin: 30px 0 27px 0;
   & span {
      color: red;
   }
`
const InnerUploadImagesContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 0 15px;
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
   gap: 0 15px;
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
const TypesOfUploadBookContainer = styled.div`
   padding: 76px 0 33px 0;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   font-weight: 400;
   font-size: 16px;
   p {
      margin-bottom: 12px;
   }
`
const TypesContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 501px;
   & div {
      display: flex;
      align-items: center;
      input {
         margin-right: 10px;
      }
   }
`
