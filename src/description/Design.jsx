import React from 'react';
import "./design.css"


const Design = (props) => {
    return (
        <div>
            <img src={props.desimg} className="des-img"></img>
            
           <div className="right-content">
            <h2 className="des-cart">{props.descart}</h2>
            <h4 className="des-about">About this item: </h4>
            <p className="des-descr">{props.desdescription}</p>
          
            <h4 className="des-price">Price: {props.desprice}</h4>
            <h4 className="des-reviews">Reviews:</h4>
            <button className="des-button">Buy now</button>
            </div>
            
        </div>





    );
}

export default Design;
