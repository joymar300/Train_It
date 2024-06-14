

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layaout/Home/home.jsx'
import About from './layaout/About/About.jsx'
import Footer from './componets/footer/footer.jsx'
import Login from './layaout/Login/login.jsx'
import HomeUser from './layaout/Home/home_user/home_user.jsx'
import TestHome from './layaout/test/test.jsx'




function App() {
  return (
    <>
      <BrowserRouter>
        
        {/* <NavbarHome/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>} />

              <Route path='/home' element={<HomeUser/>}>
                <Route index element={<TestHome/>}/>
                <Route path='about' element={<About/>}/>
              </Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App
