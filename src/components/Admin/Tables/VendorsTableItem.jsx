import styled from '@emotion/styled'
import React, { useState } from 'react'
import { IconButton, TableCell, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as Delete } from '../../../assets/icons/delete-icon.svg'
import { Modal } from '../../UI/Modals/Modal'
import { Button } from '../../UI/Buttons/Button'
import { getAllVendors, removeVendor } from '../../../store/admin-slice'
import { SuccessConfirmModalForAdmin } from '../../UI/Modals/SuccessConfirmModalForAdmin'

export const VendorsTableItem = ({
   vendorId,
   firstName,
   lastName,
   phoneNumber,
   email,
   amountOfBooks,
   id,
}) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false)
   const [showSuccess, setShowSuccess] = useState(false)
   const closeModalHandler = () => setIsOpenDeleteUserModal(false)

   const successModalAfterDelete = () => {
      setShowSuccess(true)
   }
   const navigateAfterSuccessDelete = () => {
      dispatch(getAllVendors())
      closeModalHandler()
   }
   const deleteVendor = () => {
      dispatch(
         removeVendor({
            id,
            navigateAfterSuccessDelete,
            successModalAfterDelete,
         })
      )
   }
   return (
      <>
         <StyledTableRow
            key={vendorId}
            onClick={() => {
               navigate(`${vendorId}/profile`)
            }}
         >
            <TableCell>{vendorId}</TableCell>
            <TableCell>
               {firstName} {lastName}
            </TableCell>
            <TableCell>{phoneNumber}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{amountOfBooks}</TableCell>
            <TableCell>
               <IconButton
                  onClick={(e) => {
                     setIsOpenDeleteUserModal(true)
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
         </StyledTableRow>
         <Modal
            isOpen={isOpenDeleteUserModal}
            onCloseBackDrop={() => setIsOpenDeleteUserModal(false)}
         >
            <StyledModal>
               <p>
                  Вы уверены, что хотите удалить
                  <br />
                  <span style={{ fontWeight: '600' }}>
                     {firstName} {lastName}
                  </span>
                  ?
               </p>
               <div>
                  <Button
                     fontSize="16px"
                     color="#A3A3A3"
                     bgColor="white"
                     onClick={() => setIsOpenDeleteUserModal(false)}
                  >
                     Отменить
                  </Button>
                  <Button
                     fontSize="16px"
                     bgColor="#222222"
                     color="white"
                     bgColorHover="#484848"
                     bgColorActive="#F34901"
                     onClick={deleteVendor}
                  >
                     Удалить
                  </Button>
               </div>
            </StyledModal>
         </Modal>
         <SuccessConfirmModalForAdmin
            isOpen={showSuccess}
            onCloseBackDrop={(e) => {
               e.stopPropagation()
               setShowSuccess(false)
            }}
            title={`Вы успешно удалили ${firstName} ${lastName}`}
         />
      </>
   )
}

const StyledTableRow = styled(TableRow)`
   .MuiTableRow-root td {
      word-break: break-word;
      max-width: 200px;
      font-family: 'Open Sans';
   }
   .MuiTableCell-root {
      font-family: 'Open Sans';
   }
   & td {
      border: 0;
      cursor: pointer;
   }
   &:hover {
      background-color: rgba(255, 76, 0, 0.08);
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
