import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

export function Modals({ open, onClose, children }) {
   return (
      <Modal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>{children}</Box>
      </Modal>
   )
}
const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   bgcolor: 'background.paper',
   border: 'none',
   textAlign: 'center',
}
