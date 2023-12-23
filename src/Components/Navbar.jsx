import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="Navbar">
      
      <header>

{/* mobile menu */}

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          {/* right off canvas code */}
        <div class="offcanvas offcanvas-start d-md-block  d-lg-none d-sm-block d-xsm-block " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
          <div class="container-lg">
          <a class="btn d-md-block d-lg-none d-sm-block d-block d-xsm-block   " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><GiHamburgerMenu style={{ fontSize: "35", color: "black" }} /></a>
{/* right off canvas btn */}

          
            <a class="navbar-brand me-auto" href="#">
              <img
                src="img/hhlogo.avif"
                alt="Logo here"
                className="img-fluid ms-auto d-sm-none d-md-none d-lg-block d-none "
                style={{ width: "255px" }}
              />
            </a>
            <a class="navbar-brand me-auto" href="#">
              <img
                src="img/hhlogo.avif"
                alt="Logo here"
                className="img-fluid  d-sm-block d-md-block d-lg-none ms-auto "
                style={{ width: "155px" }}
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

            {/* dropdown li */}

            <li class="nav-item dropdown">
          <a class=" dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
         Shop
          </a>
          <ul class="dropdown-menu dropdown-menu-light">
            <li><a class="dropdown-item" href="#">Shop All</a></li>
            <li><a class="dropdown-item" href="#">Dreams to reality collection</a></li>
            <li><a class="dropdown-item" href="#">Self Help Products</a></li>
            <li><a class="dropdown-item" href="#">Merchandise</a></li>
            <li><a class="dropdown-item" href="#">Bulk Orders</a></li>
            <li><a class="dropdown-item" href="#">Thoughtful Gifting</a></li>
          </ul>
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
              <a class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"> <IoSearchSharp style={{ fontSize: "30", color: "black" }} /></a>


             
               
              </div>
              <div className="cart">
              <HiOutlineShoppingBag   style={{ fontSize: "30", color: "black" }}/>
              </div>
            </div>
          </div>
          
        </nav>
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
   
  </div>
  <div class="offcanvas-body h-auto    " >
  <div class="input-group mb-3 container-fluid p-0 h-50 ">
   
      <div className="col-md-6  col-12 d-flex mx-auto">
      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search" aria-label="Serch" aria-describedby="basic-addon2"/>
    <a class="btn btn-outline-light border-3 " type="button"><IoSearchSharp style={{ fontSize: "40", color: "black" }} /></a>
  <div class="input-group-append">
  </div>
</div>

    <button type="button" class="btn-close ms-3 mt-3  " data-bs-dismiss="offcanvas" aria-label="Close"></button>
    
    </div>
 
</div>
  </div>
</div>
       
      </header>
    </div>
  );
}
