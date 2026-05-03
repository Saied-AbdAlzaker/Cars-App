import React from "react";
import experStyle from "./experience.module.css";
import experImg from "../../assets/images/landing-page/experience/AudiOne.png";
import price from "../../assets/images/landing-page/experience/price.png";
import user from "../../assets/images/landing-page/experience/user.png";
import message from "../../assets/images/landing-page/experience/price.png";
import chat from "../../assets/images/landing-page/experience/chat.png";

export default function Experience() {
  return (
    <>
      <section className="my-5">
        <div className={experStyle.experience}>
          <div className={experStyle.layer}>
            <img src={experImg} alt="AudiOne" className="w-75 " />
          </div>
          <div className="my-3">
            <div className={experStyle.experText}>
              <button className={`btn btnWork`}>WHY CHOOSE US</button>
            </div>
            <h2 className="my-3">
              We offer the best experience with our rental deals
            </h2>
            <div className={experStyle.experCaption}>
              <div className="mb-3">
                <img src={price} alt="price" />
              </div>
              <div className="ms-3">
                <h6 className="fw-bold">Best price guaranteed</h6>
                <p className="w-75">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </div>
            <div className={experStyle.experCaption}>
              <div className="mb-3">
                <img src={user} alt="user" />
              </div>
              <div className="ms-3">
                <h6 className="fw-bold">Experience driver</h6>
                <p className="w-75">
                  Don’t have driver? Don’t worry, we have many experienced
                  driver for you.
                </p>
              </div>
            </div>
            <div className={experStyle.experCaption}>
              <div className="mb-3">
                <img src={message} alt="message" />
              </div>
              <div className="ms-3">
                <h6 className="fw-bold">24/7 technical support</h6>
                <p className="w-75">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </div>
            <div className={experStyle.experCaption}>
              <div className="mb-3">
                <img src={chat} alt="chat" />
              </div>
              <div className="ms-3">
                <h6 className="fw-bold">Best price guaranteed</h6>
                <p className="w-75">
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
