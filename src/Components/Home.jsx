import React from "react";
import Sliders from "./Sliders";
import Testimonials from "./Testimonials";
import Featured from "./Featured";
import Blog from "./Blog";

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
        <div className="container py-5 px-5">
          <h1 className="text-center text-906 mb-4">
            Festive Special Wellness Hampers
          </h1>
          <p className="text-center text-906 mb-5 fs-sand">
            This festive season, choose meaningful gifts for your loved ones!
          </p>

          <div className="row ">
            <div className="col-lg-4  col-md-4 mb-4 mb-lg-0">
              <div>
                <img
                  src="img/dayhamp.webp"
                  alt=""
                  className="img-fluid mb-3 p-2"
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
            <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
              <div>
                <img
                  src="img/attracthamp.webp"
                  alt=""
                  className="img-fluid mb-3 p-2 "
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
            <div className="col-lg-4 col-md-4">
              <div>
                <img
                  src="img/affirmhamp.webp"
                  alt=""
                  className="img-fluid mb-3 p-2"
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


      <section className="Giftcard-bg mb-4 text-906 fs-sand">
        <div className="container py-5 ">
          <div className="row ">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <img
                src="img/giftcard.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6  col-md-6 px-lg-5 ">
              <h1 className="mb-4">Humanhood Gift Card</h1>
              <p className="fs-4 m-0">Rs. 1500.00</p>

              <p className="fs-14">
                <a href="" className=" text-906">
                  Shipping
                </a>
                &nbsp; calculated at checkout
              </p>

              <p className="fs-14">Denominations</p>

              <div className="d-flex gap-2 mb-3">
                <a href="" className="card-btn-price">
                  1500.00
                </a>
                <a href="" className="card-btn-price1 ">
                  3000.00
                </a>
                <a href="" className="card-btn-price1">
                  4000.00
                </a>
              </div>

              <p className="fs-14">Quantity</p>

              <div className="Counter">
                <button onclick="increment()">+</button>
                <h2 id="counting"></h2>
                <button onclick="decrement()">-</button>
              </div>

              <div className="d-grid gap-3 mb-5 cart-button">
                <a href="" className="btn bg-906">
                  Add to cart
                </a>
                <a href="" className="btn bg-906">
                  Buy it now
                </a>
              </div>

              <div className="d-flex justify-content-between share">
                <a href="" className="text-906">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-from-line  pe-2"
                  >
                    <path d="m18 9-6-6-6 6" />
                    <path d="M12 3v14" />
                    <path d="M5 21h14" />
                  </svg>
                  Share
                </a>
                <a href="" className="text-906  ">
                  View full details
                  <i className="fa-solid fa-arrow-right ps-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
<Blog/>
    </div>
  );
}
