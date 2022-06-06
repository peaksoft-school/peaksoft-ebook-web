import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../../components/UI/Buttons/Button'
import { TextButton } from '../../../components/UI/Buttons/TextButton'
import { Input } from '../../../components/UI/Inputs/Input'
import { theme } from '../../../utils/constants/theme'
import { ErrorConfirmModal } from '../../../components/UI/Modals/ErrorConfirmModal'
import {
   editVendorProfile,
   getVendorProfile,
   removeVendorProfile,
   vendorActions,
} from '../../../store/vendor-slice'
import {
   ErrorMessage,
   ErrorMessageForExactField,
} from '../../../assets/styles/styles'
import { localstorage } from '../../../utils/helpers/general'
import { LOCAL_STORAGE_USER_KEY } from '../../../utils/constants/general'

export const VendorProfile = () => {
   const { vendorSettings, errorMessagePassword } = useSelector(
      (state) => state.vendor
   )
   const dispatch = useDispatch()

   const { id } = useParams()

   const navigate = useNavigate()
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

   const [showRemoveModal, setRemoveModal] = useState(false)

   useEffect(() => {
      dispatch(getVendorProfile())
   }, [])

   useEffect(() => {
      if (vendorSettings) {
         setValue('firstName', vendorSettings.firstName)
         setValue('lastName', vendorSettings.lastName)
         setValue('email', vendorSettings.email)
         setValue('number', vendorSettings.number)
         setValue('oldPassword', vendorSettings.oldPassword)
      }
   }, [vendorSettings])

   const onSubmitHandler = (vendorData) =>
      dispatch(editVendorProfile(vendorData))

   const showDeleteModal = () => {
      setRemoveModal(true)
   }
   const navigateAfterSuccessDelete = () => {
      localstorage.remove(LOCAL_STORAGE_USER_KEY)
      dispatch(vendorActions.logout())
      navigate('/')
   }
   const deleteVendorProfile = () => {
      dispatch(removeVendorProfile({ id, navigateAfterSuccessDelete }))
   }
   const errorForPasswordField =
      errorMessagePassword === 'Введенные пароли не совпадают'
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
                     render={({ field }) => (
                        <Input
                           type="text"
                           placeholder="+996 (___) __ __ __"
                           {...register('number', { required: true })}
                           value={field.value}
                        />
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
               <div>
                  <p>Текущий пароль</p>
                  <Input
                     type="password"
                     placeholder="Напишите текущий пароль"
                     {...register('oldPassword', { required: true })}
                     error={errorForPasswordField}
                  />
                  {errors?.password?.message && (
                     <ErrorMessageForExactField>
                        {errors.password.message}
                     </ErrorMessageForExactField>
                  )}
               </div>

               <div>
                  <p>Новый пароль</p>
                  <Input
                     type="password"
                     placeholder="Напишите ваш новый пароль"
                     {...register('newPassword', { required: true })}
                     error={errorForNewPasswordField}
                  />
                  {errors?.password?.message && (
                     <ErrorMessageForExactField>
                        {errors.password.message}
                     </ErrorMessageForExactField>
                  )}
               </div>
               <div>
                  <p>Подтвердите пароль</p>
                  <Input
                     type="password"
                     placeholder="Подтвердите пароль"
                     {...register('confirmNewPassword', { required: true })}
                  />
               </div>
               {Object.values(errors).some(
                  (error) => error.type === 'required' && !errorMessagePassword
               ) && <ErrorMessage>Пожалуйста заполните все поля</ErrorMessage>}
               {errorMessagePassword && (
                  <ErrorMessage>{errorMessagePassword}</ErrorMessage>
               )}
            </PersonalInformationContainer>
         </ProfileContainer>
         <RemoveProfile>
            <TextButton color="red" onClick={showDeleteModal}>
               Удалить профиль?
            </TextButton>
            {showRemoveModal && (
               <ErrorConfirmModal
                  isOpen={showRemoveModal}
                  onCencelButton={() => setRemoveModal(false)}
                  onExitButton={deleteVendorProfile}
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
               <Button
                  padding="10px 24px 10px 24px"
                  bgColor="#FFFFFF"
                  color="#A3A3A3"
                  fontSize="16px"
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
         </SubmitProfile>
      </StyledForm>
   )
}

const StyledForm = styled.form`
   position: relative;
   margin: 0 auto;
   width: 1270px;
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
