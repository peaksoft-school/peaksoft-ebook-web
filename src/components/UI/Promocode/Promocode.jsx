import styled from '@emotion/styled'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { publishPromocode } from '../../../store/vendor-slice'
import { formatDate } from '../../../utils/helpers/general'
import { DatePicker } from '../DatePicker/DatePicker'
import { InputForDiscount } from '../Inputs/InputForDiscount'
import { Modal } from '../Modals/Modal'

export const Promocode = ({ onClosePromocodeModal, isPromocodeModalOpen }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const [startDate, setStartDate] = useState('')

   const [endDate, setEndDate] = useState('')

   const [discount, setDiscount] = useState(0)
   const dispatch = useDispatch()

   const submitHandler = (promocodeData) => {
      const data = {
         ...promocodeData,
         discount: Number(promocodeData.discount),
      }
      dispatch(
         publishPromocode({
            promoData: data,
         })
      )
   }
   const startDateOptions = {
      required: true,
      onChange: (e) =>
         setStartDate(formatDate.DD_MM_YYYY(new Date(e.target.value))),
   }
   const endDateOptions = {
      required: true,
      onChange: (e) =>
         setEndDate(formatDate.DD_MM_YYYY(new Date(e.target.value))),
   }
   const discountOptions = {
      required: true,
      onChange: (e) => {
         if (e.target.value <= 100 && e.target.value.length <= 6) {
            setDiscount(e.target.value)
         }
      },
   }
   const errorMessageHandler = useCallback(() => {
      return Object.values(errors).some((item) => item)
   }, [errors])

   return (
      <Modal
         isOpen={isPromocodeModalOpen}
         onCloseBackDrop={onClosePromocodeModal}
      >
         <PromocodeContainer onSubmit={handleSubmit(submitHandler)}>
            <SingleFieldContainer>
               <p>Промокод</p>
               <InputForPromocode
                  type="text"
                  placeholder="Напишите промокод"
                  {...register('promoName', {
                     required: true,
                  })}
               />
            </SingleFieldContainer>
            <FieldsContainer>
               <SingleFieldContainer>
                  <p>Дата начала</p>
                  <DatePicker
                     selectedDate={startDate}
                     setSelectedDate={setStartDate}
                     {...register('beginningDay', startDateOptions)}
                  />
               </SingleFieldContainer>
               <SingleFieldContainer>
                  <p>Дата завершения</p>
                  <DatePicker
                     selectedDate={endDate}
                     setSelectedDate={setEndDate}
                     {...register('endDay', endDateOptions)}
                  />
               </SingleFieldContainer>
               <DiscountContainer>
                  <p>Процент скидки</p>
                  <InputForDiscount
                     discount={discount}
                     {...register('discount', discountOptions)}
                  />
               </DiscountContainer>
            </FieldsContainer>
            <ButtonContainer>
               {errorMessageHandler() && (
                  <ErrorMessage>Заполните все поля</ErrorMessage>
               )}
               <button type="submit">Создать</button>
            </ButtonContainer>
         </PromocodeContainer>
      </Modal>
   )
}

const PromocodeContainer = styled.form`
   padding: 20px;
   font-family: 'Open Sans';
`
const FieldsContainer = styled.div`
   padding: 20px 0;
   display: flex;
   flex-direction: row;
   align-items: center;
`
const SingleFieldContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: flex-start;
   &:nth-of-type(2) {
      margin: 0 10px;
   }
   & p {
      margin-bottom: 10px;
      max-height: 15px;
      text-overflow: ellipsis;
      font-size: 14px;
   }
`
const InputForPromocode = styled.input`
   transition: border 0.3s ease;
   width: 100%;
   padding: 10px 18px;
   outline: none;
   border-radius: 0;
   border: 1px solid #c4c4c4;
   &:focus {
      border: 1px solid #f10000;
   }
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #969696;
   &::-webkit-input-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &::-moz-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &:-moz-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &:-ms-input-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
   }
   &:focus::-webkit-input-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
   &:focus::-moz-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
   &:focus:-moz-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
   &:focus:-ms-input-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
   }
`
const DiscountContainer = styled.div`
   display: flex;
   width: fit-content;
   flex-direction: column;
   align-items: flex-start;
   & p {
      margin-bottom: 10px;
      max-height: 15px;
      text-overflow: ellipsis;
      text-align: start;
      font-size: 14px;
   }
`
const ButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   position: relative;
   button {
      width: 114px;
      height: 42px;
      background: #1c1c1c;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;
      outline: none;
      border: none;
      &:hover {
         background: #1c1c1cea;
      }
      &:active {
         background: #f10000;
      }
   }
`
const ErrorMessage = styled.p`
   font-weight: 400;
   font-size: 12px;
   line-height: 130%;
   color: red;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
`
