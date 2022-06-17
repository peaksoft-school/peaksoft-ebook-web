import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'
import { getBookById } from './admin-slice'

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

export const postLike = createAsyncThunk(
   'user/postLike',
   async ({ id, showNotification }, { dispatch }) => {
      try {
         const result = await appFetch({
            path: 'client/like',
            method: 'POST',
            body: {
               id,
            },
         })
         if (result && result.message) {
            return dispatch(getBookById(id))
               .unwrap()
               .then(() =>
                  showNotification({ message: 'Книга добавлена в избранное' })
               )
         }
         return result
      } catch (err) {
         return err?.message === 'You already put like to this book!'
            ? showNotification({
                 title: 'Ошибка',
                 message: 'Книга уже добавлена в избранное',
                 type: 'error',
              })
            : showNotification({
                 title: 'Ошибка',
                 message: 'Не удалось добавить в избранное',
                 type: 'error',
              })
      }
   }
)
export const addToBasket = createAsyncThunk(
   'user/addToBasket',
   async ({ id, showNotification }, { dispatch }) => {
      try {
         const result = await appFetch({
            path: 'client/books/basket',
            method: 'POST',
            body: {
               id,
            },
         })
         if (result && result.message) {
            return dispatch(getBookById(id))
               .unwrap()
               .then(() => {
                  showNotification({ message: 'Книга добавлена в корзину' })
                  dispatch(getCountOfBookInCount())
               })
         }
         return result
      } catch (err) {
         return err?.message === 'You already put this book in your basket'
            ? showNotification({
                 title: 'Ошибка',
                 message: 'Книга уже добавлена в корзину',
                 type: 'error',
              })
            : showNotification({
                 title: 'Ошибка',
                 message: 'Не удалось добавить книгу в корзину',
                 type: 'error',
              })
      }
   }
)
export const getCountOfBookInCount = createAsyncThunk(
   'user/addToBasket',
   async () => {
      try {
         const result = await appFetch({
            path: 'client/client-basket',
            method: 'GET',
         })
         return result
      } catch (err) {
         return err.message
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
   countOfBooksInBasket: 0,
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
      [getCountOfBookInCount.fulfilled]: (state, { payload }) => {
         state.countOfBooksInBasket = payload.length
      },
      [getCountOfBookInCount.rejected]: (state) => {
         state.countOfBooksInBasket = 0
      },
   },
})

export const userActions = userSlice.actions
