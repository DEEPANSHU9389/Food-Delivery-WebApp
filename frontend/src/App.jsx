import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
       <Route path='' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/order' element={<Placeorder/>}/>

      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
