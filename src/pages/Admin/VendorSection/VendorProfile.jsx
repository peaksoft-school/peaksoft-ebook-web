import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Modal } from '../../../components/UI/Modals/Modal'
import { getSingleVendor } from '../../../store/admin-panel-vendor-slice'

export const VendorProfile = () => {
   const { singleVendor } = useSelector((state) => state.adminVendors)
   const dispatch = useDispatch()
   const { id } = useParams()
   const seller = singleVendor.find((item) => item.vendorId.toString() === id)
   const [isOpen, setIsOpen] = useState(false)
   const showModal = (obj) => {
      setIsOpen(obj)
   }
   useEffect(() => {
      dispatch(getSingleVendor())
   }, [])
   console.log(seller)
   // console.log(singleVendor)
   return (
      <>
         <ProfileContainer>
            <ContainerOfFirstLine>
               <div>
                  <StyledIndex>Имя</StyledIndex>
                  <p>{singleVendor.firstName}</p>
               </div>
               <div>
                  <StyledIndex>Номер телефона</StyledIndex>
                  <p>{singleVendor.phoneNumber}</p>
               </div>
               <div>
                  <StyledIndex>Дата регистрации</StyledIndex>
                  <p>{singleVendor.dateOfRegistration}</p>
               </div>
            </ContainerOfFirstLine>
            <ContainerOfSecondLine>
               <div>
                  <StyledIndex>Фамилия</StyledIndex>
                  <p>{singleVendor.lastName}</p>
               </div>
               <div>
                  <StyledIndex>Email</StyledIndex>
                  <p>{singleVendor.email}</p>
               </div>
            </ContainerOfSecondLine>
            <TextButton
               onClick={(e) => {
                  showModal(singleVendor)
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
