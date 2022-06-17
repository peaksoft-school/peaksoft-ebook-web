import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { theme } from '../../utils/constants/theme'
import { Input } from '../../components/UI/Inputs/Input'
import { InputForPassword } from '../../components/UI/Inputs/InputForPassword'
import { TextButton } from '../../components/UI/Buttons/TextButton'
import { Button } from '../../components/UI/Buttons/Button'
import { ErrorConfirmModal } from '../../components/UI/Modals/ErrorConfirmModal'
import {
   editClientProfile,
   getClientProfile,
   removeClientProfile,
} from '../../store/user-slice'

import {
   ErrorMessage,
   ErrorMessageForExactField,
} from '../../assets/styles/styles'
import { logout } from '../../store/auth-slice'
import { SuccessModal } from '../../components/UI/Modals/SuccessModal'

export const ClientPersonalProfile = () => {
   const [showSuccess, setShowSuccess] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      const timeout = setTimeout(() => setShowSuccess(false), 2000)

      return () => {
         clearTimeout(timeout)
      }
   }, [showSuccess])
   const { clientSettings, errorMessagePassword } = useSelector(
      (state) => state.user
   )
   useEffect(() => {
      dispatch(getClientProfile())
   }, [])
   const [showRemoveModal, setRemoveModal] = useState(false)
   const showDeleteModal = () => {
      setRemoveModal(true)
   }
   const navigateAfterSuccessDelete = () => {
      logout(navigate)
   }
   const deleteClientProfile = () => {
      dispatch(removeClientProfile({ navigateAfterSuccessDelete }))
   }

   const onSubmitHandler = (clientData) =>
      dispatch(editClientProfile(clientData))
   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: {
         name: '',
         email: '',
      },
   })
   useEffect(() => {
      if (clientSettings) {
         setValue('firstName', clientSettings.firstName)
         setValue('email', clientSettings.email)
         setValue('oldPassword', clientSettings.oldPassword)
      }
   }, [clientSettings])

   const errorForPasswordField =
      errorMessagePassword === 'Текущий пароль не совпадают'
   const errorForNewPasswordField =
      errorMessagePassword === 'Ваш новый пароль не совпадают'

   return (
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
         <Breadcrumbs>
            <Link to="/">Главная</Link>
            <Typography color={theme.primary.black}>Профиль</Typography>
         </Breadcrumbs>
         <ProfileContainer>
            <PersonalInformationContainer>
               <Private>Личная информация</Private>
               <div>
                  <p>Мое имя</p>
                  <Input
                     placeholder="Напишите ваше имя"
                     {...register('firstName', { required: true })}
                  />
               </div>
               <div>
                  <p>Email</p>
                  <Input
                     type="email"
                     placeholder="Напишите ваш Email"
                     {...register('email', { required: true })}
                  />
               </div>
            </PersonalInformationContainer>
            <PersonalInformationContainer>
               <Private>Изменить пароль</Private>
               <PasswordContainer>
                  <p>Текущий пароль</p>
                  <InputForPassword
                     placeholder="Напишите текущий пароль"
                     {...register('oldPassword', { required: true })}
                     error={errorForPasswordField}
                  />
                  {errors?.password?.message && (
                     <ErrorMessageForExactField>
                        {errors.password.message}
                     </ErrorMessageForExactField>
                  )}
               </PasswordContainer>

               <PasswordContainer>
                  <p>Новый пароль</p>
                  <InputForPassword
                     placeholder="Напишите ваш новый пароль"
                     {...register('newPassword', { required: true })}
                     error={errorForNewPasswordField}
                  />
                  {errors?.password?.message && (
                     <ErrorMessageForExactField>
                        {errors.password.message}
                     </ErrorMessageForExactField>
                  )}
               </PasswordContainer>
               <PasswordContainer>
                  <p>Подтвердите пароль</p>
                  <InputForPassword
                     placeholder="Подтвердите пароль"
                     {...register('confirmNewPassword', { required: true })}
                  />
               </PasswordContainer>
               {Object.values(errors).some(
                  (error) => error.type === 'required' && !errorMessagePassword
               ) && <ErrorMessage>Пожалуйста заполните все поля</ErrorMessage>}
               {errorMessagePassword && (
                  <ErrorMessage>{errorMessagePassword}</ErrorMessage>
               )}
            </PersonalInformationContainer>
         </ProfileContainer>
         <div>
            <TextButton color="red" onClick={showDeleteModal} type="button">
               Удалить профиль?
            </TextButton>
         </div>
         <ButtonsContainer>
            <Link to="/">
               <CancelButton>Отменить</CancelButton>
            </Link>
            <Button
               padding="10px 24px 10px 24px"
               bgColor={theme.secondary.darkBackground}
               fontSize="16px"
               ling-height="21.79px"
               bgColorHover="#484848"
               bgColorActive={theme.secondary.orange}
               type="submit"
            >
               Сохранить
            </Button>
         </ButtonsContainer>
         {showRemoveModal && (
            <ErrorConfirmModal
               isOpen={showRemoveModal}
               onCancel={() => setRemoveModal(false)}
               onExit={deleteClientProfile}
               onCloseBackDrop={(e) => {
                  e.stopPropagation()
                  setRemoveModal(false)
               }}
               title={`Вы уверены, что хотите удалить профиль?
          `}
            />
         )}
         <SuccessModal
            isOpen={showSuccess}
            onCloseBackDrop={() => setShowSuccess(false)}
            title={`ssefe `}
         />
      </StyledForm>
   )
}

const StyledForm = styled.form`
   padding: 50px 80px 0 80px;

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
const PasswordContainer = styled.div`
   width: 514px;
`

const ProfileContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 0 160px;
   margin-top: 50px;
   input {
      width: 514px;
      border: 1px solid #969696;
   }
`
const PersonalInformationContainer = styled.div`
   color: #969696;
   p {
      padding: 15px 0 10px 0px;
   }
`
const Private = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 25px;
   color: #222222;
`
const ButtonsContainer = styled.div`
   padding: 97px 0 50px 0;
   width: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 0 40px;
`
const CancelButton = styled.button`
   outline: none;
   border: none;
   padding: 10px 24px;
   cursor: pointer;
   font-family: 'Open Sans';
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: #a3a3a3;
   background: #ffffff;
   &:hover {
      color: #818181;
   }
   &:active {
      color: #000000;
   }
`
