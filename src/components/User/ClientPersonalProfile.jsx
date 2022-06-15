import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { theme } from '../../utils/constants/theme'
import { Input } from '../UI/Inputs/Input'
import { InputForPassword } from '../UI/Inputs/InputForPassword'
import { TextButton } from '../UI/Buttons/TextButton'
import { Button } from '../UI/Buttons/Button'
import { ErrorConfirmModal } from '../UI/Modals/ErrorConfirmModal'
import {
   editClientProfile,
   getClientProfile,
   removeClientProfile,
} from '../../store/client-slice'

import {
   ErrorMessage,
   ErrorMessageForExactField,
} from '../../assets/styles/styles'
import { logout } from '../../store/auth-slice'
import { SuccessModal } from '../UI/Modals/SuccessModal'

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
      (state) => state.client
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
               <PersonalInformation>
                  <p>Мое имя</p>
                  <Input
                     placeholder="Напишите ваше имя"
                     {...register('firstName', { required: true })}
                  />
               </PersonalInformation>
               <PersonalInformation>
                  <p>Email</p>
                  <Input
                     type="email"
                     placeholder="Напишите ваш Email"
                     {...register('email', { required: true })}
                  />
               </PersonalInformation>
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
         <RemoveProfile>
            <TextButton color="red" onClick={showDeleteModal} type="button">
               Удалить профиль?
            </TextButton>
            {showRemoveModal && (
               <ErrorConfirmModal
                  isOpen={showRemoveModal}
                  onCencel={() => setRemoveModal(false)}
                  onExit={deleteClientProfile}
                  onCloseBackDrop={(e) => {
                     e.stopPropagation()
                     setRemoveModal(false)
                  }}
                  title={`Вы уверены, что хотите удалить профиль?
          `}
               />
            )}
         </RemoveProfile>
         <SubmitProfile>
            <Link to="/">
               <Button
                  type="button"
                  padding="10px 24px 10px 24px"
                  bgColor="#FFFFFF"
                  color="#A3A3A3"
                  fontSize="16px"
                  colorHover="#FFFFFF"
                  ling-height="21.79px"
                  bgColorActive="#FF4C00"
                  bgColorHover="#484848"
               >
                  Отменить
               </Button>
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
            <SuccessModal
               isOpen={showSuccess}
               onCloseBackDrop={() => setShowSuccess(false)}
               title={`ssefe `}
            />
         </SubmitProfile>
      </StyledForm>
   )
}

const StyledForm = styled.form`
   position: relative;
   margin: 0 auto;
   padding-top: 50px;
   right: 90px;

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
   width: 1180px;
   margin: 0 auto;
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
const PersonalInformation = styled.div``
const RemoveProfile = styled.div`
   margin-top: 50px;
`
const SubmitProfile = styled.div`
   button {
      margin: 20px;
   }
   position: absolute;
   display: flex;
   justify-content: space-between;
   width: 355px;
   right: 0;
   padding: 50px 0 0 120px;
`
