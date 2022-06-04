import { configureStore } from '@reduxjs/toolkit'
import { adminPanelVendorSlice } from './admin-slice'
import { authSlice } from './auth-slice'
import { mainPageVendorBooksSlice } from './vendor-slice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      adminVendors: adminPanelVendorSlice.reducer,
      vendor: mainPageVendorBooksSlice.reducer,
   },
})
