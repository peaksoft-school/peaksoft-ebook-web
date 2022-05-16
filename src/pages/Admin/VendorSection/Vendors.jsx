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

export const Vendors = () => {
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
                  {VENDORDATA.map((vendor) => (
                     <TableRow
                        key={vendor.vendorId}
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
         <Modal isOpen={isOpen} onCloseBackDrop={() => showModal(false)}>
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
