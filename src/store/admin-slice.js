/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appFetch } from '../api/appFetch'

export const getAllVendors = createAsyncThunk(
   'admin_panel_vendors/getAllVendors',
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
   'admin_panel_vendors/getSingleVendor',
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
   'admin_panel_vendors/getListOfVendorBooks',
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
   'admin_panel_vendors/removeVendor',
   async ({ id, navigateAfterSuccessDelete }, { rejectWithValue }) => {
      try {
         const result = await appFetch(
            {
               path: `admin/removeUser/${id}`,
               method: 'DELETE',
            },
            { asText: true }
         )
         navigateAfterSuccessDelete()
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getListOfApplications = createAsyncThunk(
   'admin_panel_applications/getListOfApplications',
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
export const getBook = createAsyncThunk(
   'admin_panel_applications/getBook',
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
   'admin_panel_applications/getCountOfBooksInProgress',
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
   'admin_panel_applications/acceptBook',
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
   'admin_panel_applications/refuseBook',
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

const initialState = {
   listOfVendors: [],
   singleVendor: null,
   listOfVendorBooks: [],
   listOfApplications: [],
   countOfBooksInProgress: [],
   book: null,
}

export const adminPanelVendorSlice = createSlice({
   name: 'admin_panel_vendors',
   initialState,
   reducers: {},
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
      [getBook.fulfilled]: (state, { payload }) => {
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
   },
})

export const adminPanelVendorActions = adminPanelVendorSlice.actions
