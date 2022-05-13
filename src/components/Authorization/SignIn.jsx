import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
   AuthLink,
   AuthLinksContainer,
   AuthorizationContainer,
   theme,
} from '../../assets/styles/styles'
import { Button } from '../UI/Buttons/Button'
import { Input } from '../UI/Inputs/Input'
import { InputForPassword } from '../UI/Inputs/InputForPassword'
import { FieldName } from '../UI/FieldName/FieldName'
import { Modal } from '../UI/Modals/Modal'
import { authActions, signInUser } from '../../store/auth-slice'

export const SignIn = () => {
   const { isAuth, isError } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm()

   const [searchParams, setSearchParams] = useSearchParams()

   const isOpenSignInModal = searchParams.get('sign-in')

   useEffect(() => {
      if (isAuth && isOpenSignInModal) {
         setSearchParams('')
      }
   }, [isAuth, isOpenSignInModal])

   useEffect(() => {
      if (isError) {
         reset()
      }
   }, [isError])

   const closeSignInModal = () => {
      setSearchParams('')
      reset()
   }
   const submitHandler = (data) => {
      dispatch(signInUser(data))
   }
   const navigateToRegister = () => {
      setSearchParams({ 'sign-up': true })
      reset()
      dispatch(authActions.disableError())
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
                        onFocus={() => dispatch(authActions.disableError())}
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
               {isError && (
                  <ErrorMessage>
                     Неправильно указан Email и/или пароль
                  </ErrorMessage>
               )}
               {(errors.email || errors.password) && (
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
                  Войти
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
const ErrorMessage = styled.p`
   font-family: 'Nunito';
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   color: #f10000;
   margin-bottom: 30px;
`
