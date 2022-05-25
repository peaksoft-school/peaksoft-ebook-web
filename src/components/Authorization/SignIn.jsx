import React from 'react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
   AuthLink,
   AuthLinksContainer,
   AuthorizationContainer,
   ErrorMessage,
} from '../../assets/styles/styles'
import { Button } from '../UI/Buttons/Button'
import { Input } from '../UI/Inputs/Input'
import { InputForPassword } from '../UI/Inputs/InputForPassword'
import { FieldName } from '../UI/FieldName/FieldName'
import { Modal } from '../UI/Modals/Modal'
import { authActions } from '../../store/auth-slice'
import { theme } from '../../utils/constants/theme'
import {
   SIGN_IN_QUERY_PARAMS,
   SIGN_UP_QUERY_PARAMS,
} from '../../utils/constants/general'
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner'

export const SignIn = ({ onSubmit }) => {
   const { errorMessageInAuthorization, isLoading } = useSelector(
      (state) => state.auth
   )
   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm()

   const [searchParams, setSearchParams] = useSearchParams()

   const isOpenSignInModal = searchParams.get(SIGN_IN_QUERY_PARAMS)

   const resetFieldsAndErrors = () => {
      reset()
      dispatch(authActions.disableErrorMessageInAuthorization())
   }

   const closeSignInModal = () => {
      setSearchParams('')
      resetFieldsAndErrors()
   }
   const navigateToRegister = () => {
      resetFieldsAndErrors()
      setSearchParams({ [SIGN_UP_QUERY_PARAMS]: true })
   }
   const submitHandler = (data) => {
      onSubmit({ data, closeSignInModal })
   }
   return (
      <Modal isOpen={isOpenSignInModal} onCloseBackDrop={closeSignInModal}>
         <AuthorizationContainer>
            <AuthLinksContainer>
               <AuthLink isActive={isOpenSignInModal}>Войти</AuthLink>
               <AuthLink onClick={navigateToRegister}>Регистрация</AuthLink>
            </AuthLinksContainer>
            <SignInContainer onSubmit={handleSubmit(submitHandler)}>
               <FieldsContainer>
                  <RequestedFieldContainer>
                     <FieldName>Email</FieldName>
                     <Input
                        placeholder="Напишите email"
                        {...register('email', { required: true })}
                        type="email"
                     />
                  </RequestedFieldContainer>
                  <RequestedFieldContainer>
                     <FieldName>Пароль</FieldName>
                     <InputForPassword
                        placeholder="Напишите пароль"
                        {...register('password', { required: true })}
                     />
                  </RequestedFieldContainer>
               </FieldsContainer>
               {errorMessageInAuthorization && (
                  <ErrorMessage>{errorMessageInAuthorization}</ErrorMessage>
               )}
               {(errors.email || errors.password) &&
                  !errorMessageInAuthorization && (
                     <ErrorMessage>Пожалуйста заполните все поля</ErrorMessage>
                  )}
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
                  {isLoading ? <LoadingSpinner /> : 'Войти'}
               </Button>
            </SignInContainer>
         </AuthorizationContainer>
      </Modal>
   )
}

const SignInContainer = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const FieldsContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   min-height: 138px;
   margin: 40px 0 30px 0;
`
const RequestedFieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   min-height: 63px;
`
