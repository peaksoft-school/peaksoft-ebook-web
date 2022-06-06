/* eslint-disable no-alert */
import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import InputMask from 'react-input-mask'
import {
   AuthLink,
   AuthLinksContainer,
   AuthorizationContainer,
   ErrorMessage,
   ErrorMessageForExactField,
   RequestedFieldContainer,
} from '../../assets/styles/styles'
import {
   CONFIRM_MESSAGE,
   INPUT_MASK_NUMBER,
   REGEXP_EMAIL,
   SIGN_IN_QUERY_PARAMS,
   SIGN_UP_QUERY_PARAMS,
   SIGN_UP_VENDOR_QUERY_PARAMS,
   VALIDATION_PARAMS_FOR_PASSWORD,
} from '../../utils/constants/general'
import { Button } from '../UI/Buttons/Button'
import { FieldName } from '../UI/FieldName/FieldName'
import { Input } from '../UI/Inputs/Input'
import { InputForPassword } from '../UI/Inputs/InputForPassword'
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner'
import { Modal } from '../UI/Modals/Modal'
import { authActions } from '../../store/auth-slice'
import { theme } from '../../utils/constants/theme'

export const SignUpVendor = ({ onSubmit }) => {
   const { isLoading, errorMessageInRegister } = useSelector(
      (state) => state.auth
   )
   const [searchParams, setSearchParams] = useSearchParams()
   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors, isDirty },
      reset,
   } = useForm({
      mode: 'onSubmit',
   })

   const isOpenSignUpVendorModal = searchParams.get(SIGN_UP_VENDOR_QUERY_PARAMS)

   useEffect(() => {
      window.onbeforeunload = () => {
         return isDirty ? 'Show warning' : null
      }
   }, [isDirty])

   const resetFieldsAndErrors = () => {
      reset()
      dispatch(authActions.disableErrorMessageInRegister())
   }

   const closeSignInModal = () => {
      const willVendorCloseTheModalWindow = isDirty
         ? window.confirm(CONFIRM_MESSAGE.WHENCLOSEMODAL)
         : true
      if (willVendorCloseTheModalWindow) {
         setSearchParams('')
         resetFieldsAndErrors()
      }
   }
   const passToSignIn = () => {
      const willVendorPassToSignIn = isDirty
         ? window.confirm(CONFIRM_MESSAGE.WHENPASSTOSIGNIN)
         : true
      if (willVendorPassToSignIn) {
         setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
         resetFieldsAndErrors()
      }
   }
   const passToSignUpClient = () => {
      const willVendorPassToSignUpForClient = isDirty
         ? window.confirm(CONFIRM_MESSAGE.WHENPASSTOSIGNUPFORCLIENT)
         : true
      if (willVendorPassToSignUpForClient) {
         setSearchParams({ [SIGN_UP_QUERY_PARAMS]: true })
         resetFieldsAndErrors()
      }
   }
   const navigateToLoginAfterSuccessRegister = () => {
      setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
      resetFieldsAndErrors()
   }
   const submitHandler = (vendorData) => {
      onSubmit({ vendorData, navigateToLoginAfterSuccessRegister })
   }
   const errorForPasswordField =
      errorMessageInRegister === 'Введенные пароли не совпадают'
   const errorForEmailField =
      errorMessageInRegister ===
      'Пользователь с таким email адресом уже существует'
   return (
      <Modal
         isOpen={isOpenSignUpVendorModal}
         onCloseBackDrop={closeSignInModal}
      >
         <AuthorizationContainer>
            <AuthLinksContainer>
               <AuthLink onClick={passToSignIn}>Войти</AuthLink>
               <AuthLink
                  isActive={isOpenSignUpVendorModal}
                  onClick={passToSignUpClient}
               >
                  Регистрация
               </AuthLink>
            </AuthLinksContainer>
            <SignUpVendorContainer onSubmit={handleSubmit(submitHandler)}>
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
                     <FieldName>Ваша фамилия</FieldName>
                     <Input
                        placeholder="Напишите вашу фамилию"
                        type="text"
                        {...register('lastName', { required: true })}
                     />
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Номер вашего телефона</FieldName>
                     <InputMask
                        mask={INPUT_MASK_NUMBER}
                        maskChar={false}
                        {...register('number', { required: true })}
                     >
                        {(inputProps) => (
                           <Input
                              placeholder="+996 (_ _ _) _ _  _ _  _ _"
                              type="tel"
                              {...inputProps}
                           />
                        )}
                     </InputMask>
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Email</FieldName>
                     <Input
                        placeholder="Напишите email"
                        type="email"
                        {...register('email', {
                           required: true,
                           pattern: {
                              value: REGEXP_EMAIL,
                              message: 'Некорректный email',
                           },
                        })}
                        error={errorForEmailField}
                     />
                     {errors?.email?.message && (
                        <ErrorMessageForExactField>
                           {errors.email.message}
                        </ErrorMessageForExactField>
                     )}
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Пароль</FieldName>
                     <InputForPassword
                        placeholder="Напишите пароль"
                        {...register(
                           'password',
                           VALIDATION_PARAMS_FOR_PASSWORD
                        )}
                        error={errorForPasswordField}
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
                        {...register('confirmPassword', { required: true })}
                        error={errorForPasswordField}
                     />
                  </RequestedFieldContainer>
               </FieldsContainer>
               {Object.values(errors).some(
                  (error) =>
                     error.type === 'required' && !errorMessageInRegister
               ) && <ErrorMessage>Пожалуйста заполните все поля</ErrorMessage>}
               {errorMessageInRegister && (
                  <ErrorMessage>{errorMessageInRegister}</ErrorMessage>
               )}

               <Button
                  padding="10px 24px"
                  bgColor={theme.secondary.darkBackground}
                  fontSize="16px"
                  ling-height="21.79px"
                  bgColorHover="#484848"
                  bgColorActive={theme.secondary.orange}
                  fullWidth
               >
                  {isLoading ? <LoadingSpinner /> : 'Создать аккаунт'}
               </Button>
            </SignUpVendorContainer>
         </AuthorizationContainer>
      </Modal>
   )
}

const SignUpVendorContainer = styled.form`
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
