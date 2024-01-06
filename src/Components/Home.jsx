import React from "react";
import Sliders from "./Sliders";

export default function Home() {
  return (
    <div>
     <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <Sliders/>
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
                className="hero-section1-img"
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

          <div className="row">
            <div className="col-8 mx-auto">

           
            <a href="/">
              <img
                src="img/smallstep1.webp"
                alt=""
                className="img-fluid"
              />
            </a>
            </div>
          </div>
        </div>
      </section>
     
     
    </div>
  );
}
