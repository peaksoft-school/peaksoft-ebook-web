import React from 'react'
import {
   TableContainer,
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Paper,
} from '@mui/material'
import styled from '@emotion/styled'
import { VendorsTableItem } from './VendorsTableItem'

export const VendorsTable = ({ listOfVendors }) => {
   return (
      <StyledTableContainer component={Paper}>
         <Table>
            <TableHead>
               <TableRow sx={{ borderBottom: '1px solid #EDEDF6 ' }}>
                  <StyledTableCell>№</StyledTableCell>
                  <StyledTableCell>Имя</StyledTableCell>
                  <StyledTableCell>Номер телефона</StyledTableCell>
                  <StyledTableCell>Почта</StyledTableCell>
                  <StyledTableCell>Количество книг</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {listOfVendors?.map((vendor) => (
                  <VendorsTableItem
                     id={vendor.vendorId}
                     key={vendor.vendorId}
                     vendorId={vendor.vendorId}
                     firstName={vendor.firstName}
                     lastName={vendor.lastName}
                     phoneNumber={vendor.phoneNumber}
                     email={vendor.email}
                     amountOfBooks={vendor.amountOfBooks}
                  />
               ))}
            </TableBody>
         </Table>
      </StyledTableContainer>
   )
}

const StyledTableCell = styled(TableCell)`
   font-size: 14px;
   font-weight: 700;
   line-height: 19px;
`

const StyledTableContainer = styled(TableContainer)`
   padding-top: 97px;
   box-shadow: none;
   .MuiTableRow-root td {
      word-break: break-word;
      max-width: 200px;
   }
   .MuiTableRow-root {
      height: 50px;
   }
`
