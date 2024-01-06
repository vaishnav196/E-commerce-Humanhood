import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Featured extends Component {
  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="container-lg ">
        <h2 className="mb-4 text-906 text-center"> Featured In </h2>
        <div className="row">

       
        <Slider {...settings}>
          <div className="feat-row d-flex  flex-wrap  ">
            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/midday.webp" alt="" className="img-fluid " />
            </div>
            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/cosmo.webp" alt="" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/bazar.webp" alt="" className="img-fluid" />
            </div>

            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/llb.webp" alt="" className="img-fluid" />
            </div>

            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/reclam.webp" alt="" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/dailyhunt.webp" alt="" className="img-fluid" />
            </div>

            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/medium.webp" alt="" className="img-fluid" />
            </div>

            <div className="col-6 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/bussiness.webp" alt="" className="img-fluid" />
            </div>

            <div className="col-12 col-md-3 col-lg-3 col-sm-6 ">

            <img src="img/story.webp" alt="" className="img-fluid" />
            </div>
          </div>
        </Slider>
        </div>
        <div className=" py-4 mb-5">
          <a href="/">
            <img
              src="images/hero_section_img3.webp"
              alt=""
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    );
  }
}