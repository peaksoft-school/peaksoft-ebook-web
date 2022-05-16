import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import App from './App'
import { theme } from './utils/constants/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </ThemeProvider>
   </BrowserRouter>
)
