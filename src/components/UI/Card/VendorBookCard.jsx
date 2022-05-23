import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ReactComponent as MeatBallsIcon } from '../../../assets/icons/meatballs-icon.svg'
import { ReactComponent as LikeIcon } from '../../../assets/icons/like-icon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg'
import { MeatballsPopUp } from '../PopUp/MeatballsPopUp'

export const VendorBookCard = ({
   like,
   amount,
   name,
   date,
   price,
   isInProccess,
   isRejected,
   onClickToBook,
   vendorImageUrl,
   ...props
}) => {
   const [isPopUpVisisble, setIsPopUpVisisble] = useState(false)

   const changeVisiblePopUpHandler = () => {
      setIsPopUpVisisble((prevState) => !prevState)
   }
   const options = [
      {
         icon: <EditIcon />,
         title: 'Редактировать',
      },
      {
         icon: <DeleteIcon />,
         title: 'Удалить',
      },
   ]

   return isRejected ? (
      <RejectedVendorCardContainer {...props}>
         <RejectedContent onClick={() => setIsPopUpVisisble(false)}>
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
               <img src={vendorImageUrl} alt="book" />
               <p>{name}</p>
               <VenderCardFooter>
                  <span>{date}</span>
                  <h3>{price}c</h3>
               </VenderCardFooter>
            </VenderCardMain>
         </RejectedContent>
         <MeatBallsRejectedContainer onClick={changeVisiblePopUpHandler}>
            <MeatBallsIcon />
         </MeatBallsRejectedContainer>
         {isPopUpVisisble && (
            <MeatballsPopUp options={options} isRejected={isRejected} />
         )}
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
            <MeatBallsContainer onClick={changeVisiblePopUpHandler}>
               <MeatBallsIcon />
            </MeatBallsContainer>
            {isPopUpVisisble && <MeatballsPopUp options={options} />}
         </VenderCardHeader>
         <VenderCardMain
            onClick={() => {
               setIsPopUpVisisble(false)
               onClickToBook()
            }}
         >
            <img src={vendorImageUrl} alt="book" />
            <p>{name}</p>
            <VenderCardFooter>
               <span>{date}</span>
               <h3>{price}c</h3>
            </VenderCardFooter>
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
   min-width: ${({ minWidth }) => minWidth || '300px'};
   max-height: ${({ maxHeight }) => maxHeight || '427px'};
   min-height: ${({ minHeight }) => minHeight || '408px'};
   padding: ${({ padding }) => padding || '20px 17px 20px 54px'};
   background-color: ${({ isInProccess }) =>
      isInProccess ? 'rgba(243, 73, 1, 0.08)' : '#ededed'};
   border: ${({ isInProccess }) =>
      isInProccess ? '1px solid #F34901' : 'none'};
`

const MeatBallsRejectedContainer = styled.div`
   position: absolute;
   right: 15px;
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
   position: relative;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const VenderCardMain = styled.div`
   width: 197px;
   margin-top: 15px;
   cursor: pointer;
   img {
      width: 100%;
      height: 297px;
   }
   p {
      margin-top: ${({ marginTop }) => marginTop || '8px'}
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 120%;
      text-transform: uppercase;
      color: #222222;
   }
`
const MeatBallsContainer = styled.div`
   cursor: pointer;
`
const VenderCardFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #8a8a8a;
   margin-top: 7px;
   h3 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #ff4c00;
   }
`
