import styled from '@emotion/styled'

export const AuthorizationContainer = styled.div`
   min-width: 497px;
   padding: 40px 30px;
`

export const AuthLinksContainer = styled.div`
   margin: 0 auto;
   width: 245px;
   display: flex;
   justify-content: space-between;
`

export const AuthLink = styled.p`
   font-family: 'Open Sans';
   font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
   font-size: 20px;
   line-height: 130%;
   color: ${({ isActive }) => (isActive ? '#222222' : '#969696')};
   cursor: pointer;
`
export const ErrorMessage = styled.p`
   font-family: 'Nunito';
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   color: #f10000;
   margin-bottom: 30px;
`

export const RequestedFieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   height: 63px;
   margin-top: 12px;
   position: relative;
`
export const ErrorMessageForExactField = styled.p`
   color: red;
   font-size: 10px;
   font-family: 'Nunito';
   position: absolute;
   top: 9px;
   text-align: end;
   width: 100%;
`
