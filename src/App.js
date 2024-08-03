import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Products from './components/Products'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Payment from './components/Payment'


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
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true' ; 
    setloggedIn(isLoggedIn)
    getData()
  }, []);

  const handleLogin = () => {
    setloggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };
 
  const handleLogout = () => {
    setloggedIn(false);
    localStorage.removeItem('loggedIn')
  };
  return (
     <>
     <Productcontext.Provider value={{data,setdata,cart,setcart,cartValue,setcartValue}}>
      
      <BrowserRouter>
      {loggedIn ? (

       <>
        <Navbar setloggedIn={setloggedIn} onLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/payment' element={<Payment/>} />
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