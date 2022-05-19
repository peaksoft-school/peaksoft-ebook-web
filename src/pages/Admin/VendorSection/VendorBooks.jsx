import styled from '@emotion/styled/macro'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { AdminBookCard } from '../../../components/UI/Card/AdminBookCard'
import { Modal } from '../../../components/UI/Modals/Modal'
import { PopUp } from '../../../components/UI/PopUp/PopUp'
import { removeVendor, getListOfVendorBooks } from '../../../store/admin-slice'

export const VendorBooks = ({ countOfBooks }) => {
   const books = useSelector((state) => state.adminVendors.listOfVendorBooks)
   const [showOptions, setShowOptions] = useState(false)
   const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const navigateAfterSuccessDelete = () => {
      navigate('/vendors')
   }
   const deleteVendor = () => {
      dispatch(removeVendor({ id, navigateAfterSuccessDelete }))
   }

   const showPopUp = () => {
      setShowOptions(!showOptions)
   }
   const { id } = useParams()

   useEffect(() => {
      dispatch(getListOfVendorBooks({ data: 'books', id, offset: 1 }))
   }, [])

   const options = [
      {
         title: 'Все',
         value: 'books',
         id: 's1',
         action: (data) =>
            dispatch(getListOfVendorBooks({ data, id, offset: 1 })),
      },
      {
         title: 'В избранном',
         value: 'favorite-books',
         id: 's2',
         action: (data) =>
            dispatch(getListOfVendorBooks({ data, id, offset: 1 })),
      },
      {
         title: 'В корзине',
         value: 'basket-books',
         id: 's3',
         action: (data) =>
            dispatch(getListOfVendorBooks({ data, id, offset: 1 })),
      },
      {
         title: 'Со скидками',
         value: 'books-discount',
         id: 's9',
         action: (data) =>
            dispatch(getListOfVendorBooks({ data, id, offset: 1 })),
      },
      {
         title: 'В обработке',
         value: 'books-in-process',
         id: 's5',
         action: (data) =>
            dispatch(getListOfVendorBooks({ data, id, offset: 1 })),
      },
      {
         title: 'Отклоненные',
         value: 'books-refused',
         id: 's6',
         action: (data) =>
            dispatch(getListOfVendorBooks({ data, id, offset: 1 })),
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
            <ContentContainer>
               {books.map((vendorBooks) => (
                  <AdminBookCard
                     key={vendorBooks.id}
                     vendorImageUrl={vendorBooks.img}
                     like={vendorBooks.like}
                     date={vendorBooks.date}
                     name={vendorBooks.name}
                     price={vendorBooks.price}
                  />
               ))}
            </ContentContainer>
            <StyledButton>
               <TextButton
                  onClick={(e) => {
                     setIsOpenDeleteUserModal(true)
                     e.stopPropagation()
                  }}
                  color="#f10000"
                  fontWeight="600"
                  lHeight="22px"
               >
                  Удалить профиль
               </TextButton>
            </StyledButton>
         </BooksContainer>
         <Modal
            isOpen={isOpenDeleteUserModal}
            onCloseBackDrop={() => setIsOpenDeleteUserModal(false)}
         >
            <StyledModal>
               <p>Вы уверены, что хотите удалить профиль ?</p>
               <div>
                  <Button
                     fontSize="16px"
                     color="#A3A3A3"
                     bgColor="white"
                     onClick={() => setIsOpenDeleteUserModal(false)}
                  >
                     Отменить
                  </Button>
                  <Button
                     fontSize="16px"
                     bgColor="#222222"
                     color="white"
                     bgColorHover="#484848"
                     bgColorActive="#F34901"
                     onClick={deleteVendor}
                  >
                     Удалить
                  </Button>
               </div>
            </StyledModal>
         </Modal>
      </>
   )
}

const StyledButton = styled.div`
   padding: 20px 10px 0 930px;
`

const ContentContainer = styled.div`
   padding-top: 30px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(1, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   max-width: 100%;
`

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
      width: 193px;
      height: 42px;
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
