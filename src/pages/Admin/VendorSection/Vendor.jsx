import { useState } from 'react'
import {
   TableContainer,
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Paper,
   IconButton,
} from '@mui/material'
import styled from '@emotion/styled/macro'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../../components/UI/Modals/Modal'
import { Button } from '../../../components/UI/Buttons/Button'
import { ReactComponent as Delete } from '../../../assets/icons/delete-icon.svg'

export const Vendor = ({ vendorData }) => {
   const navigate = useNavigate()
   const [isOpen, setIsOpen] = useState(false)
   const showModal = (obj) => {
      setIsOpen(obj)
   }
   return (
      <>
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
                  {vendorData.map((vendor) => (
                     <TableRow
                        key={vendor.id}
                        sx={[
                           { '& td': { border: 0 } },
                           {
                              '&:hover': {
                                 backgroundColor: ' rgba(255, 76, 0, 0.08)',
                              },
                           },
                        ]}
                        onClick={() => {
                           navigate(`${vendor.vendorId}/profile`)
                        }}
                     >
                        <TableCell>{vendor.count}</TableCell>
                        <TableCell>
                           {vendor.firstName} {vendor.lastName}
                        </TableCell>
                        <TableCell>{vendor.phoneNumber}</TableCell>
                        <TableCell>{vendor.email}</TableCell>
                        <TableCell>{vendor.amountOfBooks}</TableCell>
                        <TableCell>
                           <IconButton
                              onClick={(e) => {
                                 showModal(vendor)
                                 e.stopPropagation()
                              }}
                              sx={{
                                 '&:hover': {
                                    backgroundColor: ' rgba(255, 76, 0, 0.08)',
                                 },
                              }}
                              variant="outlined"
                              color="error"
                           >
                              <Delete />
                           </IconButton>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </StyledTableContainer>
         <Modal isOpen={isOpen}>
            <StyledModal>
               <p>
                  Вы уверены, что хотите удалить
                  <br />
                  <span style={{ fontWeight: '600' }}>
                     {isOpen.firstName} {isOpen.lastName}
                  </span>
                  ?
               </p>
               <div>
                  <Button
                     fontSize="16px"
                     color="#A3A3A3"
                     bgColor="white"
                     onClick={() => showModal(false)}
                  >
                     Отменить
                  </Button>
                  <Button
                     fontSize="16px"
                     bgColor="#222222"
                     color="white"
                     bgColorHover="#484848"
                     bgColorActive="#F34901"
                  >
                     Удалить
                  </Button>
               </div>
            </StyledModal>
         </Modal>
      </>
   )
}

const StyledTableCell = styled(TableCell)`
   font-size: 14px;
   font-weight: 700;
   line-height: 19px;
   .MuiTableRow-root td {
      word-break: break-word;
      max-width: 200px;
   }
`

const StyledTableContainer = styled(TableContainer)`
   padding-top: 97px;
   box-shadow: none;
   width: 1130px;
   .MuiTableRow-root td {
      word-break: break-word;
      max-width: 200px;
   }
`

const StyledModal = styled.div`
   max-width: 460px;
   min-width: 460px;
   height: max-content;
   p {
      padding: 20px 68px 30px 69px;
      font-size: 18px;
      line-height: 28px;
   }
   div {
      display: flex;
      justify-content: space-between;
      padding: 0 91px 20px 91px;
   }
`
