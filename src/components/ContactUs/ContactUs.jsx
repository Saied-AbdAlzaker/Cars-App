import React from "react";
import contactStyle from "./contactus.module.css";
import andriodImg from "../../assets/images/landing-page/andriod.png";
import iosImg from "../../assets/images/landing-page/ios.png";
import iPhone from "../../assets/images/landing-page/contact/iPhone.png";

export default function ContactUs() {
  return (
    <>
      <section className="my-3">
        <div className="container">
          <div className={contactStyle.contactCaption}>
            <div>
              <h2>
                Download Rentcars App for
                <span className={`ms-2 ${contactStyle.contactFree}`}>FREE</span>
              </h2>
              <p>For faster, easier booking and exclusive deals.</p>

              <div className="d-flex justify-content-center">
                <a className="cursor">
                  <img src={andriodImg} alt="andriod" />
                </a>
                <a className="ms-3 cursor">
                  <img src={iosImg} alt="ios" />
                </a>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control w-75 mt-3"
                />
                <input
                  type="phone"
                  placeholder="Phone Number"
                  className="form-control w-75 my-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control w-75"
                />
                <button className={`btn ${contactStyle.btnSend} w-25 mt-3`}>
                  Send
                </button>
              </div>
            </div>
            <div className="text-center mt-3">
              <img src={iPhone} alt="iPhone" className={contactStyle.iPhone} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
