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
   async ({ data, files }, { dispatch }) => {
      try {
         const result = await appFetch({
            path: 'vendor/new-book',
            method: 'POST',
            body: data,
         })
         if (result) {
            const { id } = result
            dispatch(uploadImagesOfBook({ files, id }))
         }
      } catch (error) {
         console.log(error)
      }
   }
)

export const uploadImagesOfBook = createAsyncThunk(
   'vendor/uploadImagesOfBook',
   async ({ files, id }) => {
      try {
         const formData = new FormData()
         const result = await Promise.all(
            Object.values(files).map((image) => {
               formData.set('fileInformation', image)
               const result = fileFetch({
                  path: `aws/upload-file/${id}`,
                  method: 'POST',
                  body: formData,
               })
               return console.log(result)
            })
         )
         return result
      } catch (error) {
         return console.log(error)
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
