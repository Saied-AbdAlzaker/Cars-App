import React from "react";
import workStyle from "./work.module.css";
import locationWork from "../../assets/images/landing-page/work/location.png";
import calenderWork from "../../assets/images/landing-page/work/calender.png";
import carIconWork from "../../assets/images/landing-page/work/car-icon.png";
import nissan from "../../assets/images/landing-page/work/nissan.png";
import volvo from "../../assets/images/landing-page/work/volvo.png";
import ac from "../../assets/images/landing-page/work/ac.png";
import audi from "../../assets/images/landing-page/work/audi.png";
import jaguar from "../../assets/images/landing-page/work/jaguar.png";

export default function Work() {
  return (
    <>
      <div className="container text-center my-5">
        <div>
          <button className="btn btnWork">HOW IT WORK</button>
          <h3 className="my-3">Rent with following 3 working steps</h3>
        </div>
        <div className={workStyle.worCard}>
          <div className="text-center">
            <img src={locationWork} alt="locationWork" />
            <h5 className="my-3">Choose location</h5>
            <p className="w-75 ms-4">Choose your and find your best car</p>
          </div>
          <div className="text-center">
            <img src={calenderWork} alt="locationWork" />
            <h5 className="my-3">Pick-up date</h5>
            <p className="w-75 ms-4">
              Select your pick up date and time to book your car
            </p>
          </div>
          <div className="text-center">
            <img src={carIconWork} alt="locationWork" />
            <h5 className="my-3">Book your car</h5>
            <p className="w-75 ms-4">
              Book your car and we will deliver it directly to you
            </p>
          </div>
        </div>
        <div className={workStyle.workCaption}>
          <img src={ac} className={workStyle.imgWidth} alt="ac" />
          <img src={jaguar} className={workStyle.imgWidth} alt="jaguar" />
          <img src={nissan} className={workStyle.imgWidth} alt="nissan" />
          <img src={volvo} className={workStyle.imgWidth} alt="volvo" />
          <img src={audi} className={workStyle.imgWidth} alt="audi" />
        </div>
      </div>
    </>
  );
}
