import styled from '@emotion/styled/macro'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { ReactComponent as DropzoneIcon } from '../../../assets/icons/image-picker.svg'

export const ImagePicker = ({ file, setFile, onDrop }) => {
   const { getRootProps, getInputProps, open } = useDropzone({
      onDrop,
      accept: 'image/*',
   })
   return (
      <ImagePickerContainer>
         {file ? (
            <DroppedFileContainer>
               <img src={file} alt="chosen_book" />
               <DroppedFileChangingButtons>
                  <p onClick={open}>Заменить</p>
                  <p onClick={() => setFile(null)}>Удалить</p>
               </DroppedFileChangingButtons>
            </DroppedFileContainer>
         ) : (
            <DropzoneContainer {...getRootProps()}>
               <input {...getInputProps()} type="file" />
               <DropzoneIcon />
               <DropzoneText>
                  Нажмите на иконку чтобы загрузить или перетащите фото
               </DropzoneText>
            </DropzoneContainer>
         )}
      </ImagePickerContainer>
   )
}
const ImagePickerContainer = styled.div`
   width: 235px;
   height: 312px;
`
const DropzoneText = styled.p`
   padding: 41px 36px 28px;
   color: #969696;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   text-align: center;
`
const DroppedFileChangingButtons = styled.div`
   display: none;
   position: absolute;
   & p {
      transition: color 0.2s ease;
      font-family: 'Open Sans';
      margin: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      color: #ffffff;
      cursor: pointer;
      &:last-child {
         padding: 23px 0 30px 0;
      }
      &:hover {
         transition: color 0.2s ease;
         text-decoration: underline;
         color: #f34901;
      }
   }
`
const DroppedFileContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   & img {
      width: 100%;
      height: 100%;
   }
   &:hover ${DroppedFileChangingButtons} {
      display: flex;
      background: rgba(0, 0, 0, 0.4);
      flex-direction: column;
      justify-content: end;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 10;
   }
`
const DropzoneContainer = styled.div`
   width: 100%;
   height: 100%;
   transition: background 0.2s ease;
   background: #ececec;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: end;
   cursor: pointer;
   &:hover {
      transition: background 0.2s ease;
      background: #e0e0e0;
   }
`
