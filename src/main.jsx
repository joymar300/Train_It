import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import NavbarHome from './componets/NavbarHome.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layaout/Home/home.jsx'
import About from './layaout/About/About.jsx'
import Footer from './componets/footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <NavbarHome/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>

          </Routes>
          <Footer></Footer>
      </BrowserRouter>
      
    </NextUIProvider>
  </React.StrictMode>,
)
