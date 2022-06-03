import styled from '@emotion/styled'
import ReactDOM from 'react-dom'
import { LoadingSpinner } from './LoadingSpinner'

export const LargeLoadingSpinner = () => {
   return ReactDOM.createPortal(
      <SpinnerBackground>
         <LoadingSpinner />
      </SpinnerBackground>,
      document.getElementById('modal')
   )
}

const SpinnerBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   background-color: #0000006f;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`
