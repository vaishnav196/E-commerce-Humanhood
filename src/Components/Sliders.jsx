import React from 'react';

import Slider from "react-slick";


export default function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row">
        <Slider {...settings}>
          <div>
            <img src="img/carousel1main.png" alt="" className='img-fluid' />
          </div>
          <div>
          <img src="img/carousel2.png" alt="" className='img-fluid' />
          </div>
          <div>
          <img src="img/carousel3.png" alt="" className='img-fluid' />
          </div>
          <div>
          <img src="img/carousel4mainpng.png" alt="" className='img-fluid' />
          </div>
          
        </Slider>
        </div>
      </div>
      
    </div>
  )
}
