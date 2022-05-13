import { NavLink, Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { Profile } from './Profile'
import { OperationHistory } from './OperationHistory'

export const UserProfile = () => {
   return (
      <>
         <VendorProfileContainer>
            <span> Пользователь / Мыктыбек Мыктыбеков</span>
            <ContainerOfLinks>
               <ul>
                  <li>
                     <NavLink
                        to="profile"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Профиль
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="history"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        История Операций
                     </NavLink>
                  </li>
               </ul>
            </ContainerOfLinks>
         </VendorProfileContainer>
         <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<OperationHistory />} />
         </Routes>
      </>
   )
}

const VendorProfileContainer = styled.div`
   width: 600px;
   height: 56px;
`
const ContainerOfLinks = styled.div`
   width: 1147px;
   height: 456px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   /* padding: 89px 400px 60px 400px; */
   padding: 89px 500px;

   ul {
      list-style: none;
      /* width: 100%; */
      display: flex;
      justify-content: space-between;
   }
   a {
      color: black;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0 45px 7px 45px;
   }
   .active {
      color: #f34901;
      border-bottom: 2px solid #f34901;
      font-weight: 600;
   }
`
