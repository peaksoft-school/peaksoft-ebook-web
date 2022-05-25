import { configureStore } from '@reduxjs/toolkit'
import { adminPanelVendorSlice } from './admin-slice'
import { authSlice } from './auth-slice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      adminVendors: adminPanelVendorSlice.reducer,
   },
})
