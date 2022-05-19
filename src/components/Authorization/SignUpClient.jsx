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
   ErrorMessageForExactField,
   RequestedFieldContainer,
} from '../../assets/styles/styles'
import { authActions } from '../../store/auth-slice'
import {
   CONFIRM_MESSAGE,
   REGEXP_EMAIL,
   SIGN_IN_QUERY_PARAMS,
   SIGN_UP_QUERY_PARAMS,
   SIGN_UP_VENDOR_QUERY_PARAMS,
   VALIDATION_PARAMS_FOR_PASSWORD,
} from '../../utils/constants/general'
import { theme } from '../../utils/constants/theme'
import { Button } from '../UI/Buttons/Button'
import { Checkbox } from '../UI/Checkbox/Checkbox'
import { FieldName } from '../UI/FieldName/FieldName'
import { Input } from '../UI/Inputs/Input'
import { InputForPassword } from '../UI/Inputs/InputForPassword'
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner'
import { Modal } from '../UI/Modals/Modal'

export const SignUpClient = ({ onSubmit }) => {
   const { errorMessageInRegister, isLoading } = useSelector(
      (state) => state.auth
   )

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

   const isOpenSignUpModal = searchParams.get(SIGN_UP_QUERY_PARAMS)

   useEffect(() => {
      window.onbeforeunload = () => {
         return isDirty ? 'Show warning' : null
      }
   }, [isDirty])
   const resetFieldsAndErrors = () => {
      reset()
      dispatch(authActions.disableErrorMessageInRegister())
   }

   const closeSignUpModal = () => {
      const willUserCloseTheModalWindow = isDirty
         ? window.confirm(CONFIRM_MESSAGE.WHENCLOSEMODAL)
         : true
      if (willUserCloseTheModalWindow) {
         setSearchParams('')
         resetFieldsAndErrors()
      }
   }

   const passToSignIn = () => {
      const willUserPassToSignIn = isDirty
         ? window.confirm(CONFIRM_MESSAGE.WHENPASSTOSIGNIN)
         : true
      if (willUserPassToSignIn) {
         setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
         resetFieldsAndErrors()
      }
   }
   const navigateToLogin = () => {
      resetFieldsAndErrors()
      setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
   }

   const submitHandler = (clientData) => {
      onSubmit({ clientData, navigateToLogin })
   }
   const errorForPasswordField =
      errorMessageInRegister === 'Введенные пароли не совпадают'
   const errorForEmailField =
      errorMessageInRegister ===
      'Пользователь с таким email адресом уже существует'
   return (
      <Modal isOpen={isOpenSignUpModal} onCloseBackDrop={closeSignUpModal}>
         <AuthorizationContainer>
            <AuthLinksContainer>
               <AuthLink onClick={passToSignIn}>Войти</AuthLink>
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
                        {...register('confirmPassword', {
                           required: true,
                        })}
                        error={errorForPasswordField}
                     />
                  </RequestedFieldContainer>
               </FieldsContainer>
               {errorMessageInRegister && (
                  <ErrorMessage>{errorMessageInRegister}</ErrorMessage>
               )}
               {Object.values(errors).some(
                  (error) => error.type === 'required'
               ) &&
                  !errorMessageInRegister && (
                     <ErrorMessage>Пожалуйста заполните все поля</ErrorMessage>
                  )}

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
                     {isLoading ? <LoadingSpinner /> : 'Создать аккаунт'}
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
                     onClick={() =>
                        setSearchParams({ [SIGN_UP_VENDOR_QUERY_PARAMS]: true })
                     }
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
