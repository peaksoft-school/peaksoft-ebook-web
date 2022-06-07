import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

export const getGenreList = createAsyncThunk('user/getGenreList', async () => {
   try {
      return await appFetch({
         path: 'books/genre_count',
         method: 'GET',
      })
   } catch (err) {
      return err.message
   }
})

export const getBooksInMain = createAsyncThunk(
   'user/getBooksInMain',
   async () => {
      const urls = [
         { key: 'top3', path: 'three_book' },
         { key: 'bestseller', path: 'bestSeller' },
         { key: 'latestPublications', path: 'get-all-new-book' },
         { key: 'audio', path: 'audio-book' },
         { key: 'ebook', path: 'ebook' },
      ]
      try {
         return await Promise.all(
            urls.map((url) => {
               return appFetch({
                  path: `books/${url.path}`,
                  method: 'GET',
               }).then((data) => {
                  return { [url.key]: data }
               })
            })
         )
      } catch (err) {
         return err
      }
   }
)

const initialState = {
   genreList: [],
   books: {
      top3: [],
      bestseller: [],
      latestPublications: [],
      audio: [],
      ebook: [],
   },
}
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      [getGenreList.fulfilled]: (state, { payload }) => {
         state.genreList = payload
      },
      [getBooksInMain.fulfilled]: (state, { payload }) => {
         state.books = payload.reduce((acc, current) => {
            return {
               ...acc,
               ...current,
            }
         }, state.books)
      },
   },
})

export const userActions = userSlice.actions
