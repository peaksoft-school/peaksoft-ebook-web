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
   async ({ clientData, navigateToLogin }, { dispatch, rejectWithValue }) => {
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
         return rejectWithValue(error.message)
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
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setErrorMessageInAuthorization(state) {
         state.errorMessageInAuthorization =
            'Неправильно указан Email и/или пароль'
      },
      disableErrorMessageInAuthorization(state) {
         state.errorMessageInAuthorization = null
      },
      disableErrorMessageInRegister(state) {
         state.errorMessageInRegister = null
      },
   },
   extraReducers: {
      [signInUser.fulfilled]: (state, { payload }) => {
         if (payload && payload.token) {
            state.isAuthorized = true
            state.token = payload.token
            state.role = payload.role
            state.userName = payload.firstName
         }
      },
      [signUpClient.rejected]: (state, { payload }) => {
         if (payload === 'Passwords are not the same!') {
            state.errorMessageInRegister = 'Введенные пароли не совпадают'
         }
         if (payload === 'Error: Email is already in use!') {
            state.errorMessageInRegister =
               'Пользователь с таким email адресом уже существует'
         }
      },
   },
})

export const authActions = authSlice.actions
export default authSlice
