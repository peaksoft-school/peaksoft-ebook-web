import styled from '@emotion/styled/macro'
import React, { forwardRef } from 'react'
import { ReactComponent as CalendarIcon } from '../../../assets/icons/calendar.svg'
import { formatDate } from '../../../utils/helpers/general'

export const DatePicker = forwardRef(
   ({ date, setSelectedDate, selectedDate, ...props }, ref) => {
      const today = formatDate.YYYY_MM_DD(new Date(Date.now()))
      return (
         <DatePickerContainer>
            <input type="date" {...props} ref={ref} min={today} />
            <span>{selectedDate || 'дд/мм/гггг'}</span>
            <CalendarIcon />
         </DatePickerContainer>
      )
   }
)
const DatePickerContainer = styled.div`
   min-width: 158px;
   max-width: 200px;
   height: 42px;
   position: relative;
   display: flex;
   font-family: 'Open Sans';
   border: 1px solid #c4c4c4;
   & input {
      width: 100%;
      background: inherit;
      outline: none;
      border: none;
   }
   & span {
      position: absolute;
      top: 50%;
      left: 35%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: -2;
      font-weight: 400;
      font-size: 16px;
      color: #969696;
   }
   & svg {
      position: absolute;
      top: 50%;
      left: 85%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: -2;
   }
   & input[type='date']::-webkit-datetime-edit-text,
   input[type='date']::-webkit-datetime-edit-month-field,
   input[type='date']::-webkit-datetime-edit-day-field,
   input[type='date']::-webkit-datetime-edit-year-field {
      -webkit-appearance: none;
      display: none;
   }
   input[type='date']::-webkit-inner-spin-button,
   input[type='date']::-webkit-calendar-picker-indicator {
      opacity: 0;
      width: 100%;
      cursor: pointer;
   }
`
