import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as MeatBallsIcon } from '../../../assets/icons/meatballs-icon.svg'
import { ReactComponent as LikeIcon } from '../../../assets/icons/like-icon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg'
import { MeatballsPopUp } from '../PopUp/MeatballsPopUp'
import { SuccessConfirmModal } from '../Modals/SuccessConfirmModal'
import { Modal } from '../Modals/Modal'
import { Button } from '../Buttons/Button'
import { Input } from '../Inputs/Input'
import { acceptBook, refuseBook } from '../../../store/admin-slice'

export const AdminBookCard = ({
   like,
   amount,
   name,
   date,
   price,
   isInProccess,
   isRejected,
   onClickToBook,
   vendorImageUrl,
   id,
   offset,
   ...props
}) => {
   const [showOptions, setShowOptions] = useState(false)
   const [showSuccess, setShowSuccess] = useState(false)
   const [showModal, setShowModal] = useState(false)
   const [message, setMessage] = useState('')
   const dispatch = useDispatch()
   useEffect(() => {
      setTimeout(() => setShowSuccess(false), 2000)
   }, [showSuccess])

   const showSuccessModal = () => {
      setShowSuccess(true)
   }

   const showDeleteModal = () => {
      setShowModal(true)
   }

   const showPopUp = () => {
      setShowOptions(!showOptions)
   }

   const refusedBook = (e, id) => {
      e.preventDefault()
      dispatch(
         refuseBook({ id, message, showModal: () => showDeleteModal(false) })
      )
   }

   const acceptHandler = async (bookId) => {
      dispatch(
         acceptBook({
            id: { id: bookId },
            showModal: showSuccessModal,
         })
      )
   }

   const options = [
      {
         icon: <EditIcon />,
         title: 'Принять',
         action: (bookId) => acceptHandler(bookId),
      },
      {
         icon: <DeleteIcon />,
         title: 'Удалить',
         action: (bookId) => showDeleteModal(bookId),
      },
   ]

   return isRejected ? (
      <RejectedVendorCardContainer {...props}>
         <RejectedContent onClick={() => setShowOptions(false)}>
            <RegectedVendorCardHeader>
               <WrapperForLike>
                  {like && (
                     <>
                        <LikeIcon />
                        <p>({like})</p>
                     </>
                  )}
                  {amount && <p> В корзине ({amount})</p>}
               </WrapperForLike>
            </RegectedVendorCardHeader>
            <VenderCardMain>
               {vendorImageUrl || <img src={vendorImageUrl} alt="book" />}
               <BookName>{name}</BookName>
               <VenderCardFooter>
                  <span>{date}</span>
                  <h3>{price}c</h3>
               </VenderCardFooter>
            </VenderCardMain>
         </RejectedContent>
         <MeatBallsRejectedContainer onClick={showPopUp}>
            <MeatBallsIcon />
            {showOptions && (
               <MeatballsPopUp options={options} isRejected={isRejected} />
            )}
         </MeatBallsRejectedContainer>
      </RejectedVendorCardContainer>
   ) : (
      <VendorCardContainer {...props} isInProccess={isInProccess}>
         <VenderCardHeader>
            <WrapperForLike>
               {like && (
                  <>
                     <LikeIcon />
                     <p>({like})</p>
                  </>
               )}
               {amount && <p> В корзине ({amount})</p>}
            </WrapperForLike>
            <MeatBallsContainer onClick={showPopUp}>
               <MeatBallsIcon />
               {showOptions && <MeatballsPopUp options={options} id={id} />}
            </MeatBallsContainer>
         </VenderCardHeader>
         <VenderCardMain
            onClick={() => {
               setShowOptions(false)
               onClickToBook()
            }}
         >
            {showSuccess && (
               <SuccessConfirmModal
                  isOpen={showSuccess}
                  onCloseBackDrop={(e) => {
                     e.stopPropagation()
                     setShowSuccess(false)
                  }}
                  title={`"${name}" `}
               />
            )}
            {showModal && (
               <Modal
                  isOpen={showModal}
                  onCloseBackDrop={(e) => {
                     e.stopPropagation()
                     setShowModal(false)
                  }}
               >
                  <StyledModal
                     onClick={(e) => e.stopPropagation()}
                     onSubmit={(e) => refusedBook(e, id)}
                     onChange={(e) => setMessage(e.target.value)}
                  >
                     <div>
                        <p>Причина вашего отклонения</p>
                        <Input
                           type="text"
                           placeholder="Напишите причину отклонения..."
                           value={message}
                        />
                     </div>
                     <div>
                        <Button
                           fontSize="16px"
                           bgColor="#222222"
                           color="white"
                           bgColorHover="#484848"
                           bgColorActive="#F34901"
                           type="submit"
                        >
                           Отправить
                        </Button>
                     </div>
                  </StyledModal>
               </Modal>
            )}
            <img src={vendorImageUrl} alt="book" />
            <StyledDescription>
               <BookName>{name}</BookName>
               <VenderCardFooter>
                  <span>{date}</span>
                  <h3>{price}c</h3>
               </VenderCardFooter>
            </StyledDescription>
         </VenderCardMain>
      </VendorCardContainer>
   )
}

const RejectedVendorCardContainer = styled.div`
   position: relative;
   padding: ${({ paddingR }) => paddingR || '20px 17px 20px 54px'};
   background-color: #ededed;
   display: flex;
   align-items: flex-start;
`
const RejectedContent = styled.div`
   opacity: 0.4;
`
const RegectedVendorCardHeader = styled.div`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
`
const VendorCardContainer = styled.div`
   max-width: ${({ maxWidth }) => maxWidth || '305px'};
   min-height: ${({ minHeight }) => minHeight || '408px'};
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   background-color: ${({ isInProccess }) =>
      isInProccess ? 'rgba(243, 73, 1, 0.08)' : '#ededed'};
   border: ${({ isInProccess }) =>
      isInProccess ? '1px solid #F34901' : 'none'};
`

const BookName = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 120%;
   text-transform: uppercase;
   color: #222222;
   width: 100%;
   overflow-x: hidden;
   height: 15px;
`
const MeatBallsRejectedContainer = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   cursor: pointer;
`
const WrapperForLike = styled.div`
   width: 100%;
   height: 19px;
   display: flex;
   align-items: center;
   p {
      margin-left: 10px;
   }
`
const VenderCardHeader = styled.div`
   position: absolute;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   top: 5px;
   right: -5px;
`
const VenderCardMain = styled.div`
   position: relative;
   cursor: pointer;
   img {
      width: 197px;
      height: 297px;
      object-fit: cover;
   }
`

const StyledDescription = styled.div``
const MeatBallsContainer = styled.div`
   cursor: pointer;
   display: flex;
   flex-direction: row;
   position: absolute;
   right: 15px;
   top: 0;
`
const VenderCardFooter = styled.div`
   width: 197px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   /* margin-top: 7px; */
   h3 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #ff4c00;
   }
`
const StyledModal = styled.form`
   max-width: 523px;
   min-width: 460px;
   height: max-content;
   div {
      padding: 0 20px 20px 20px;
      p {
         padding: 20px 250px 15px 0;
         font-size: 16px;
         line-height: 20px;
      }
   }
   button {
      margin-left: 350px;
   }
   input {
      width: 483px;
      height: 108px;
      margin: 0px auto;
      ::placeholder {
         color: #969696;
         font-size: 14px;
         font-weight: 400;
         position: absolute;
      }
   }
`
