import React from "react";
import detailsStyle from "./carDetails.module.css";
import experImg from "../../../assets/images/landing-page/experience/AudiOne.png";
import user from "../../../assets/images/card/user.png";
import Frame from "../../../assets/images/card/Frame.png";
import d8wxke from "../../../assets/images/card/d8wxke.png";
import doors from "../../../assets/images/card/doors.png";

export default function CarDetails() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className={detailsStyle.detailsContent}>
            <div className={` ${detailsStyle.layer}`}>
              <img src={experImg} alt="experImg" className="w-75" />
            </div>
            <div className={detailsStyle.detailsCaption}>
              <button className={`btn btnWork`}>WHY CHOOSE US</button>
              <h2 className="my-3">
                We offer the best experience with our rental deals
              </h2>
              <div>
                <p>
                  <img src={user} alt="user" />4 Passagers
                </p>
                <p>
                  <img src={Frame} alt="Frame" />
                  Auto
                </p>
                <p>
                  <img src={d8wxke} alt="d8wxke" />
                  Air Conditioning
                </p>
                <p>
                  <img src={doors} alt="doors" />4 Doors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
