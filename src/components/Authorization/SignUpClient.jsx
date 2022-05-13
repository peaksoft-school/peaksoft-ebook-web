/* eslint-disable no-alert */
import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
   AuthLink,
   AuthLinksContainer,
   AuthorizationContainer,
   ErrorMessage,
   theme,
} from '../../assets/styles/styles'
import { authActions, signUpClient } from '../../store/auth-slice'
import { REGEXP_EMAIL, REGEXP_PASSWORD } from '../../utils/constants/general'
import { Button } from '../UI/Buttons/Button'
import { Checkbox } from '../UI/Checkbox/Checkbox'
import { FieldName } from '../UI/FieldName/FieldName'
import { Input } from '../UI/Inputs/Input'
import { InputForPassword } from '../UI/Inputs/InputForPassword'
import { Modal } from '../UI/Modals/Modal'

export const SignUpClient = () => {
   const {
      isAuth,
      errorMessageWhenPasswordsAreNotTheSame,
      errorMessageWhenEmailAlreadyIsAuthorized,
      isRegistered,
   } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors, isDirty },
      reset,
   } = useForm({
      mode: 'onSubmit',
   })

   const [searchParams, setSearchParams] = useSearchParams()

   const isOpenSignUpModal = searchParams.get('sign-up')

   useEffect(() => {
      if (isAuth && isOpenSignUpModal) {
         setSearchParams('')
      }
   }, [isAuth, searchParams])

   useEffect(() => {
      window.onbeforeunload = () => {
         return isDirty ? 'Show warning' : null
      }
   }, [isDirty])

   useEffect(() => {
      if (isRegistered) {
         setSearchParams({ 'sign-in': true })
         reset()
      }
      return () => dispatch(authActions.disableIsRegistered())
   }, [isRegistered])

   const closeSignUpModal = () => {
      const willUserCloseTheModalWindow = isDirty
         ? window.confirm(
              'Are you sure you want to close the modal window? If you close the entered data will be cleared'
           )
         : true
      if (willUserCloseTheModalWindow) {
         setSearchParams('')
         reset()
      }
   }

   const navigateToLogin = () => {
      const willUserPassToSignIn = isDirty
         ? window.confirm(
              'Are you sure you want to pass to sign-in? If you close the entered data will be cleared'
           )
         : true
      if (willUserPassToSignIn) {
         setSearchParams({ 'sign-in': true })
         reset()
      }
   }
   const submitHandler = (signUpClientData) => {
      dispatch(signUpClient(signUpClientData))
      if (errorMessageWhenPasswordsAreNotTheSame) {
         dispatch(authActions.disableErrorMessageWhenPasswordsAreNotTheSame())
      } else if (errorMessageWhenEmailAlreadyIsAuthorized) {
         dispatch(authActions.disableErrorMessageWhenEmailAlreadyIsAuthorized())
      }
   }

   return (
      <Modal isOpen={isOpenSignUpModal} onCloseBackDrop={closeSignUpModal}>
         <AuthorizationContainer>
            <AuthLinksContainer>
               <AuthLink onClick={navigateToLogin}>Войти</AuthLink>
               <AuthLink isActive={isOpenSignUpModal}>Регистрация</AuthLink>
            </AuthLinksContainer>
            <SignUpContainer onSubmit={handleSubmit(submitHandler)}>
               <FieldsContainer>
                  <RequestedFieldContainer>
                     <FieldName>Ваше имя</FieldName>
                     <Input
                        placeholder="Напишите ваше имя"
                        type="text"
                        {...register('firstName', { required: true })}
                     />
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Email</FieldName>
                     <Input
                        placeholder="Напишите email"
                        type="email"
                        {...register('email', {
                           required: true,
                           pattern: REGEXP_EMAIL,
                        })}
                        error={errorMessageWhenEmailAlreadyIsAuthorized}
                     />
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Пароль</FieldName>
                     <InputForPassword
                        placeholder="Напишите пароль"
                        {...register('password', {
                           required: true,
                           minLength: {
                              value: 6,
                              message: 'Пароль должен быть более 6-ти символов',
                           },
                           maxLength: {
                              value: 32,
                              message: 'Пароль должен быть менее 32-х символов',
                           },
                           pattern: {
                              value: REGEXP_PASSWORD,
                              message:
                                 'Пароль должен содержать одну заглавную букву и одну цифру',
                           },
                        })}
                        error={errorMessageWhenPasswordsAreNotTheSame}
                     />
                     {errors?.password?.message && (
                        <ErrorMessageForExactField>
                           {errors.password.message}
                        </ErrorMessageForExactField>
                     )}
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Подтвердите пароль</FieldName>
                     <InputForPassword
                        placeholder="Подтвердите пароль"
                        {...register('confirmPassword', {
                           required: true,
                        })}
                        error={errorMessageWhenPasswordsAreNotTheSame}
                     />
                  </RequestedFieldContainer>
               </FieldsContainer>
               {errorMessageWhenEmailAlreadyIsAuthorized && (
                  <ErrorMessage>
                     Пользователь с таким email адресом уже существует
                  </ErrorMessage>
               )}
               {errorMessageWhenPasswordsAreNotTheSame && (
                  <ErrorMessage>Введенные пароли не совпадают</ErrorMessage>
               )}
               {Object.values(errors).some(
                  (error) =>
                     error.type === 'required' &&
                     !errorMessageWhenPasswordsAreNotTheSame &&
                     !errorMessageWhenEmailAlreadyIsAuthorized
               ) && <ErrorMessage>Пожалуйста заполните все поля</ErrorMessage>}

               <SubscribeCheckboxContainer>
                  <Checkbox />
                  <p>
                     Подпишитесь на рассылку, чтобы получать новости от eBook
                  </p>
               </SubscribeCheckboxContainer>
               <ButtonsContainer>
                  <Button
                     padding="10px 24px"
                     bgColor={theme.secondary.darkBackground}
                     fontSize="16px"
                     ling-height="21.79px"
                     bgColorHover="#484848"
                     bgColorActive={theme.secondary.orange}
                     fullWidth
                     type="submit"
                  >
                     Создать аккаунт
                  </Button>
                  <Button
                     padding="10px 24px"
                     bgColor="inherit"
                     color="#222222"
                     fontSize="16px"
                     fontWeight={600}
                     ling-height="21.79px"
                     border="1px solid #222222"
                     bgColorActive={theme.secondary.darkBackground}
                     colorActive="#ffffff"
                     fullWidth
                     onClick={() => setSearchParams({ 'sign-up-vendor': true })}
                     type="button"
                  >
                     Стать продавцом на eBook
                  </Button>
               </ButtonsContainer>
            </SignUpContainer>
         </AuthorizationContainer>
      </Modal>
   )
}

const SignUpContainer = styled.form`
   min-height: 510px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const FieldsContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: fit-content;
   margin: 28px 0 25px 0;
`

const RequestedFieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   height: 63px;
   margin-top: 12px;
   position: relative;
`

const SubscribeCheckboxContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   margin-bottom: 25px;
   & p {
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      position: relative;
      left: 35px;
      color: #777777;
   }
`

const ButtonsContainer = styled.div`
   height: 96px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const ErrorMessageForExactField = styled.p`
   color: red;
   font-size: 10px;
   font-family: 'Nunito';
   position: absolute;
   top: 9px;
   text-align: end;
   width: 100%;
`
