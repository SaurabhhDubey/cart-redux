import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Cart from './components/Cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cart />
  </StrictMode>,
)
