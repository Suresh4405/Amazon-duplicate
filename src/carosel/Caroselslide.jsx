import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import "../carosel/Carosel.css"

const Caroselslide = () => {
    return (
        <div>
<div className="carosel">
             <Carousel>
      <Carousel.Item>
        
        <img className="image"  src={one} alt='slide 1'></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img className="image" src={two} alt='slide 2'></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <img className="image" src={three} alt='slide 3'></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
    );
}

export default Caroselslide;
