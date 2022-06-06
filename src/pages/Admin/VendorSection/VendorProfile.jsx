import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Modal } from '../../../components/UI/Modals/Modal'
import { getSingleVendor, removeVendor } from '../../../store/admin-slice'

export const VendorProfile = () => {
   const seller = useSelector((state) => state.admin.singleVendor)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { id } = useParams()
   const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false)
   const navigateAfterSuccessDelete = () => {
      return navigate('/vendors')
   }
   const deleteVendor = () => {
      dispatch(removeVendor({ id, navigateAfterSuccessDelete }))
   }
   useEffect(() => {
      dispatch(getSingleVendor(id))
   }, [])
   return (
      <>
         <ProfileContainer>
            <ContainerOfFirstLine>
               <div>
                  <StyledIndex>Имя</StyledIndex>
                  <p>{seller?.firstName}</p>
               </div>
               <div>
                  <StyledIndex>Номер телефона</StyledIndex>
                  <p>{seller?.phoneNumber}</p>
               </div>
               <div>
                  <StyledIndex>Дата регистрации</StyledIndex>
                  <p>{seller?.dateOfRegistration}</p>
               </div>
            </ContainerOfFirstLine>
            <ContainerOfSecondLine>
               <div>
                  <StyledIndex>Фамилия</StyledIndex>
                  <p>{seller?.lastName}</p>
               </div>
               <div>
                  <StyledIndex>Email</StyledIndex>
                  <p>{seller?.email}</p>
               </div>
            </ContainerOfSecondLine>
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
         </ProfileContainer>
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
   padding-top: 20px;
   padding-right: 30px;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`
const ProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
   line-height: 35px;
   width: 100%;
   button {
      width: 193px;
      height: 42px;
   }
   p {
      font-size: 16px;
      font-weight: 400px;
   }
`
const ContainerOfFirstLine = styled.div`
   display: flex;
   width: 100%;
   padding-bottom: 30px;
   div {
      width: 260px;
   }
`

const ContainerOfSecondLine = styled.div`
   display: flex;
   width: 100%;
   div {
      width: 260px;
   }
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
