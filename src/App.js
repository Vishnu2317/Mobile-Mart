import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Products from './components/Products'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'

export const Productcontext = createContext()
const url = "https://mobileproducts.onrender.com/products"
const App = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [data, setdata] = useState([])
  const [cart, setcart] = useState([])
  const [cartValue, setcartValue] = useState(cart.length)

  
  const getData = async () =>{
    const response = await axios.get(url)
  
    setdata(response.data)
  }

  useEffect(()=>{
    getData()
  })

  const handleLogin = () => {
    setloggedIn(true);
  };



  return (
     <>
     <Productcontext.Provider value={{data,setdata,cart,setcart,cartValue,setcartValue}}>
      
      <BrowserRouter>
      {loggedIn ? (

       <>
        <Navbar setloggedIn={setloggedIn}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>

       </>
      ) : (
        <Login onLogin={handleLogin}   />
      )}
      
      
    </BrowserRouter>
    </Productcontext.Provider>
     </>
  )
}

export default App