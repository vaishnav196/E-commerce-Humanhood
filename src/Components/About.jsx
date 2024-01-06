import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="About">
      <div className="container-lg">
        <section>

          <h1 className=" heading text-center fw-light fs-1 ">Our Purpose</h1>

          <p className=" txt text-center text-black">
            Our Vision - To create a positive ecosystem where every energy
            exchanged is oriented towards a better well-being.
          </p>
          <p className=" txt  text-black text-center">
            Our Mission - To create simple tools that simplify life and empower
            growth, lifestyle & wellness.
          </p>
        </section>

        <section>
          <div>

            <p className="heading fw-light  text-black fs-1">Chief Humans at Humanhood</p>

            <div className="row">
              <div class="card col-md-6 rounded-0 m-0 p-1 border-0">
                <img
                  src="/img/Founder1.webp"
                  class="card-img-top img-fluid h-100 "
                 
                />
                <div class="card-body m-0">
                  <p class="card-text p-0 text-black m-0">Sakshi Sanghavi - Founder</p>
                </div>
              </div>
              <div class="card col-md-6 rounded-0 border-0 m-0 p-1">
                <img
                  src="/img/Founder2.webp"
                  class="card-img-top img-fluid"
                 
                />
                <div class="card-body  m-0">
                  <p class="card-text p-0  text-black m-0">Unnati Shah - Founderer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="text lh-lg text-black text-center px-lg-5">
          Humanhood is a blend of Sakshi's and Unnati's purpose and passion!
          While the first always wanted to build a business that makes a
          difference to her world, the latter lives to uplift the individuals
          around her! One conversation about their calling, one common love for
          neutral aesthetics, and one aligned dream of creating an impact -
          that's how Humanhood was born!
        </p>

        <section>

          <p className="heading fw-light  text-black fs-1">Thoughts Become Things</p>
          
          <div className="row">
            <div className="col-md-6 col-lg-6 w-50   ">
              <img src="/img/Thoughts.webp" alt="" className="img-fluid  w-75  d-block ms-auto h-100" />
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="text lh-lg  text-black ">
                Humanhood is a brainchild of Sakshi & Unnati. Right from
                recognising problems, outlining creative solutions, designing an
                aesthetic and appealing tool, pushing it to production to making
                it handy for the community - they two are personally invested in
                the entire process of creating all the self help tools under the
                Humanhood Store.
              </p>
              <p className="text lh-lg  text-black">
                Every self help tool that we create, stems from an intention of
                solving a common lifestyle issue, a purpose of moving towards
                wellness rituals and a potential outcome of living life to the
                fullest potential. Our core focus is to build simple tools that
                the mass can understand and use to enhance their well-being.
                Having realised the importance of a healthy well-being, we price
                our tools at the most moderate prices for it to be accessible to
                as many humans possible.
              </p>
            </div>
          </div>
        </section>
      </div>
    
    </div>
  )}