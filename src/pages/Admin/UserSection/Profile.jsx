import styled from '@emotion/styled'

export const Profile = () => {
   return (
      <UserProfile>
         <User>
            <li>Имя</li>
            <br />
            <li>Мыктыбек</li>
            <br />
            <li>Почта</li>
            <br />
            <li>Мыктыбек@gmail.com</li>
         </User>

         <UserDataProfile>
            <li>Дата регистрации</li>
            <br />
            <li>Мыктыбек</li>
         </UserDataProfile>
         {/* <button>удалить профиль</button> */}
      </UserProfile>
   )
}
const UserProfile = styled.div`
   display: flex;
`
const User = styled.ul`
   /* width: 200px; */
   padding: 200px;
   list-style: none;
   /* display: flex;
    align-items: stretch; */
`
const UserDataProfile = styled.ul`
   list-style: none;
   padding: 200px 0;
`
