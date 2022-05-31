import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const Caroussels = () => {
  return (
    <div >
      <div className="carousels">
        <Carousel className='carousels-content'>
          <div >
              <img src={img1} className="carousels-img" />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={img2} className="carousels-img"  />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={img3} className="carousels-img"  />
              <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <div className='home-text'>
        Bienvenue dans chroflix, postez et lisez des <br />
        chroniques autant que vous voulez
        </div>
      </div>
    </div>
  )
}

export default Caroussels