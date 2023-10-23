import React, { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css'

export default function Cart({setActive}) {
    setActive('btn4');
    const [products,setProducts]= useState([]);
    let [count,setCount]= useState(0);

    useEffect(()=>{
       fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(data=>setProducts(data))
      .catch((err) => console.log(err));
    },[count]);

     function remove(id){
       console.log('id',id);

       fetch(`http://localhost:3000/products/${id}`,{
            method:"DELETE",
            headers:{'Content-Type':'application/json'}
        }).then(res=>{console.log(res);setCount(++count);})
     }
    
  return (
    <div className='cart'>
      <div className='cart-left'>
        {products==0 && <h1>No Products!!!</h1> }
        {products.map(product=>(
          <div key={product.id}>
            <div>
              <img src={product.image} alt="" />
            </div>

            <div style={{position:'relative'}}>
              <div>{product.brand}</div>
              <div>{product.title}</div>
              <div>{product.price}</div>
              <div id='buttons'>
                {/* <span id='update-quantity'>Update Quantity</span>&emsp; */}
                <span onClick={()=>remove(product.id)} id='remove-cart-item'>Remove</span>
              </div>
            </div>  

            <div>
              Price
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Total Amount</h2>
      </div>
    </div>
  )
}
