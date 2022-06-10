import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClientsTable } from '../../../components/Admin/Tables/ClientsTable'
import { getAllClients } from '../../../store/admin-slice'

export const Clients = () => {
   const listOfClients = useSelector(
      (state) => state.adminVendors.listOfClients
   )
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllClients())
   }, [])
   return <ClientsTable listOfClients={listOfClients} />
}
