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
   async ({
      files,
      id,
      resetForm,
      showSuccessNotification,
      showErrorNotification,
   }) => {
      try {
         const formData = new FormData()
         Object.keys(files).forEach((fileKey) => {
            formData.set(fileKey, files[fileKey])
         })
         const result = fileFetch({
            path: `aws/upload-file/${id}`,
            method: 'POST',
            body: formData,
         })
         if (result) {
            resetForm()
            showSuccessNotification()
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
   genres: {
      genresList: [],
   },
}

export const vendorSlice = createSlice({
   name: 'vendor',
   initialState,
   reducers: {},
   extraReducers: {
      [getAllGenres.fulfilled]: (state, { payload }) => {
         state.genres.genresList = payload
      },
   },
})

export const vendorActions = vendorSlice.actions
