import React from 'react';
import { useEffect,useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import data from "../static.json";
import './GetProduct.css';

const {shirts} = data;
const {pants} = data;
const {tShirts} = data;

export default function GetProduct() {
    const { id } = useParams();

    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const clothes=queryParams.get("edit");
    console.log('clothes',clothes);

    let cloth;
    // if(clothes=='shirts'){
    // cloth=shirts.find(s=>s.id==id);}
    // if(clothes=='pants'){
    // cloth=pants.find(s=>s.id==id);}

    {clothes=='shirts'?cloth=shirts.find(s=>s.id==id):(clothes=='pants'?cloth=pants.find(s=>s.id==id):cloth=tShirts.find(s=>s.id==id))}

  return (
    <div className='single-product'>
        <h1 style={{ textShadow: "0px 1px 1px grey" }}> Product Details </h1>
        <div className='main'>
            <div className='image-box'>
                <img src={`../${cloth.imageSrc}`} alt=""/>
            </div>
            <div>
                <h3 className='brand'>{cloth.brand}</h3>
                <div className='title'>{cloth.title}</div>
                <h4 className='price'>Rs {cloth.price}</h4><br />
                <h3>Product Specifications</h3>
                <div>Closure : Button</div>
                <div>Fit : Regular</div>
                <div>Material : Cotton</div>
            </div> 
        </div>
    </div>
  )
}
