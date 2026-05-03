import React from "react";
import footerStyle from "./footer.module.css";
import footerLogo from "../../assets/images/footer/logo-footer.png";
import location from "../../assets/images/footer/location.png";
import call from "../../assets/images/footer/call.png";
import sms from "../../assets/images/footer/sms.png";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#051C34" }}
      >
        <div className="container p-5 pb-0">
          <section>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <img src={footerLogo} alt="footerLogo" className="mb-3" />
                <div className={`mt-3 ${footerStyle.footerCaption}`}>
                  <img src={location} alt="location" className="mb-3" />
                  <p className={`ms-3 ${footerStyle.footerText}`}>
                    25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA
                  </p>
                </div>
                <div className={`${footerStyle.footerCaption}`}>
                  <img src={call} alt="call" className="mb-3" />
                  <p className={`ms-3 ${footerStyle.footerText}`}>
                    +603 4784 273 12
                  </p>
                </div>
                <div className={`${footerStyle.footerCaption}`}>
                  <img src={sms} alt="sms" className="mb-3" />
                  <p className={`ms-3 ${footerStyle.footerText}`}>
                    rentcars@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5>Our Products</h5>
                <ul className="list-unstyled mb-0 mt-3">
                  <li>
                    <a href="#!">Career</a>
                  </li>
                  <li>
                    <a href="#!">Car</a>
                  </li>
                  <li>
                    <a href="#!">Packages</a>
                  </li>
                  <li>
                    <a href="#!">Features</a>
                  </li>
                  <li>
                    <a href="#!" className="mt-3">
                      Priceline
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5>Resources</h5>
                <ul className="list-unstyled mb-0 mt-3">
                  <li>
                    <a href="#!">Download</a>
                  </li>
                  <li>
                    <a href="#!">Help Centre</a>
                  </li>
                  <li>
                    <a href="#!">Guides</a>
                  </li>
                  <li>
                    <a href="#!">Partner Network</a>
                  </li>
                  <li>
                    <a href="#!">Cruises</a>
                  </li>
                  <li>
                    <a href="#!">Developer</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5>About Rentcars</h5>
                <ul className="list-unstyled mb-0 mt-3">
                  <li>
                    <a href="#!">Why choose us</a>
                  </li>
                  <li>
                    <a href="#!">Our Story</a>
                  </li>
                  <li>
                    <a href="#!">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#!">Press Center</a>
                  </li>
                  <li>
                    <a href="#!">Advertise</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5>Follow Us</h5>
                <div className="mt-3">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <p className={`mb-0 pb-5 ${footerStyle.footerText}`}>
            Copyright 2023 ・ Rentcars, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
