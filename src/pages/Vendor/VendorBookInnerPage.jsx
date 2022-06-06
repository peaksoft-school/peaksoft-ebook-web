import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OutlookOfBooks } from '../../components/UI/AboutBook/OutlookOfBooks/OutlookOfBooks'
import { getBookById } from '../../store/admin-slice'

export const VendorBookInnerPage = () => {
   const { book } = useSelector((state) => state.admin)
   const dispatch = useDispatch()
   const { bookId } = useParams()
   useEffect(() => {
      dispatch(getBookById(bookId))
   }, [])
   console.log(book)
   return (
      <ParentContainer>
         <OutlookOfBooks />
      </ParentContainer>
   )
}

const ParentContainer = styled.div``
