import React, { useState, useEffect } from "react";
import carStyle from "./cars.module.css";
import car1 from "../../assets/images/card/car1.png";
import car2 from "../../assets/images/card/car2.png";
import car3 from "../../assets/images/card/car3.png";
import star from "../../assets/images/card/star.png";
import user from "../../assets/images/card/user.png";
import Frame from "../../assets/images/card/Frame.png";
import d8wxke from "../../assets/images/card/d8wxke.png";
import doors from "../../assets/images/card/doors.png";
import arrowRight from "../../assets/images/card/arrow-right.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cars() {
  let [car, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let getCars = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get(`https://myfakeapi.com/api/cars/`);
      setCars(response?.data?.cars.splice(0, 4));
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getCars();
  }, []);

  const carImges = [
    { src: car1, alt: "car1" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car2, alt: "car2" },
  ];

  return (
    <>
      <section className="my-3">
        {isLoading && <p>Loading...</p>}
        <div className="text-center">
          <button className="btn btnWork">POPULAR RENTAL DEALS</button>
          <h3 className="my-3">Most popular cars rental deals</h3>
        </div>

        <div className="container">
          <div className="row g-3">
            {car.length == 0 ? (
              <div className="text-center">No Cars Available</div>
            ) : (
              car.map((car, index) => (
                <div className="col-md-3">
                  <div className="shadow p-2">
                    <div className="card-body">
                      <img
                        src={carImges[index].src}
                        className="card-img-top"
                        alt="car"
                      />
                      <h5 className="card-title">{car.car}</h5>
                      <p>
                        {car.car_model}-{car.car_model_year}
                      </p>
                      <p>
                        <img src={star} alt="star" />
                        <span className="fw-bold text-black">4.8</span> (2.436
                        reviews)
                      </p>
                      <div className="d-flex justify-content-between">
                        <p>
                          <img src={user} alt="user" />4 Passagers
                        </p>
                        <p>
                          <img src={Frame} alt="Frame" />
                          Auto
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>
                          <img src={d8wxke} alt="d8wxke" />
                          Air Conditioning
                        </p>
                        <p>
                          <img src={doors} alt="doors" />4 Doors
                        </p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="card-text">Price</p>
                        <p>
                          <span className="fw-bold text-black">
                            {car.price}
                          </span>
                          /day
                        </p>
                      </div>
                      <Link
                        to={"/carDetails"}
                        className="btn btn-primary w-100"
                      >
                        Rent Now <img src={arrowRight} alt="arrowRight" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="text-center">
            <Link
              to={"/home/allCars"}
              className={`btn ${carStyle.btnSecondary} w-25 mt-3`}
            >
              Show all vehicles
              <i class="fa-solid fa-arrow-right mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
