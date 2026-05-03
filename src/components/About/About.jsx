import React from "react";
import aboutStyle from "./about.module.css";
import Rectangle from "../../assets/images/landing-page/about/Rectangle.png";
import girl from "../../assets/images/landing-page/about/girl.png";

export default function About() {
  return (
    <>
      <section className={aboutStyle.about}>
        <div className={aboutStyle.aboutContent}>
          <div className="text-center">
            <button className="btn btnWork">TESTIMONIALS</button>
            <h3 className="my-3">What peole say about us?</h3>
          </div>

          <div className={aboutStyle.aboutCaption}>
            <div className={`shadow-sm rounded-4 bg-white ${aboutStyle.aboutSectionCard}`}>
              <img
                src={Rectangle}
                alt="Rectangle"
                className={aboutStyle.aboutImg}
              />
              <div className={`ps-3 ${aboutStyle.aboutSection}`}>
                <div>
                  <h4>5 stars</h4>
                  <div>
                    <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                    <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                    <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                    <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                    <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                  </div>
                </div>
                <div>
                  <p>
                    “I have been using your services for 3 years. Your service
                    is great, I will continue to use your service.”
                  </p>
                </div>
                <div>
                  <h6>Jenny Wilson</h6>
                  <p>From New York, US</p>
                </div>
              </div>
            </div>
            <div className={`shadow-sm rounded-4 bg-white ${aboutStyle.aboutSectionCard} ${aboutStyle.aboutCard}`}
            >
              <img src={girl} alt="girl" className={aboutStyle.aboutImg} />
              <div className={`ps-3 ${aboutStyle.aboutSection}`}>
                <div>
                  <h4>4 stars</h4>
                  <div>
                  <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                  <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                  <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                  <i class={`fa-solid fa-star ${aboutStyle.aboutIcon}`}></i>
                  <i class={`fa-regular fa-star ${aboutStyle.aboutIcon1}`}></i>
                  </div>
                </div>
                <div>
                  <p>
                    “I feel very secure when using caretall's services. Your
                    customer care team is very enthusiastic and the driver is
                    always on time.”
                  </p>
                </div>
                <div>
                  <h6>Charlie Johnson</h6>
                  <p>Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
