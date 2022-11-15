import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)