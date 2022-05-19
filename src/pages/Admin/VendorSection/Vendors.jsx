import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VendorsTable } from '../../../components/Admin/Tables/VendorsTable'
import { getAllVendors } from '../../../store/admin-slice'

export const Vendors = () => {
   const { listOfVendors } = useSelector((state) => state.adminVendors)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllVendors())
   }, [])
   return <VendorsTable listOfVendors={listOfVendors} />
}
