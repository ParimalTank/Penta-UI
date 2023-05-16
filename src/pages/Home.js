import React, { useState } from "react";
import bag from "../assets/images/Bag.png";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <section>
      <div className="home-img">
        <div className="container">
          <div className="nav-home">
            {/* <div>
              <a className="navbar-brand logo-name" href="#">
                Panto
              </a>
            </div> */}

            {/* <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler btn btn-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand logo-name" href="#">
                  Panto
                </a>

                <div
                  className="collapse navbar-collapse navbar-texts "
                  id="navbarTogglerDemo03"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0 navbar-menu ">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        Furniture
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="home-cart">
                  <img src={bag}></img>
                  <span className="badge rounded-circle text-bg-warning">
                    0
                  </span>
                </div>
              </div>
            </nav> */}

            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <a className="navbar-brand abs logo-name text-white" href="#1">
                  Panto
                </a>
                <button
                  className="navbar-toggler ms-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse d-flex justify-content-center" id="collapseNavbar">
                  <ul className="navbar-nav navbar-menu">
                    <li className="nav-item active">
                      <a className="nav-link text-white" href="#" >
                        Furniture
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="//codeply.com">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        href="#myAlert"
                        data-bs-toggle="collapse"
                      >
                        About Us
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        href="#myAlert"
                        data-bs-toggle="collapse"
                      >
                        Contact
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        href="#myAlert"
                        data-bs-toggle="collapse"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <div className="home-cart">
                        <img src={bag}></img>
                        <span className="badge rounded-circle text-bg-warning">
                          0
                        </span>
                      </div>
                    </li>
                  </ul> */}
                </div>

                {/* <div className="home-cart">
                  <img src={bag}></img>
                  <span className="badge rounded-circle text-bg-warning">
                    0
                  </span>
                </div> */}
              </div>
            </nav>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
