import React from 'react'
import ContactUs from './components/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Services from './pages/Services'
import About from './pages/About'

import Footer from './components/Footer'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/Login' element={<Login/>}/>

      <Route path='/About' element={<About/>}/>

      <Route path='/Services' element={<Services/>}/>

      <Route path='/Footer' element={<Footer/>}/>

    </Routes>
  )
}

export default App
