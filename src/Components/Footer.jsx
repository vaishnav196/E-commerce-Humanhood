
import React from "react";
import "./Footer.css";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaYoutube,
  LiaTwitter,
} from "react-icons/lia";

function Footer() {
  return (
    <div className="Footer">
      <footer className="pt-5">
        {/* for large screen */}
        <hr className="m-0 p-0" />
        <div className="container-lg d-none d-sm-none d-md-block d-lg-block">
          <div className="row">

            <div className="col-md-4 . ">
              <img src="/media/logo.avif" alt="" />
            </div>

            <div className="col-md-4 text-left">
              <h5>Navigation</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="">Workshops & Partnerships</a>
                </li>
                <li>
                  <a href="">Stockist</a>
                </li>
                <li>
                  <a href="">Bulk Orders</a>
                </li>
                <li>
                  <a href="">Track Your Orders</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Refund Policy</a>
                </li>
              </ul>
            </div>


            <div className="col-md-4 text-left">
              <h5>Policies</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Refund Policy</a>
                </li>
                <li>
                  <a href="">Shopping Policy</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* for small screens like mobile  */}
        <div className="container-lg  d-md-none d-sm-block d-lg-none">
          <div className="row">
            <div className="col-md-4 ">

              <img
                src="/media/logo.avif"
                alt=""
                className="img-fluid m-auto d-block  mb-2"
                
              />
            </div>


            <div className="col-md-4 text-center">
              <h5>Navigation</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="">Workshops & Partnerships</a>
                </li>
                <li>
                  <a href="">Stockist</a>
                </li>
                <li>
                  <a href="">Bulk Orders</a>
                </li>
                <li>
                  <a href="">Track Your Orders</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Refund Policy</a>
                </li>
              </ul>
            </div>


            <div className="col-md-4 text-center">
              <h5>Policies</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Refund Policy</a>
                </li>
                <li>
                  <a href="">Shopping Policy</a>
                </li>
              </ul>
            </div>


          </div>
        </div>

        <div className="container-lg d-none d-md-block d-sm-none d-lg-block  ">
          <div className="row  d-flex justify-content-between  ">
            <div className="col-md-4  ">
              <p>Subscribe to our emails</p>
              <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
   
  </div>

            </div>
            <div className="col-md-3">
              <LiaFacebook fontSize={"40px"} color="#0f0f0f" />
              <LiaInstagram fontSize={"40px"} color="#0f0f0f" />
              <LiaLinkedin fontSize={"40px"} color="#0f0f0f" />
             
            </div>
          </div>
        </div>

        <div className="container-lg d-none d-md-none d-sm-block d-lg-none ">
          <div className="row ">
            <div className="col-md-9">
              <p className="p-0 m-0 text-center">
                Copyright © 2023 Humanhood Official
              </p>
              <p className="text-center">Powered by...........</p>
            </div>
            <div className="col-md-3 mx-auto text-center">
              <LiaFacebook fontSize={"40px"} color="#0f0f0f" />
              <LiaInstagram fontSize={"40px"} color="#0f0f0f" />
              <LiaLinkedin fontSize={"40px"} color="#0f0f0f" />
             
            </div>
          </div>
        </div>

        <hr />

        <div className="pt-5">
            <p className="text-center m-0 p-0">© 2023, <a href="">Humanhood Official</a></p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;


