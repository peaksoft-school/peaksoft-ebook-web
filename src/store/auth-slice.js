import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'
import { LOCAL_STORAGE_USER_KEY } from '../utils/constants/general'
import { localstorage } from '../utils/helpers/general'

export const signInUser = createAsyncThunk(
   'auth/signInUser',
   async ({ data, closeSignInModal }, { dispatch }) => {
      try {
         dispatch(authActions.disableErrorMessageInAuthorization())
         const result = await appFetch({
            path: 'auth/sign-in',
            method: 'POST',
            body: data,
         })
         if (result.token) {
            closeSignInModal()
            return result
         }
         if (!result.token) {
            dispatch(authActions.setErrorMessageInAuthorization())
         }
         return null
      } catch (error) {
         return dispatch(authActions.setErrorMessageInAuthorization())
      }
   }
)
export const signUpClient = createAsyncThunk(
   'auth/signUpClient',
   async ({ clientData, navigateToLogin }, { dispatch }) => {
      dispatch(authActions.disableErrorMessageInRegister())
      try {
         const result = await appFetch({
            path: 'auth/signup/client',
            method: 'POST',
            body: clientData,
         })
         if (result.message) {
            navigateToLogin()
         }
         return result
      } catch (error) {
         return dispatch(authActions.setErrorMessageInRegister(error.message))
      }
   }
)

export const signUpVendor = createAsyncThunk(
   'auth/signUpVendor',
   async (
      { vendorData, navigateToLoginAfterSuccessRegister },
      { dispatch }
   ) => {
      dispatch(authActions.disableErrorMessageInRegister())
      try {
         const result = await appFetch({
            path: 'auth/signup/vendor',
            method: 'POST',
            body: vendorData,
         })
         if (result.message) {
            navigateToLoginAfterSuccessRegister()
         }
         return result
      } catch (error) {
         return dispatch(authActions.setErrorMessageInRegister(error.message))
      }
   }
)

const localData = localstorage.get(LOCAL_STORAGE_USER_KEY) || {}

const initialState = {
   isAuthorized: !!localData.token,
   errorMessageInAuthorization: null,
   token: localData.token || null,
   role: localData.role || null,
   userName: localData.userName || null,
   errorMessageInRegister: null,
   isLoading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setErrorMessageInAuthorization(state) {
         state.isLoading = false
         state.errorMessageInAuthorization =
            'Неправильно указан Email и/или пароль'
      },
      setErrorMessageInRegister(state, { payload }) {
         state.isLoading = false
         if (payload === 'Passwords are not the same!') {
            state.errorMessageInRegister = 'Введенные пароли не совпадают'
         }
         if (payload === 'Error: Email is already in use!') {
            state.errorMessageInRegister =
               'Пользователь с таким email адресом уже существует'
         }
      },
      disableErrorMessageInAuthorization(state) {
         state.errorMessageInAuthorization = null
      },
      disableErrorMessageInRegister(state) {
         state.errorMessageInRegister = null
      },
   },
   extraReducers: {
      [signInUser.pending]: (state) => {
         state.isLoading = true
      },
      [signInUser.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         if (payload && payload.token) {
            state.isAuthorized = true
            state.token = payload.token
            state.role = payload.role
            state.userName = payload.firstName
         }
      },
      [signUpClient.pending]: (state) => {
         state.isLoading = true
      },
      [signUpClient.fulfilled]: (state) => {
         state.isLoading = false
      },
      [signUpVendor.pending]: (state) => {
         state.isLoading = true
      },
      [signUpVendor.fulfilled]: (state) => {
         state.isLoading = false
      },
   },
})

export const authActions = authSlice.actions
