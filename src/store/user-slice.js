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
      dispatch(userActions.setIsLoading(true))
      try {
         const result = await appFetch({
            path: 'client/profile/settings',
            method: 'PATCH',
            body: data,
         })
         if (result) {
            dispatch(userActions.setIsShowSuccessModal(true))
         }
         return result
      } catch (error) {
         return dispatch(userActions.setErrorMessagePassword(error.message))
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
   clientSettings: null,
}
export const userSlice = createSlice({
   name: 'user',
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
      resetBook(state) {
         state.books = {
            top3: [],
            bestseller: [],
            latestPublications: [],
            audio: [],
            ebook: [],
         }
      },
   },
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
      [getClientProfile.fulfilled]: (state, { payload }) => {
         state.clientSettings = payload
      },
   },
})

export const userActions = userSlice.actions
