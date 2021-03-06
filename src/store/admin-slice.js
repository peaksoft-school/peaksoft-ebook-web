/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

export const getAllVendors = createAsyncThunk(
   'admin/getAllVendors',
   async (_, { fulfillWithValue }) => {
      try {
         const result = await appFetch({
            path: 'admin/vendors',
            method: 'GET',
         })
         return fulfillWithValue(result)
      } catch (error) {
         return error.message
      }
   }
)

export const getSingleVendor = createAsyncThunk(
   'admin/getSingleVendor',
   async (id, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `admin/vendor/${id}`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getListOfVendorBooks = createAsyncThunk(
   'admin/getListOfVendorBooks',
   async ({ data, id, offset }, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `admin/vendor/${id}/${data}/${offset}`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const removeVendor = createAsyncThunk(
   'admin/removeVendor',
   async (
      { id, navigateAfterSuccessDelete, successModalAfterDelete },
      { rejectWithValue }
   ) => {
      try {
         const result = await appFetch(
            {
               path: `admin/user/${id}`,
               method: 'DELETE',
            },
            { asText: true }
         )
         if (result) {
            navigateAfterSuccessDelete()
            successModalAfterDelete()
         }
         return
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getListOfApplications = createAsyncThunk(
   'admin/getListOfApplications',
   async ({ offset }, { rejectWithValue }) => {
      try {
         const response = await appFetch({
            path: `admin/books-in-process/${offset}`,
            method: 'GET',
         })
         const result = {
            response,
            offset,
         }
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getBookById = createAsyncThunk(
   'admin/getBookById',
   async (id, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `admin/book/${id}`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getCountOfBooksInProgress = createAsyncThunk(
   'admin/getCountOfBooksInProgress',
   async (_, { fulfillWithValue }) => {
      try {
         const result = await appFetch({
            path: 'admin/countOfBooksInProgress',
            method: 'GET',
         })
         return fulfillWithValue(result)
      } catch (error) {
         return error.message
      }
   }
)
export const acceptBook = createAsyncThunk(
   'admin/acceptBook',
   async ({ id, showModal, navigate }, { dispatch }) => {
      try {
         const result = await appFetch(
            {
               path: 'admin/book-accept',
               body: id,
               method: 'POST',
            },
            { asText: true }
         )
         if (result) {
            dispatch(getListOfApplications({ offset: 1 }))
            dispatch(getCountOfBooksInProgress())
            showModal()
            navigate()
         }
         return
      } catch (error) {
         return error.message
      }
   }
)
export const refuseBook = createAsyncThunk(
   'admin/refuseBook',
   async ({ id, message, showModal, navigate }, { dispatch }) => {
      try {
         const result = await appFetch(
            {
               path: `admin/book-refuse/${id}`,
               method: 'POST',
               body: { reason: message },
            },
            { asText: true }
         )
         if (result) {
            dispatch(getListOfApplications({ offset: 1 }))
            dispatch(getCountOfBooksInProgress())
            showModal()
            navigate()
         }
         return
      } catch (error) {
         return error.message
      }
   }
)

export const getGenres = createAsyncThunk(
   'admin_panel_books/getGenre',
   async (_, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `admin/genre_count`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getAcceptedBooks = createAsyncThunk(
   'admin_panel_books/getAcceptedBooks',
   async ({ genreId, bookType, offset }, { rejectWithValue }) => {
      try {
         const response = await appFetch({
            path: `admin/books-accepted/${offset}`,
            method: 'GET',
            params: {
               genreId,
               bookType,
            },
         })
         const result = {
            response,
            offset,
         }
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getAllClients = createAsyncThunk(
   'admin_panel_clients/getAllClients',
   async (_, { fulfillWithValue }) => {
      try {
         const result = await appFetch({
            path: 'admin/clients',
            method: 'GET',
         })
         return fulfillWithValue(result)
      } catch (error) {
         return error.message
      }
   }
)

export const getSingleClient = createAsyncThunk(
   'admin_panel_vendors/getSingleClient',
   async (id, { rejectWithValue }) => {
      try {
         const result = await appFetch({
            path: `admin/client/${id}`,
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   listOfVendors: [],
   listOfClients: [],
   singleVendor: null,
   singleClient: null,
   listOfVendorBooks: [],
   listOfApplications: [],
   countOfBooksInProgress: [],
   book: null,
   acceptedBooks: [],
   listOfGenres: [],
}

export const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {
      resetBook(state) {
         state.book = null
      },
      resetVendorBooks(state) {
         state.listOfVendorBooks = []
      },
   },
   extraReducers: {
      [getAllVendors.fulfilled]: (state, { payload }) => {
         state.listOfVendors = payload
      },
      [getAllVendors.rejected]: (state) => {
         state.listOfVendors = []
      },
      [getSingleVendor.fulfilled]: (state, { payload }) => {
         state.singleVendor = payload
      },
      [getListOfVendorBooks.fulfilled]: (state, { payload }) => {
         state.listOfVendorBooks = payload
      },
      [getBookById.fulfilled]: (state, { payload }) => {
         state.book = payload
      },
      [getCountOfBooksInProgress.fulfilled]: (state, { payload }) => {
         state.countOfBooksInProgress = payload
      },
      [getListOfApplications.fulfilled]: (state, { payload }) => {
         if (payload.offset === 1) {
            state.listOfApplications = payload.response
         } else {
            state.listOfApplications.push(...payload.response)
         }
      },
      [getAcceptedBooks.fulfilled]: (state, { payload }) => {
         if (payload.offset === 1) {
            state.acceptedBooks = payload.response
         } else {
            state.acceptedBooks.push(...payload.response)
         }
      },
      [getGenres.fulfilled]: (state, { payload }) => {
         state.listOfGenres = payload
      },
      [getAllClients.fulfilled]: (state, { payload }) => {
         state.listOfClients = payload
      },
      [getSingleClient.fulfilled]: (state, { payload }) => {
         state.singleClient = payload
      },
   },
})

export const adminActions = adminSlice.actions
