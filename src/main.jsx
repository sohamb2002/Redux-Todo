import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider as Providers } from'react-redux'
import App from './App.jsx'
import {store} from './app/store.js'
import { BrowserRouter } from'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Providers store={store}>
    <App />
    </Providers>
    </BrowserRouter>
 
    
  </StrictMode>,
)
