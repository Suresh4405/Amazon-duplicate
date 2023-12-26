import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import "./Toast.css"
import render from "../assets/render.gif"



const Toastcomp = () => {
const [hide,setHide]=useState(true)

const hidebutton=()=>{
    setHide(!hide)
}

    return (
        
        <div className="toast-place">
            { hide &&
            <Toast className="toast-color">
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <button className="Xbutton" onClick={hidebutton}>X { ! hide ? "" : ""} </button>
        <strong className="me-auto"><img className="toast-imgcart" src={render}></img></strong>  
      <Toast.Body className="toast-place">sucessfully added to cart ...</Toast.Body>
    </Toast>
}
        </div>
    );
}

export default Toastcomp;
