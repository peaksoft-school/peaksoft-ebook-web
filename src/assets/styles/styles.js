import styled from '@emotion/styled'
import { ReactComponent as LoadingSpinner } from '../icons/loading-spinner.svg'

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
export const StyledLoadingSpinner = styled(LoadingSpinner)`
   animation: LOADING linear 1s infinite;
   @keyframes LOADING {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`
