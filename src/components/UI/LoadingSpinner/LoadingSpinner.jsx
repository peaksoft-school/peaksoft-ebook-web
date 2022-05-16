import styled from '@emotion/styled'
import React from 'react'
import { ReactComponent as LoadingSpinnerIcon } from '../../../assets/icons/loading-spinner.svg'

export const LoadingSpinner = () => {
   return <StyledLoadingSpinner />
}

const StyledLoadingSpinner = styled(LoadingSpinnerIcon)`
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
