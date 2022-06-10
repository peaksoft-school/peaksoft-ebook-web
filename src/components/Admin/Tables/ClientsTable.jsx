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
import { ClientsTableItem } from './ClientsTableItem'

export const ClientsTable = ({ listOfClients }) => {
   return (
      <StyledTableContainer component={Paper}>
         <Table>
            <TableHead>
               <TableRow sx={{ borderBottom: '1px solid #EDEDF6 ' }}>
                  <StyledTableCell>№</StyledTableCell>
                  <StyledTableCell>ФИО</StyledTableCell>
                  <StyledTableCell>Почта</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {listOfClients?.map((client) => (
                  <ClientsTableItem
                     id={client.id}
                     key={client.id}
                     vendorId={client.id}
                     firstName={client.name}
                     email={client.email}
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
