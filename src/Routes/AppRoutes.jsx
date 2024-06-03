import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/home/Home'
import About from '../Pages/About/About'
import Packages from '../Pages/Packages/Packages'
import Gallery from '../Pages/Gallery/Gallery'
import Pricing from '../Pages/Pricing/Pricing'
import Contact from '../Pages/Contact/Contact'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path="/packages" element={<Packages/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes