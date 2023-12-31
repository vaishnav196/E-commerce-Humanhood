import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";


export default function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        // autoplay:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              // initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px"}}>  <a href="" className='text-black'><IoIosArrowBack /></a> {dots} <a href="" className='text-black'><IoIosArrowForward /></a></ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "0px",
             
              color:"black"
             
            }}
          >
            {i + 1}
          </div>
        )

      };
  
  return (
    <div>
     
    
<section className=' bg-danger'>
  <div className="container-fluid " >
    <div className="row">
      <div className="col">
      <Slider {...settings}  className='  '  >
          <div>
            <a href=""><img src="img/carousel1main.png" alt="" className='img-fluid  w-100 p-0'  style={{height:'590px'}} /></a>
          </div>
          <div>
          <a href=""><img src="img/carousel2.png" alt="" className='img-fluid w-100' style={{height:'590px'}} /></a>
          </div>
          <div>
          <a href=""><img src="img/carousel3.png" alt="" className='img-fluid w-100' style={{height:'590px'}} /></a>
          </div>
          <div>
          <a href=""><img src="img/carousel4mainpng.png" alt="" className='img-fluid w-100 '  style={{height:'590px'}} /></a>
          </div>
          
        </Slider>
      </div>
    </div>
  </div>
</section>
      
      
     

      {/* mobile screen */}
    
      {/* <div className="container-fluid bg-danger p-0">
        <div className="row">
          <div className="col-12">

        <Slider {...settings}>
          <div>
            <img src="img/carousel1mob.png" alt="" className='img-fluid  '  style={{width:'1000px'}}/>
          </div>
          <div>
          <img src="img/carousel2mob.png" alt="" className='img-fluid' style={{width:'1000px'}}/>
          </div>
          <div>
          <img src="img/carousel3mob.png" alt="" className='img-fluid' style={{width:'1000px'}}/>
          </div>
          <div>
          <img src="img/carousel4mob.png" alt="" className='img-fluid' style={{width:'1000px'}}/>
          </div>
          
        </Slider>
          </div>
        </div>
      </div> */}
    </div>
  )
}
