import React, { useEffect, useRef } from 'react';
import './NavigationBar.css';
import Cart from "../assets/carrt.png";
import { useSelector } from 'react-redux';
import { store } from '../store/store';


const Navbar = () => {
let inputref=useRef()
useEffect(()=>{
  inputref.current.focus()
},[])
let add=useSelector((store)=>store.your.count)

  return (
    <div className="navbar">
      <div className="Name">Amazon</div>
      
      <div className="search">
        <input type="text" placeholder="Search..." ref={inputref} />
        
      </div>

      <div className="navbar__nav">
        <a href="/" className="youracc">Your Account</a>
  
        <div className="cart-container">
          
        <button className='cart-count' > <img src={Cart} alt="Cart" className="cartimg"  />  Cart {add} </button>
        
        </div>
      </div>
     </div>
  );
};

export default Navbar;
