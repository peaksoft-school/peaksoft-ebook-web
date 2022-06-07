import { configureStore } from '@reduxjs/toolkit'
import { adminPanelVendorSlice } from './admin-slice'
import { authSlice } from './auth-slice'
import { userSlice } from './user-slice'
import { vendorSlice } from './vendor-slice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      adminVendors: adminPanelVendorSlice.reducer,
      vendor: vendorSlice.reducer,
      user: userSlice.reducer,
   },
})
