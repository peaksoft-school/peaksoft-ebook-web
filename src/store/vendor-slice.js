import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'
import { fileFetch } from '../api/fileFetch'

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
   async ({ data, showErrorNotification, ...restData }, { dispatch }) => {
      dispatch(vendorActions.setIsLoading(true))
      try {
         const result = await appFetch({
            path: 'vendor/new-book',
            method: 'POST',
            body: data,
         })
         if (result) {
            const { id } = result
            dispatch(
               uploadImagesOfBook({
                  id,
                  showErrorNotification,
                  ...restData,
               })
            )
         }
      } catch (error) {
         showErrorNotification('Не удалось загрузить книгу, попробуйте ещё раз')
      }
   }
)

export const uploadImagesOfBook = createAsyncThunk(
   'vendor/uploadImagesOfBook',
   async ({ files, id, resetForm, showErrorNotification }) => {
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
         if (!result) {
            return showErrorNotification(
               'Не удалось загрузить книгу, попробуйте ещё раз'
            )
         }
         resetForm()
         return result
      } catch (error) {
         return showErrorNotification(
            'Не удалось загрузить книгу, попробуйте ещё раз'
         )
      }
   }
)

const initialState = {
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
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload
      },
   },
   extraReducers: {
      [getAllGenres.fulfilled]: (state, { payload }) => {
         state.genres.genresList = payload
      },
      [uploadImagesOfBook.fulfilled]: (state) => {
         state.isLoading = false
         state.isShowSuccessModal = true
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
