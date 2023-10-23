import React from 'react';
import './Home.css';
import { useNavigate,Link } from "react-router-dom";
import data from "../static.json";

const {shirts} = data;
const {pants} = data;
const {tShirts} = data;

export default function Home({setActive}) {
    // to show active component
    setActive('btn1');

    const navigate = useNavigate();

    function addToCart(e) {
      e.preventDefault();

      console.log('target',e.target.querySelector('.brand').innerText);

      let product_object={
        brand:e.target.querySelector('.brand').innerText,
        title:e.target.querySelector('.title').innerText,
        price:Number(e.target.querySelector('.price').innerText),
        image:e.target.querySelector('.image').src,
        id:Math.floor(Math.random()*1000)
      };
      console.log('product_object',product_object);

      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(product_object),
      })
      .then((res) => navigate("/Cart"))
      .catch((err) => console.log(err));
    }
    
  return (
    <div className='home'>
      <div className='category shirt'>
        <h2 style={{width:'100%',height:'100px'}}>
          Shirts
        </h2>

        {
          shirts.map((shirt)=>(
            <div>
              <form  onSubmit={addToCart}>
                <div className='image-box'>
                  <img className='image' src={shirt.imageSrc} alt=""/>
                  <button className='add-to-cart'>Add To Cart</button>
                </div>
                <div className='brand'>{shirt.brand}</div>
                <div className='title'>{shirt.title}</div>
                <div className='price'>Rs {shirt.price}</div> 
                <Link to={`/getProduct/${shirt.id}?edit=shirts`}><div id='linkDiv'></div></Link>
              </form>
            </div>
          ))
        }
      </div>

      <div className='category pant'>
        <h2 style={{width:'100%',height:'100px'}}>
          Pants
        </h2>

        {
          pants.map((pant)=>(
            <div>
              <form  onSubmit={addToCart}>
                <div className='image-box'>
                  <img className='image' src={pant.imageSrc} alt=""/>
                  <button className='add-to-cart'>Add To Cart</button>
                </div>
                <div className='brand'>{pant.brand}</div>
                <div className='title'>{pant.title}</div>
                <div className='price'>Rs {pant.price}</div> 
                <Link to={`/getProduct/${pant.id}?edit=pants`}><div id='linkDiv'></div></Link>
              </form>
            </div>
          ))
        }
      </div>

      <div className='category t-shirt'>
        <h2 style={{width:'100%',height:'100px'}}>
          T-shirts
        </h2>

        {
          tShirts.map((tShirt)=>(
            <div>
              <form  onSubmit={addToCart}>
                <div className='image-box'>
                  <img className='image' src={tShirt.imageSrc} alt=""/>
                  <button className='add-to-cart'>Add To Cart</button>
                </div>
                <div className='brand'>{tShirt.brand}</div>
                <div className='title'>{tShirt.title}</div>
                <div className='price'>Rs {tShirt.price}</div> 
                <Link to={`/getProduct/${tShirt.id}?edit=tShirts`}><div id='linkDiv'></div></Link>
              </form>
            </div>
          ))
        }
      </div>
    </div>
  )
}
