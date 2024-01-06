import React from "react";
import Sliders from "./Sliders";

export default function Home() {



  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <Sliders />
            </div>
          </div>
        </div>
      </section>
      <br />

      <br />
      <section className="mb-4">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 pe-md-0">
              <img
                src="img/affirm.webp"
                alt=""
                className="hero-section1-img img-fluid "
              />
            </div>
            <div className="col-md-6 ps-0">
              <div className=" hero-section1 p-lg-5 p-3">
                <h1 className="text-906 mb-3 pe-3">
                  Humanhood x Bodh Gem & Crystals
                </h1>
                <p className="lh-lg text-906 mb-4 fs-sand">
                  When affirmations come together with crystals that have
                  grounding and abundant energies; your goals will amplify and
                  come to life. Manifest your dream year with this hamper and
                  start your manifestation journey now.
                </p>
                <a className="btn bg-906" href="/">
                  SHOP NEW YEAR ENERGY HAMPER
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 co-12 p-0 d-block m-auto">
                <a href="/">
                  <img src="img/smallstep1.webp" alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col d-block m-auto">
              <a href=""><img src="img/moodspace.webp" alt="" className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </section>



      <section className="hamper-bg mb-4">
        <div className="container py-5">
          <h1 className="text-center text-906 mb-4">
            Festive Special Wellness Hampers
          </h1>
          <p className="text-center text-906 mb-5 fs-sand">
            This festive season, choose meaningful gifts for your loved ones!
          </p>

          <div className="row ">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div>
                <img
                  src="images/hamper_img1.webp"
                  alt=""
                  className="img-fluid mb-3"
                />
              </div>
              <div>
                <h5 className="text-906 text-center mb-3">
                  DAILY POSITIVITY HAMPER
                </h5>
                <center>
                  <a href="" className="text-906 text-decoration-none fs-sand">
                    Shop Now
                    <i class="fa-solid fa-arrow-right text-906 ps-2"></i>
                  </a>
                </center>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div>
                <img
                  src="images/hamper_img2.webp"
                  alt=""
                  className="img-fluid mb-3"
                />
              </div>
              <div>
                <h5 className="text-906 text-center mb-3">
                  ATTRACT ABUNDANCE HAMPER
                </h5>
                <center>
                  <a href="" className="text-906 text-decoration-none fs-sand">
                    Shop Now
                    <i class="fa-solid fa-arrow-right text-906 ps-2"></i>
                  </a>
                </center>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src="images/hamper_img3.webp"
                  alt=""
                  className="img-fluid mb-3"
                />
              </div>
              <div>
                <h5 className="text-906 text-center mb-3">
                  MORNING ROUTINE ESSENTIALS HAMPER
                </h5>
                <center>
                  <a href="" className=" text-906 text-decoration-none fs-sand">
                    Shop Now
                    <i class="fa-solid fa-arrow-right text-906 ps-2"></i>
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
