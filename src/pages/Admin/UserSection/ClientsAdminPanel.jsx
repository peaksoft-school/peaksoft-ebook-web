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
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../../components/UI/Modals/Modal'
import { Button } from '../../../components/UI/Buttons/Button'

import { ReactComponent as Delete } from '../../../assets/icons/delete.svg'

export const ClientsAdminPanel = () => {
   const [isOpen, setIsOpen] = useState(false)
   const navigate = useNavigate()
   const handleClick = (obj) => {
      setIsOpen(obj)
   }

   return (
      <>
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
                  {ClientsData.map((client) => (
                     <TableRow
                        key={client.id}
                        sx={[
                           { '& td': { border: 0 } },
                           {
                              '&:hover': {
                                 backgroundColor: ' rgba(255, 76, 0, 0.08)',
                              },
                           },
                        ]}
                        onClick={() => navigate('vendorUser')}
                     >
                        <TableCell>{client.id}</TableCell>
                        <TableCell>{client.first_name}</TableCell>
                        <TableCell>{client.email}</TableCell>
                        <TableCell>
                           <IconButton
                              onClick={() => handleClick(client)}
                              sx={{
                                 '&:hover': {
                                    backgroundColor: ' rgba(255, 76, 0, 0.08)',
                                 },
                              }}
                              variant="outlined"
                              color="error"
                           >
                              {client.icon}
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
                  <span style={{ fontWeight: '600' }}>{isOpen.first_name}</span>
                  ?
               </p>
               <div>
                  <Button
                     fontSize="16px"
                     color="#A3A3A3"
                     bgColor="white"
                     onClick={() => handleClick(false)}
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

const ClientsData = [
   {
      id: 1,
      first_name: 'Danyelle',
      email: 'dpeetermann0@tmall.com',
      icon: <Delete />,
   },
   {
      id: 2,
      first_name: 'Udall',
      email: 'utimcke1@aboutads.info',
      icon: <Delete />,
   },
   {
      id: 3,
      first_name: 'Sephira',
      email: 'sfairbank2@spiegel.de',
      icon: <Delete />,
   },
   {
      id: 4,
      first_name: 'Vlad',
      email: 'vclulow3@umich.edu',
      icon: <Delete />,
   },
   {
      id: 5,
      first_name: 'Irita',
      email: 'icouvert4@github.io',
      icon: <Delete />,
   },
   {
      id: 6,
      first_name: 'Cam',
      email: 'cgoode5@unblog.fr',
      icon: <Delete />,
   },
   {
      id: 7,
      first_name: 'Gracia',
      email: 'gslowly6@edublogs.org',
      icon: <Delete />,
   },
   {
      id: 8,
      first_name: 'Willa',
      email: 'wcran7@discuz.net',
      icon: <Delete />,
   },
   {
      id: 9,
      first_name: 'Fergus',
      email: 'fharrow8@unesco.org',
      icon: <Delete />,
   },
   {
      id: 10,
      first_name: 'Teresa',
      email: 'tmardy9@photobucket.com',
      icon: <Delete />,
   },
]

const StyledTableCell = styled(TableCell)`
   line-height: 20px;
`
const StyledTableContainer = styled(TableContainer)`
   box-shadow: none;
   width: 1130px;
`
const StyledModal = styled.div`
   width: 460px;
   height: 172px;
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
