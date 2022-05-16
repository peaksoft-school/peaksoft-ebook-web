import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { Vendor } from '../pages/Admin/VendorSection/Vendor'
import { VendorDetails } from '../pages/Admin/VendorSection/VendorDetails'
import { Applications } from '../pages/Admin/Applications'
import { Users } from '../pages/Admin/Users'
import { Books } from '../pages/Admin/Books'
import { VendorProfile } from '../pages/Admin/VendorSection/VendorProfile'
import { VendorBooks } from '../pages/Admin/VendorSection/VendorBooks'

const VENDORDATA = [
   {
      vendorId: 1,
      count: 1,
      firstName: 'Мыктыбекdasghdghjas',
      lastName: 'Мыктыбековdbhasdhjga',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermandashdjgsadjasndgashjdgashdgasjhdghajsdgasjhdgajshd0@tmall.com',
      amountOfBooks: 346767,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 2,
      count: 4,
      firstName: 'Мыктыбек2',
      lastName: 'Мыктыбеков2',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 3,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 3,
      count: 1,
      firstName: 'Мыктыбек3',
      lastName: 'Мыктыбеков3',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 4,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 4,
      count: 1,
      firstName: 'Мыктыбек4',
      lastName: 'Мыктыбеков4',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 74,
      dateOfRegistration: '2022-05-14',
   },
   {
      vendorId: 5,
      count: 1,
      firstName: 'Мыктыбек5',
      lastName: 'Мыктыбеков5',
      phoneNumber: '+996 500 123 123',
      email: 'dpeetermann0@tmall.com',
      amountOfBooks: 64,
      dateOfRegistration: '2022-05-14',
   },
]
export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="*" element={<AdminLayout />}>
            <Route path="applications" element={<Applications />} />
            <Route
               path="vendors"
               element={<Vendor vendorData={VENDORDATA} />}
            />
            <Route
               path="vendors/:id"
               element={<VendorDetails vendorData={VENDORDATA} />}
            >
               <Route path="" element={<Navigate to="profile" />} />
               <Route
                  path="profile"
                  element={<VendorProfile vendorData={VENDORDATA} />}
               />
               <Route path="books" element={<VendorBooks />} />
            </Route>
            <Route path="users" element={<Users />} />
            <Route path="books" element={<Books />} />
         </Route>
      </Routes>
   )
}
