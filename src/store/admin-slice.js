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
         return console.log(error.message)
      }
   }
)

export const getSingleVendor = createAsyncThunk(
   'admin_panel_vendors/getSingleVendor',
   async (id, { rejectWithValue }) => {
      console.log(id)
      try {
         const result = await appFetch({
            path: `admin/vendor/${id}`,
            method: 'GET',
         })
         // console.log(result)
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getListOfVendorBooks = createAsyncThunk(
   'admin_panel_vendors/getListOfVendorBooks',
   async (data, id, { rejectWithValue }) => {
      console.log(data)
      try {
         const result = await appFetch({
            path: `admin/vendors/${id}/${data}`,
            method: 'GET',
         })
         console.log(result)
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
         const result = await appFetch({
            path: `admin/removeUser/${id}`,
            method: 'DELETE',
         })
         console.log(result)
         navigateAfterSuccessDelete()
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   listOfVendors: [],
   singleVendor: null,
   listOfVendorBooks: [],
}

export const adminPanelVendorSlice = createSlice({
   name: 'admin_panel_vendors',
   initialState,
   reducers: {},
   extraReducers: {
      [getAllVendors.fulfilled]: (state, { payload }) => {
         state.listOfVendors = payload
      },
      [getSingleVendor.fulfilled]: (state, { payload }) => {
         state.singleVendor = payload
      },
      [getListOfVendorBooks.fulfilled]: (state, { payload }) => {
         state.listOfVendorBooks = payload
      },
   },
})

export const adminPanelVendorActions = adminPanelVendorSlice.actions
