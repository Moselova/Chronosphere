import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Brands from './Brands.jsx'
import Classics from './Classics.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Brands />
    <Classics />
  </React.StrictMode>,
)
