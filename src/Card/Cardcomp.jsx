import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"
import { useDispatch} from 'react-redux';
import { store } from '../store/store';
import { Action } from '../store/slice/Cardcompslice';
import Toastcomp from '../Toast/Toastcomp';




const Cardcomp = (props) => {
  
 
  const dispatch=useDispatch()

  const handleadd=()=>{
    dispatch (Action.increment())
    
  }
  const [show,setShow]=useState(false)

  const addedsucess=()=>{
    
    setShow(!show) 

    
  }

  return (
      <div className='cardmain'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className='cardimg' src={props.cardimg} />
        <Card.Body>
          <Card.Title>{props.cardtitle}</Card.Title>
          <Card.Text>
            {props.carddescription}
            <h3> Price : {props.cardprice}</h3>
          </Card.Text >
                 
             <button onClick={handleadd} className="clicked-1">
            <button onClick={addedsucess } className="clicked-2">Add to cart {! show ? "" :""}</button>
            </button>
           

        {show &&
          <Toastcomp/>
          }
        </Card.Body>
      </Card>
      </div>
      
    );
}

export default Cardcomp;
