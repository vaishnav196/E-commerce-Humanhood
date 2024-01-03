import React from "react";

export default function Home() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/dateplan.webp"
                alt=""
                className="img-fluid w-75 ms-sm-auto m-sm-auto d-block  mb-3"
              />
            </div>
            <div className="col-md-5">
              <p>HUMANHOOD OFFICIA</p>
              <h1>2024 Dated Planner - Garden of Dreams</h1>
              <p>Regular priceRs. 1,499.00 Sale priceRs. 1,125.00</p>
              <p>Shipping calculated at checkout.</p>
              <p>Quantity</p>

              <div class="btn-group btn-sm" role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn  me-2 btn-outline-light text-black border-1 border-black  "
                >
                  -
                </button>
                <h1>1</h1>
                <button
                  type="button"
                  class="btn ms-2 btn-outline-light text-black border-1 border-black"
                >
                  +
                </button>
              </div>
              <br />
              <button className="btn btn-success mt-2">Add to Cart</button> <br />
              <button className="btn btn-success mt-2">Buy it Now</button>

              <div className="share-detail d-flex  justify-content-between ">
                <a href="" className="nav-link">Share</a>
                <a href="" className="nav-link">View details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6  ">
              <img
                src="img/affirm.webp"
                alt=""
                className="img-fluid d-block  ms-auto w-75 "
              />
            </div>

            <div className="col-md-6">
              <h1>Humanhood x Bodh Gem & Crystals</h1>
              <p>
                When affirmations come together with crystals that have
                grounding and abundant energies; your goals will amplify and
                come to life. Manifest your dream year with this hamper and
                start your manifestation journey now.
              </p>
              <button className="btn btn-success ">
                SHOP NEW YEAR ENERGY HAMPER
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
