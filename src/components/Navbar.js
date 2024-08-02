import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Productcontext } from '../App'


const Navbar = ({setloggedIn}) => {
    const nav = useContext(Productcontext)

    const logout = () =>{
      setloggedIn(false)
    }

  return (
      <>
    <div className='nav'>
    <Link className='link' to='/'>Homepage</Link>
    <br/> <br/>
    <Link  className='link' to='/cart'>Cart {nav.cartValue}</Link>
    <button onClick={logout}>Logout</button>
    </div>
      </>
  )
}

export default Navbar