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

const initialState = {
   listOfVendors: [],
   singleVendor: [],
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
   },
})

export const adminPanelVendorActions = adminPanelVendorSlice.actions
