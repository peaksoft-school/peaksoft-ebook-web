import styled from '@emotion/styled/macro'
import React, { useState } from 'react'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Modal } from '../../../components/UI/Modals/Modal'
import { PopUp } from '../../../components/UI/PopUp/PopUp'

export const VendorBooks = ({ countOfBooks }) => {
   const [showOptions, setShowOptions] = useState(false)
   const [isOpen, setIsOpen] = useState(false)
   const showModal = (obj) => {
      setIsOpen(obj)
   }
   const showPopUp = () => {
      setShowOptions(!showOptions)
   }
   const options = [
      {
         title: 'Все',
      },
      {
         title: 'В избранном',
      },
      {
         title: 'В корзине',
      },
      {
         title: 'Проданы',
      },
      {
         title: 'В обработке',
      },
      {
         title: 'Отклоненные',
      },
   ]
   return (
      <>
         <BooksContainer>
            <HeadContainer>
               <BooksAmount>Всего {countOfBooks} книг</BooksAmount>
               <ContainerOfIcons onClick={showPopUp}>
                  <span>Все</span>
                  <ArrowDownIcon />
                  {showOptions && (
                     <PopUp
                        width="191px"
                        top="350px"
                        right="40px"
                        padding="10px 10px"
                        options={options}
                     />
                  )}
               </ContainerOfIcons>
            </HeadContainer>
            <TextButton
               onClick={(e) => {
                  showModal()
                  e.stopPropagation()
               }}
               padding="88px"
               color="#f10000"
               fontWeight="600"
               lHeight="22px"
            >
               Удалить профиль
            </TextButton>
         </BooksContainer>
         <Modal isOpen={isOpen} onCloseBackDrop={() => showModal(false)}>
            <StyledModal>
               <p>
                  Вы уверены, что хотите удалить
                  <br />
                  <span style={{ fontWeight: '600' }}>
                     {isOpen.firstName} {isOpen.lastName}
                  </span>
                  ?
               </p>
               <div>
                  <Button
                     fontSize="16px"
                     color="#A3A3A3"
                     bgColor="white"
                     onClick={() => showModal(false)}
                  >
                     Отменить
                  </Button>
                  <Button
                     fontSize="16px"
                     bgColor="#222222"
                     color="white"
                     bgColorHover="#484848"
                     bgColorActive="#F34901"
                  >
                     Удалить
                  </Button>
               </div>
            </StyledModal>
         </Modal>
      </>
   )
}

const BooksAmount = styled.span`
   color: #969696;
   font-size: 16px;
`
const HeadContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding-bottom: 25px;
   border-bottom: 1px solid #c4c4c4;
`

const BooksContainer = styled.div`
   button {
      padding: 88px;
      padding-left: 900px;
   }
   p {
      font-size: 16px;
      font-weight: 400px;
   }
`
const ContainerOfIcons = styled.div`
   display: flex;
   width: max-content;
   justify-content: space-between;
   align-items: center;
   padding-right: 35px;
   cursor: pointer;
   span {
      padding-right: 10px;
      line-height: 22px;
      font-size: 16px;
      font-weight: 600;
   }
`

const StyledModal = styled.div`
   max-width: 460px;
   min-width: 460px;
   height: max-content;
   p {
      padding: 20px 68px 30px 69px;
      font-size: 18px;
      line-height: 28px;
   }
   div {
      display: flex;
      justify-content: space-between;
      padding: 0 91px 20px 91px;
   }
`
