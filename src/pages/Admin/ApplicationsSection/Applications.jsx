import styled from '@emotion/styled/macro'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../components/UI/Buttons/Button'
import { AdminBookCard } from '../../../components/UI/Card/AdminBookCard'
import { theme } from '../../../utils/constants/theme'
import {
   getCountOfBooksInProgress,
   getListOfApplications,
} from '../../../store/admin-slice'

export const Applications = () => {
   const [offset, setOffset] = useState(1)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const navigateToBook = (bookId) => {
      navigate(`${bookId}`)
   }
   const applications = useSelector(
      (state) => state.adminVendors.listOfApplications
   )
   const countOfApplications = useSelector(
      (state) => state.adminVendors.countOfBooksInProgress
   )

   useEffect(() => {
      dispatch(getListOfApplications({ offset }))
   }, [offset])

   useEffect(() => {
      dispatch(getCountOfBooksInProgress())
   }, [])
   return (
      <ApplicationsContainer>
         <HeadContainer>
            <span>Всего: {countOfApplications.all}</span>
            <span>
               Непросмотренные:
               <p>{countOfApplications.unread}</p>
            </span>
         </HeadContainer>
         <ContentContainer>
            {applications?.map((application) => (
               <AdminBookCard
                  // minWidth="269px"
                  // maxHeight="412px"
                  // minHeight="408px"
                  // padding="10px 0 0 35px"
                  // marginTop="15px"
                  key={application.bookId}
                  id={application.bookId}
                  vendorImageUrl={application.fileInformation?.firstPhoto}
                  date={application.yearOfIssue}
                  name={application.title}
                  price={application.price}
                  isInProccess={application.adminWatch === false}
                  onClickToBook={() => navigateToBook(application.bookId)}
                  offset={offset}
               />
            ))}
         </ContentContainer>
         {countOfApplications.countOfPages > offset && (
            <Button
               padding="0.5% 47% 0.5% 48%"
               lHeight="18px"
               bgColor={theme.secondary.whiteBackground}
               weight="400"
               color={theme.secondary.placeholderGray}
               border="1px solid #c4c4c4"
               bgColorHover={theme.secondary.orange}
               colorHover={theme.primary.white}
               onClick={() => {
                  setOffset((prevOffset) => prevOffset + 1)
               }}
            >
               Смотреть больше
            </Button>
         )}
      </ApplicationsContainer>
   )
}

const ApplicationsContainer = styled.div`
   padding-top: 55px;
`
const HeadContainer = styled.div`
   display: flex;
   padding-bottom: 22px;
   color: #b5b5b5;
   span {
      padding-right: 22px;
      line-height: 20px;
      font-size: 16px;
      font-weight: 400;
      display: flex;
      p {
         color: #ff4c00;
         padding-left: 5px;
      }
   }
`
const ContentContainer = styled.div`
   padding-top: 10px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-gap: 2rem;
   padding-bottom: 70px;
`
