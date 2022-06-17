import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link, NavLink, useParams, useNavigate } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { theme } from '../../../utils/constants/theme'
import { getSingleClient, removeVendor } from '../../../store/admin-slice'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Button } from '../../../components/UI/Buttons/Button'
import { Modal } from '../../../components/UI/Modals/Modal'

export const ClientsProfile = () => {
   const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false)
   const user = useSelector((state) => state.admin.singleClient)
   const params = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { id } = useParams()
   const navigateAfterSuccessDelete = () => {
      return navigate('/users')
   }
   const deleteVendor = () => {
      dispatch(removeVendor({ id, navigateAfterSuccessDelete }))
   }
   useEffect(() => {
      dispatch(getSingleClient(id))
   }, [])
   return (
      <>
         <VendorProfileContainer>
            <Breadcrumbs>
               <Link to="/users">Пользователи</Link>
               <Typography color={theme.primary.black}>{user?.name}</Typography>
            </Breadcrumbs>
            <ContainerOfLinks>
               <ul>
                  <li>
                     <NavLink
                        to={`/users/${params.id}/profile`}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Профиль
                     </NavLink>
                  </li>
               </ul>
            </ContainerOfLinks>
            <ProfileContainer>
               <ContainerOfFirstLine>
                  <div>
                     <StyledIndex>Имя</StyledIndex>
                     <p>{user?.name}</p>
                  </div>
                  <div>
                     <StyledIndex>Дата регистрации</StyledIndex>
                     <p>{user?.dateOfRegistration}</p>
                  </div>
               </ContainerOfFirstLine>
               <ContainerOfSecondLine>
                  <div>
                     <StyledIndex>Email</StyledIndex>
                     <p>{user?.email}</p>
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
         </VendorProfileContainer>
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

const VendorProfileContainer = styled.div`
   height: 456px;
   padding-top: 50px;
   .MuiBreadcrumbs-root {
      font-size: 14px;
      font-weight: 400px;
      a {
         text-decoration: none;
         color: inherit;
      }
   }
   .MuiTypography-root {
      font-size: 14px;
      font-weight: 400px;
   }
`
const ContainerOfLinks = styled.div`
   margin: 0 auto;
   display: flex;
   justify-content: center;
   padding: 89px 400px 60px 400px;
   ul {
      list-style: none;
      width: 100%;
      display: flex;
      justify-content: center;
   }
   li {
      padding-right: 50px;
   }
   a {
      color: black;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0 45px 7px 45px;
   }
   .active {
      color: #f34901;
      border-bottom: 2px solid #f34901;
      font-weight: 600;
   }
`
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
