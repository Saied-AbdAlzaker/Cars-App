import React from "react";
import { NavLink } from "react-router-dom";
import carLogo from "../../assets/images/nav/logo.png";
import carImg from "../../assets/images/landing-page/car-home.png";
import andriodImg from "../../assets/images/landing-page/andriod.png";
import iosImg from "../../assets/images/landing-page/ios.png";
import navStyle from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <section className={navStyle.layer}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light mt-2">
            <div className="container-fluid">
              <NavLink className="navbar-brand">
                <img src={carLogo} alt="carLogo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className="btn" aria-current="page">
                      Become a renter
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn" aria-current="page">
                      Rental deals
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn" aria-current="page">
                      How it work
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn">Why choose us</button>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className="btn" aria-current="page">
                      Sign in
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`btn ${navStyle.btnSignup} text-white`}
                      aria-current="page"
                    >
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className={navStyle.carCaption}>
          <article>
            <h2 className="fs-1 fw-bold">
              Find, book and rent a car
              <span className={`ms-2 ${navStyle.bgEasily}`}>Easily</span>
            </h2>
            <p>
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
            <div className="d-flex">
            <a className="cursor">
              <img src={andriodImg} alt="andriod" />
            </a>
            <a className="ms-3 cursor">
              <img src={iosImg} alt="ios" />
            </a>
            </div>
          </article>

          <img src={carImg} className={`w-100 ${navStyle.carImg}`} alt="car" />
        </div>
      </section>
    </>
  );
}
