<<<<<<< HEAD
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
                className="img-fluid mx-auto"
                
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

        <div className="container-lg d-none d-md-block d-sm-none d-lg-block ">
          <div className="row ">
            <div className="col-md-9">
              <p>Subscribe to our emails</p>
              <div class="form-outline mb-4">
              <input type="email" placeholder="Email" width={200} />
            </div>

            </div>
            <div className="col-md-3 mx-auto">
              <LiaFacebook fontSize={"40px"} color="#1dbfc1" />
              <LiaInstagram fontSize={"40px"} color="#1dbfc1" />
              <LiaLinkedin fontSize={"40px"} color="#1dbfc1" />
              <LiaYoutube fontSize={"40px"} color="#1dbfc1" />
              <LiaTwitter fontSize={"40px"} color="#1dbfc1" />
            </div>
          </div>
        </div>

        <div className="container-lg d-none d-md-none d-sm-block d-lg-none ">
          <div className="row ">
            <div className="col-md-9">
              <p className="p-0 m-0 text-center">
                Copyright © 2023 Emperia 1900
              </p>
              <p className="text-center">Powered by...........</p>
            </div>
            <div className="col-md-3 mx-auto text-center">
              <LiaFacebook fontSize={"40px"} color="#1dbfc1" />
              <LiaInstagram fontSize={"40px"} color="#1dbfc1" />
              <LiaLinkedin fontSize={"40px"} color="#1dbfc1" />
              <LiaYoutube fontSize={"40px"} color="#1dbfc1" />
              <LiaTwitter fontSize={"40px"} color="#1dbfc1" />
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
=======
import React from 'react'

export default function Footer() {
  return (
    <div>
      
    </div>
  )
}
>>>>>>> 6ff1028360d70354ad80d4f8a4b541e8d6816212
