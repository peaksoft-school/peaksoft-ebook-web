import { configureStore } from '@reduxjs/toolkit'
import { adminSlice } from './admin-slice'
import { authSlice } from './auth-slice'
import { userSlice } from './user-slice'
import { vendorSlice } from './vendor-slice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      admin: adminSlice.reducer,
      vendor: vendorSlice.reducer,
      user: userSlice.reducer,
   },
})
