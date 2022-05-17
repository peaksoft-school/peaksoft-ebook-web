import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import { theme } from './utils/constants/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <React.StrictMode>
               <App />
            </React.StrictMode>
         </ThemeProvider>
      </Provider>
   </BrowserRouter>
)
