import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'
import { LOCAL_STORAGE_USER_KEY } from '../utils/constants/general'
import { localstorage } from '../utils/helpers/general'

export const signInUser = createAsyncThunk(
   'auth/signInUser',
   async (userSignInData) => {
      try {
         return await appFetch({
            path: 'auth/sign-in',
            method: 'POST',
            body: userSignInData,
         })
      } catch (error) {
         return error.message
      }
   }
)
export const signUpClient = createAsyncThunk(
   'auth/signUpClient',
   async (clientSignUpData, { rejectWithValue }) => {
      try {
         return await appFetch({
            path: 'auth/signup/client',
            method: 'POST',
            body: clientSignUpData,
         })
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
const localData = localstorage.get(LOCAL_STORAGE_USER_KEY) || {}

const initialState = {
   isAuth: !!localData.token,
   isRegistered: false,
   isError: null,
   token: null,
   role: localData.role || null,
   userName: localData.userName || null,
   errorMessageWhenPasswordsAreNotTheSame: false,
   errorMessageWhenEmailAlreadyIsAuthorized: false,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      disableError(state) {
         state.isError = false
      },
      disableErrorMessageWhenPasswordsAreNotTheSame(state) {
         state.errorMessageWhenPasswordsAreNotTheSame = false
      },
      disableErrorMessageWhenEmailAlreadyIsAuthorized(state) {
         state.errorMessageWhenEmailAlreadyIsAuthorized = false
      },
      disableIsRegistered(state) {
         state.isRegistered = false
      },
   },
   extraReducers: {
      [signInUser.fulfilled]: (state, { payload }) => {
         if (payload && payload.token) {
            state.isAuth = true
            state.token = payload.token
            state.role = payload.role
            state.userName = payload.firstName
         } else {
            state.isError = true
         }
      },
      [signUpClient.fulfilled]: (state) => {
         state.isRegistered = true
      },
      [signUpClient.rejected]: (state, { payload }) => {
         if (payload === 'Passwords are not the same!') {
            state.errorMessageWhenPasswordsAreNotTheSame = true
         } else if (payload === 'Error: Email is already in use!') {
            state.errorMessageWhenEmailAlreadyIsAuthorized = true
         }
      },
   },
})

export const authActions = authSlice.actions
export default authSlice
