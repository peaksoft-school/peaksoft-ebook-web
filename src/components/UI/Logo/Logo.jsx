import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Logo = (props) => {
   return (
      <StyledLogo {...props} to="/">
         eBooK
      </StyledLogo>
   )
}

const StyledLogo = styled(Link)`
   background-color: #222222;
   text-decoration: none;
   width: 147px;
   height: 85px;
   font-family: 'Open Sans';
   font-weight: 400;
   color: #ffffff;
   text-align: center;
   justify-content: center;
   margin: ${({ margin }) => margin || ''};
   padding: 20px;
   font-size: 30px;
   cursor: pointer;
`
