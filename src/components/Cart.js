import React, { useContext, useEffect, useState } from 'react'
import { Productcontext } from '../App'
import { useNavigate } from 'react-router-dom'



const Cart = () => {

const context = useContext(Productcontext)

const Navigate = useNavigate()

const [totalPrice, settotalPrice] = useState(0)


  useEffect(()=>{

    const newPrice = context.cart.reduce((sum, product)=> sum + parseInt(product.price),0)
    settotalPrice(newPrice.toFixed(2))

  },[context.cart])

  const handleClear = (e) =>{
    e.preventDefault()
    context.setcart([])
    context.setcartValue(0)
  }

  const handleClick = (e) =>{

    const indexRemove = context.cart.findIndex((x)=> x === e )

    if(indexRemove !== -1){

      const updateCart = [...context.cart]

      updateCart.splice(indexRemove,1)

      context.setcart(updateCart)
      context.setcartValue(updateCart.length)
    }

  }
  const proceedToPayment = () =>{
    Navigate('/payment');
  }
  // Navigate to products page
  // const goToProductsPage = () =>{
  //   <Link className='link' to='/products'>Homepage</Link>
  // }
  return (
     <>
      <div className='cart-page'>
      <button className='products-page-button' onClick={()=> Navigate('/products') }> Go to Products Page</button>
    
      <button className='clear-cart-button' onClick={handleClear}>Clear Cart</button>
    {
      context.cart.length
       ? 
      <>  
      <h1 className='cart-title'>You are Ordered</h1>
     <div className='cart-items'>
     {context.cart.map((pro,i)=>{
        return(
          <div key={i} className='cart-item'>
          <h1>{pro.title}</h1>
          <img className='cart-item-image' src={pro.image} alt='mobile' height={100} width={100}/>
          <h4>Price : {pro.price}</h4>
          <button className='remove-button' onClick={()=>handleClick(pro)}>Remove from Cart</button>
          </div>
        ) 
      })}
     </div>
      <h1 className='total-price'>Total Price : {totalPrice}</h1>
      <button onClick={proceedToPayment}> Proceed to Payment</button>
      </> 
      : 
      <>
      <h1 className='empty-cart'>Cart is Empty</h1>
       </>
    }

      </div>
     </>
  )
}

export default Cart