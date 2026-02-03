import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import Cart from './components/Cart'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <Cart />
  </Provider>
)
