import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import { ReactComponent as Download } from '../../../assets/icons/download.svg'
import { ReactComponent as Loading } from '../../../assets/icons/loading.svg'
import { ReactComponent as Checkmark } from '../../../assets/icons/checkmark.svg'

export const FileUploader = forwardRef(
   ({ isLoading, isSuccess, onGetFile, type, name }, ref) => {
      const currentFormatOfFile = type === 'pdf' ? 'application/pdf' : 'audio/*'
      const currentText = type === 'pdf' ? 'PDF' : 'аудиозапись'
      return (
         <>
            {!isLoading && !isSuccess && (
               <StyledDiv color="#969696">
                  <input
                     name={name}
                     type="file"
                     id="file"
                     accept={currentFormatOfFile}
                     onChange={onGetFile}
                     ref={ref}
                  />
                  <label htmlFor="file">
                     <Download />
                     Загрузите {currentText}
                  </label>
               </StyledDiv>
            )}
            {isLoading && (
               <StyledDiv color="#c4c4c4">
                  <label>
                     <Loading className="loading" />
                     Загрузите {currentText}
                  </label>
               </StyledDiv>
            )}
            {isSuccess && (
               <StyledDiv color="white" bgColor="#00AB1B">
                  <label>
                     <Checkmark />
                     <CapitalizedText>
                        {`${currentText}`}{' '}
                        <span>{type === 'pdf' ? 'загружен' : 'загружена'}</span>
                     </CapitalizedText>
                  </label>
               </StyledDiv>
            )}
         </>
      )
   }
)

const CapitalizedText = styled.span`
   text-transform: capitalize;
   & span:first-of-type {
      text-transform: none;
   }
`

const StyledDiv = styled.div`
   border: 1px solid #e5e5e5;
   background-color: ${({ bgColor }) => bgColor || 'white'};
   width: fit-content;
   padding: 11px 30px;
   input[type='file'] {
      display: none;
   }
   label {
      color: ${({ color }) => color || ''};
      display: flex;
      font-size: 14px;
      font-family: 'Open Sans', sans-serif;
      line-height: 16.8px;
      font-weight: 600;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-overflow: ellipsis;
      word-wrap: break-word;
      width: max-content;
      height: 1rem;
   }
   svg {
      margin-right: 20px;
   }
   .loading {
      animation: LOADING linear 1s infinite;
      @keyframes LOADING {
         0% {
            transform: rotate(0deg);
         }
         100% {
            transform: rotate(360deg);
         }
      }
   }
`
