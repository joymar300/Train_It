import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import NavbarHome from './componets/navbar/NavbarHome.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layaout/Home/home.jsx'
import About from './layaout/About/About.jsx'
import Footer from './componets/footer/footer.jsx'
import Login from './layaout/Login/login.jsx'
import HomeUser from './layaout/Home/home_user/home_user.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App/>
    </NextUIProvider>
  </React.StrictMode>,
)
