import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import { FaShoppingCart,FaUser,FaShopify,FaSignInAlt,FaHome} from "react-icons/fa";

export default function Navbar({active}) {
  return (
    <div className='navbar' style={{marginBottom:'45px'}}>
        <ul>
            <li>
                <Link to='/' className={active=='btn1' && 'active'}>
                    <FaHome style={{position:'relative',top:'2px',fontSize:'17px'}}/>&nbsp; 
                    Home
                </Link>
            </li>
            <li>
                <Link to='/registration' className={active=='btn2' && 'active'}>
                    <FaUser style={{position:'relative',top:'1px',fontSize:'14px'}}/>&nbsp; 
                    Registration
                </Link>
            </li>
            <li>
                <Link to='/login' className={active=='btn3' && 'active'}>
                    <FaSignInAlt style={{position:'relative',top:'2px',fontSize:'15px'}}/>&nbsp;
                    Login
                </Link>
            </li>
            <li>
                <Link to='/cart' className={active=='btn4' && 'active'}>
                    <FaShoppingCart style={{position:'relative',top:'2px',fontSize:'15px'}}/>&nbsp;
                    My Cart
                </Link>
            </li>
        </ul>
    </div>
  )
}
