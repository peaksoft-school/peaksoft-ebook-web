import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

export const getClientProfile = createAsyncThunk(
   'client/getClientProfile',
   async (_, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: 'client/profile',
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const editClientProfile = createAsyncThunk(
   'client/editClientProfile',
   async (data, { dispatch }) => {
      dispatch(clientActions.setIsLoading(true))
      try {
         const result = await appFetch({
            path: 'client/profile/settings',
            method: 'PATCH',
            body: data,
         })
         if (result) {
            dispatch(clientActions.setIsShowSuccessModal(true))
         }
         return result
      } catch (error) {
         return dispatch(clientActions.setErrorMessagePassword(error.message))
      }
   }
)

export const removeClientProfile = createAsyncThunk(
   'vendor/removeClientProfile',
   async ({ navigateAfterSuccessDelete }, { rejectWithValue }) => {
      try {
         const result = await appFetch(
            {
               path: `client/profile`,
               method: 'DELETE',
            },
            { asText: true }
         )
         if (result) {
            navigateAfterSuccessDelete()
         }
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   clientSettings: null,
}

export const clientSlice = createSlice({
   name: 'client',
   initialState,
   reducers: {
      setErrorMessagePassword(state, { payload }) {
         if (payload === 'You wrote wrong old password!') {
            state.errorMessagePassword = 'Введенные пароли не совпадают'
         }
         if (payload === "Your new password didn't match!") {
            state.errorMessagePassword = 'Ваш новый пароль не совпадают'
         }
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload
      },
      setIsShowSuccessModal: (state, { payload }) => {
         state.isShowSuccessModal = payload
      },
   },
   extraReducers: {
      [getClientProfile.fulfilled]: (state, { payload }) => {
         state.clientSettings = payload
      },
   },
})

export const clientActions = clientSlice.actions
