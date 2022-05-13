import styled from '@emotion/styled'

export const theme = {
   primary: {
      black: '#222222',
      white: '#FFFFFF',
      gray: '#A3A3A3',
   },
   secondary: {
      orange: '#F34901',
      yellow: '#F8DF00',
      darkBackground: '#1C1C1C',
      whiteBackground: '#F8F8F8',
      strokeGray: '#C4C4C4',
      placeholderGray: '#969696',
   },
   tertiary: {
      red: '#F10000',
      green: '#00AB1B',
      errorRed: '#FFF5F5',
   },
}

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
