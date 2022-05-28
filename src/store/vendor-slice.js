import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

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
