import { configureStore } from '@reduxjs/toolkit'
import { adminPanelVendorSlice } from './admin-panel-vendor-slice'
import { authSlice } from './auth-slice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      adminVendors: adminPanelVendorSlice.reducer,
   },
})
