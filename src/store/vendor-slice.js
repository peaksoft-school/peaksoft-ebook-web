import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'
import { fileFetch } from '../api/fileFetch'

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
export const getAllGenres = createAsyncThunk(
   'vendor/getAllGenres',
   async () => {
      try {
         return await appFetch({
            path: 'vendor/get-all-genres',
            method: 'GET',
         })
      } catch (error) {
         return error.message
      }
   }
)

export const addBook = createAsyncThunk(
   'vendor/addBook',
   async (
      { data, files, showErrorNotification, resetForm, resetImages },
      { dispatch }
   ) => {
      dispatch(vendorActions.setIsLoading(true))
      try {
         const result = await appFetch({
            path: 'vendor/new-book',
            method: 'POST',
            body: data,
         })
         if (result) {
            const { id } = result
            return dispatch(
               uploadImagesOfBook({
                  id,
                  showErrorNotification,
                  files,
                  resetForm,
                  resetImages,
               })
            )
         }
         return result
      } catch (error) {
         return showErrorNotification(
            'Не удалось загрузить книгу, попробуйте ещё раз'
         )
      }
   }
)

export const uploadImagesOfBook = createAsyncThunk(
   'vendor/uploadImagesOfBook',
   async (
      { files, id, resetForm, showErrorNotification, resetImages },
      { dispatch }
   ) => {
      try {
         const formData = new FormData()
         Object.keys(files).forEach((fileKey) => {
            formData.set(fileKey, files[fileKey])
         })
         const result = await fileFetch({
            path: `aws/upload-file/${id}`,
            method: 'POST',
            body: formData,
         })
         if (result && result['file information Id ']) {
            resetForm()
            resetImages()
            dispatch(vendorActions.setIsShowSuccessModal(true))
            return result
         }
         if (!result) {
            showErrorNotification(
               'Не удалось загрузить книгу, попробуйте ещё раз test'
            )
         }
         return result
      } catch (error) {
         return showErrorNotification(
            'Не удалось загрузить книгу, попробуйте ещё раз'
         )
      }
   }
)

const initialState = {
   cardOfVendorBooks: [],
   countOfVendorBooks: [],
   allVendorBooks: [],
   vendorSettings: null,
   genres: {
      genresList: [],
   },
   isLoading: false,
   isShowSuccessModal: false,
}

export const vendorSlice = createSlice({
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
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload
      },
      setIsShowSuccessModal: (state, { payload }) => {
         state.isShowSuccessModal = payload
      },
   },
   extraReducers: {
      [getCardOfVendorBooks.fulfilled]: (state, { payload }) => {
         state.cardOfVendorBooks = payload
      },
      [getAllVendorsBooks.fulfilled]: (state, { payload }) => {
         state.allVendorBooks = payload
      },

      [getVendorProfile.fulfilled]: (state, { payload }) => {
         state.vendorSettings = payload
      },

      [getCountOfVendorsBooks.fulfilled]: (state, { payload }) => {
         state.countOfVendorBooks = payload
      },
      [getAllGenres.fulfilled]: (state, { payload }) => {
         state.genres.genresList = payload
      },
      [uploadImagesOfBook.fulfilled]: (state) => {
         state.isLoading = false
      },
      [uploadImagesOfBook.rejected]: (state) => {
         state.isLoading = false
      },
      [addBook.rejected]: (state) => {
         state.isLoading = false
      },
   },
})

export const vendorActions = vendorSlice.actions
