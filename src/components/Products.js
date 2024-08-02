import React, { useContext, useEffect, useState } from 'react'
import { Productcontext } from '../App'


const Products = () => {
  
  const context = useContext(Productcontext);

  const [product, setproduct] = useState([]);

  const [searchInp, setsearchInp] = useState("");

  const getProduct = () => {
    if(context.data.length > 0){   
      setproduct(context.data);
    }
  };

  useEffect(() => {
    getProduct();
  })

  
  const filterProd = product.filter((x) =>
    x.mobilename.toLowerCase().includes(searchInp.toLowerCase())
  );

  return (
     <>
      <h1>Product Page</h1>
      <div>
      <input
        value={searchInp}
        onChange={(e) => setsearchInp(e.target.value)}
        type="text"
        placeholder='Search Products...'
        style={{padding: '10px', marginBottom: '20px', width: '100%', maxwidth: '400px', boxSizing:'border-box'}}
      />
      </div>
      <div className='products'>
        {filterProd.map((e,i)=>{
            return(
                <div key={i} className='product-card'>
                <h1>{e.mobilename}</h1>
                <img src={e.image} alt='mobiles' height={100} width={100}/>
                <p>{e.desc}</p>
                <h4>Rating : {e.rating.rate}</h4>
                <h4>Available Count : {e.rating.count}</h4>
                <h3>Price : {e.price}</h3>
                <button onClick={()=>{
                    context.cart.push(e);
                    context.setcartValue(context.cart.length)
                }}>Add to Cart</button>
                </div>
            )
        })}
      </div>
     </>
  )
}

export default Products