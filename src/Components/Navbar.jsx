import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
export default function Navbar() {
  const [arrow, setarrow] = useState(<IoIosArrowDown />);
  const [open, setopen] = useState(false);
  return (
    <div className="Navbar">
      <header>
        {/* mobile menu */}

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          {/* right off canvas code */}
          <div
            class="offcanvas offcanvas-start d-md-block  d-lg-none d-sm-block d-xsm-block "
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </h5>
            </div>
            <div class="offcanvas-body">
              <ul className="list-unstyled mx-2 ">
                <li className="nav-item ">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-between">
                  <a href="" className="nav-link  ">
                    Shop{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Join Our Community
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Talk therapy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* off canvas menu side */}

          <div class="container-lg">
            <a
              class="btn d-md-block d-lg-none d-sm-block d-block d-xsm-block   "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <GiHamburgerMenu style={{ fontSize: "35", color: "black" }} />
            </a>
            {/* right off canvas btn */}

            <a class="navbar-brand me-auto" href="#">
              <img
                src="img/hhlogo.avif"
                alt="Logo here"
                className="img-fluid ms-auto d-sm-none d-md-none d-lg-block d-none "
                style={{ width: "255px" }}
              />
            </a>
            <a class="navbar-brand me-auto" href="">
              <img
                src="img/hhlogo.avif"
                alt="Logo here"
                className="img-fluid  d-sm-block d-md-block d-lg-none ms-auto "
                style={{ width: "155px" }}
              />
            </a>

            <div class="collapse navbar-collapse d-md-none me" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                {/* dropdown li */}

                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onMouseMove={() => {
                      setarrow(<IoIosArrowUp />);
                    }}
                  >
                    Shop {arrow}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <a class="dropdown-item" href="#">
                        Shop All
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dreams to reality collection
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Self Help Products
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        class="  dropdown "
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Merchandise
                        <IoIosArrowDown />
                      </a>

                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Bulk Orders
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item nav-link"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Thoughtful Gifting
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item ">
                  <a class="nav-link " aria-current="page" href="#">
                    Join Our community
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    Blogs
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    Talk Therapy
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="right d-flex justify-content-evenly ">
              <div className="search mx-3">
                <a
                  class=""
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  {" "}
                  <IoSearchSharp style={{ fontSize: "30", color: "black" }} />
                </a>
              </div>
              <div className="cart">
                <HiOutlineShoppingBag
                  style={{ fontSize: "30", color: "black" }}
                />
              </div>
            </div>
          </div>
        </nav>
        <div
          class="offcanvas offcanvas-top"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div class="offcanvas-header"></div>
          <div class="offcanvas-body h-auto    ">
            <div class="input-group mb-3 container-fluid p-0 h-50 ">
              <div className="col-md-6  col-12 d-flex mx-auto">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Serch"
                    aria-describedby="basic-addon2"
                  />
                  <a class="btn btn-outline-light border-3 " type="button">
                    <IoSearchSharp style={{ fontSize: "40", color: "black" }} />
                  </a>
                  <div class="input-group-append"></div>
                </div>

                <button
                  type="button"
                  class="btn-close ms-3 mt-3  "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
