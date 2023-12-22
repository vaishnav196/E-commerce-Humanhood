import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasTopLabel"></h5>
          <a
            type="button"
            class="btn-close "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></a>
        </div>
        <div class="offcanvas-body "></div>
      </div>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-lg">
            <a class="navbar-brand me-auto" href="#">
              <img
                src="img/hhlogo.avif"
                alt="Logo here"
                className="img-fluid ms-auto"
                style={{ width: "255px" }}
              />
            </a>
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
            <div class="collapse navbar-collapse d-md-none me" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Join Our community
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Blogs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Talk Therapy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=""> 
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="right d-flex justify-content-evenly ">
              <div className="search mx-3">
             
              <IoSearchSharp style={{ fontSize: "30", color: "black" }} />
               
              </div>
              <div className="cart">
              <HiOutlineShoppingBag   style={{ fontSize: "30", color: "black" }}/>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
