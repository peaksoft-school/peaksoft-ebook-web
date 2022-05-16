import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Modal } from '../../../components/UI/Modals/Modal'

const VENDORDATA = [
   {
      vendorId: 1,
      count: 1,
      firstName: 'Мыктыбекdasghdghjas',
      lastName: 'Мыктыбековdbhasdhjga',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermandashdjgsadjasndgashjdgashdgasjhdghajsdgasjhdgajshd0@tmall.com',
      amountOfBooks: 346767,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 2,
      count: 4,
      firstName: 'Мыктыбек2',
      lastName: 'Мыктыбеков2',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 3,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 3,
      count: 1,
      firstName: 'Мыктыбек3',
      lastName: 'Мыктыбеков3',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 4,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 4,
      count: 1,
      firstName: 'Мыктыбек4',
      lastName: 'Мыктыбеков4',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 74,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 5,
      count: 1,
      firstName: 'Мыктыбек5',
      lastName: 'Мыктыбеков5',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 64,
      dateOfRegistration: '2022-05-14',
   },
]

export const VendorProfile = () => {
   const { id } = useParams()
   const seller = VENDORDATA.find((item) => item.vendorId.toString() === id)
   const [isOpen, setIsOpen] = useState(false)
   const showModal = (obj) => {
      setIsOpen(obj)
   }
   return (
      <>
         <ProfileContainer>
            <ContainerOfFirstLine>
               <div>
                  <StyledIndex>Имя</StyledIndex>
                  <p>{seller.firstName}</p>
               </div>
               <div>
                  <StyledIndex>Номер телефона</StyledIndex>
                  <p>{seller.phoneNumber}</p>
               </div>
               <div>
                  <StyledIndex>Дата регистрации</StyledIndex>
                  <p>{seller.dateOfRegistration}</p>
               </div>
            </ContainerOfFirstLine>
            <ContainerOfSecondLine>
               <div>
                  <StyledIndex>Фамилия</StyledIndex>
                  <p>{seller.lastName}</p>
               </div>
               <div>
                  <StyledIndex>Email</StyledIndex>
                  <p>{seller.email}</p>
               </div>
            </ContainerOfSecondLine>
            <TextButton
               onClick={(e) => {
                  showModal(seller)
                  e.stopPropagation()
               }}
               padding="88px"
               color="#f10000"
               fontWeight="600"
               lHeight="22px"
            >
               Удалить профиль
            </TextButton>
         </ProfileContainer>
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
const ProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
   line-height: 35px;
   width: 100%;
   button {
      padding: 88px;
      padding-left: 900px;
   }
   p {
      font-size: 16px;
      font-weight: 400px;
   }
`
const ContainerOfFirstLine = styled.div`
   display: flex;
   width: 60%;
   justify-content: space-between;
   padding-bottom: 30px;
`

const ContainerOfSecondLine = styled.div`
   display: flex;
   width: 39.5%;
   justify-content: space-between;
`

const StyledIndex = styled.p`
   color: #898989;
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
