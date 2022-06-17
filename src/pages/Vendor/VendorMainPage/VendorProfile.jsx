import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Input } from '../../../components/UI/Inputs/Input'
import { theme } from '../../../utils/constants/theme'
import { ErrorConfirmModal } from '../../../components/UI/Modals/ErrorConfirmModal'
import { logout } from '../../../store/auth-slice'
import { INPUT_MASK_NUMBER } from '../../../utils/constants/general'
import { InputForPassword } from '../../../components/UI/Inputs/InputForPassword'
import {
   editVendorProfile,
   getVendorProfile,
   removeVendorProfile,
} from '../../../store/vendor-slice'
import {
   ErrorMessage,
   ErrorMessageForExactField,
} from '../../../assets/styles/styles'
import { SuccessModal } from '../../../components/UI/Modals/SuccessModal'

export const VendorProfile = () => {
   const { vendorSettings, errorMessagePassword } = useSelector(
      (state) => state.vendor
   )
   const [showRemoveModal, setRemoveModal] = useState(false)

   const [showSuccess, setShowSuccess] = useState(false)

   const dispatch = useDispatch()

   const navigate = useNavigate()
   useEffect(() => {
      const timeout = setTimeout(() => setShowSuccess(false), 2000)

      return () => {
         clearTimeout(timeout)
      }
   }, [showSuccess])

   useEffect(() => {
      dispatch(getVendorProfile())
   }, [])

   const onSubmitHandler = (vendorData) =>
      dispatch(
         editVendorProfile(vendorData, {
            showModal: () => setShowSuccess(true),
         })
      )

   const showDeleteModal = () => {
      setRemoveModal(true)
   }
   const navigateAfterSuccessDelete = () => {
      logout(navigate)
   }
   const deleteVendorProfile = () => {
      dispatch(removeVendorProfile({ navigateAfterSuccessDelete }))
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      control,
   } = useForm({
      defaultValues: {
         firstName: '',
         lastName: '',
         number: '',
         email: '',
      },
   })

   useEffect(() => {
      if (vendorSettings) {
         setValue('firstName', vendorSettings.firstName)
         setValue('lastName', vendorSettings.lastName)
         setValue('email', vendorSettings.email)
         setValue('number', vendorSettings.number)
         setValue('oldPassword', vendorSettings.oldPassword)
      }
   }, [vendorSettings])

   const errorForPasswordField =
      errorMessagePassword === 'Текущий пароль не совпадают'
   const errorForNewPasswordField =
      errorMessagePassword === 'Ваш новый пароль не совпадают'

   return (
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
         <Breadcrumbs>
            <Link to="/main-page">Главная</Link>
            <Typography color={theme.primary.black}>Профиль</Typography>
         </Breadcrumbs>
         <ProfileContainer>
            <PersonalInformationContainer>
               <Private>Личная информация</Private>
               <PersonalInformation>
                  <p>Ваше имя</p>
                  <Input
                     type="text"
                     defaultValue=" defaultValues.firstName"
                     placeholder="Напишите ваше имя"
                     {...register('firstName', { required: true })}
                  />
               </PersonalInformation>
               <PersonalInformation>
                  <p>Ваша фамилие</p>
                  <Input
                     type="text"
                     placeholder="Введите вашу фамилию"
                     {...register('lastName', { required: true })}
                  />
               </PersonalInformation>
               <PersonalInformation>
                  <p>Номер телефона</p>
                  <Controller
                     name="number"
                     control={control}
                     rules={{
                        required: true,
                     }}
                     defaultValue=""
                     render={({ field: { onChange, value } }) => (
                        <InputMask
                           mask={INPUT_MASK_NUMBER}
                           maskChar=""
                           onChange={(e) => onChange(e.target.value)}
                           value={value}
                        >
                           {(inputProps) => (
                              <Input
                                 placeholder="+996 (___) __ __ __"
                                 {...inputProps}
                              />
                           )}
                        </InputMask>
                     )}
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
                  onCancel={() => setRemoveModal(false)}
                  onExit={deleteVendorProfile}
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
            <Link to="/main-page">
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
   padding: 0px 0px 100px 0px;
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
   position: absolute;
   display: flex;
   justify-content: space-between;
   width: 300px;
   right: 0;
   padding: 50px 0 50px 0;
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
