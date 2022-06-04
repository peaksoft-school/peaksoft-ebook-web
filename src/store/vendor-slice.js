import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

export const publishPromocode = createAsyncThunk(
   'vendor/publishPromocode',
   async ({ promoData }, { dispatch }) => {
      try {
         const result = await appFetch({
            path: `vendor/promo`,
            method: 'POST',
            body: promoData,
         })
         return result
      } catch (error) {
         return dispatch(error.message)
      }
   }
)

export const getCardOfVendorBooks = createAsyncThunk(
   'vendor/getCardOfVendorBooks',
   async ({ offset }, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `vendor/books/${offset}`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getAllVendorsBooks = createAsyncThunk(
   'vendor/getAllVendorsBooks',
   async ({ data, offset }, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `vendor/${data}/${offset}`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getCountOfVendorsBooks = createAsyncThunk(
   'vendor/getCountOFVendorsBooks',
   async (_, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: 'vendor/count-books',
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getVendorProfile = createAsyncThunk(
   'vendor/getVendorProfile',
   async (_, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: 'vendor/profile',
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const editVendorProfile = createAsyncThunk(
   'vendor/editVendorProfile',
   async (data, { dispatch }) => {
      try {
         const result = await appFetch({
            path: 'vendor/profile/settings',
            method: 'PATCH',
            body: data,
         })
         return result
      } catch (error) {
         return dispatch(vendorActions.setErrorMessagePassword(error.message))
      }
   }
)
export const removeVendorProfile = createAsyncThunk(
   'vendor/removeVendorProfile',
   async ({ navigateAfterSuccessDelete }, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `vendor/profile`,
            method: 'DELETE',
         })
         navigateAfterSuccessDelete()
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const removeVendorBook = createAsyncThunk(
   'vendor/removeVendorBook',
   async (bookId, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `vendor/remove/${bookId}`,
            method: 'DELETE',
         })

         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   cardOfVendorBooks: [],
   basketVendorBooks: [],
   countOfVendorBooks: [],
   allVendorBooks: [],
   vendorProfileEdit: [],
   editProfile: null,
}

export const mainPageVendorBooksSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {
      logout(state) {
         state.token = null
         state.role = null
         state.userName = null
      },
      setErrorMessagePassword(state, { payload }) {
         if (payload === 'You wrote wrong old password!') {
            state.errorMessagePassword = 'Введенные пароли не совпадают'
         }
         if (payload === "Your new password didn't match!") {
            state.errorMessagePassword = 'Ваш новый пароль не совпадают'
         }
      },
   },
   extraReducers: {
      [getCardOfVendorBooks.fulfilled]: (state, { payload }) => {
         state.cardOfVendorBooks = payload
      },
      [getAllVendorsBooks.fulfilled]: (state, { payload }) => {
         console.log(payload)
         state.allVendorBooks = payload
      },

      [getVendorProfile.fulfilled]: (state, { payload }) => {
         state.vendorProfileEdit = payload
      },
      [editVendorProfile.fulfilled]: (state, { payload }) => {
         state.editProfile = payload
      },
      [getCountOfVendorsBooks.fulfilled]: (state, { payload }) => {
         state.countOfVendorBooks = payload
      },
   },
})

export const vendorActions = mainPageVendorBooksSlice.actions
