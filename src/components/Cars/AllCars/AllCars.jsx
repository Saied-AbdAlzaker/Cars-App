import React, { useState, useEffect } from "react";
import car1 from "../../../assets/images/card/car1.png";
import car2 from "../../../assets/images/card/car2.png";
import car3 from "../../../assets/images/card/car3.png";
import star from "../../../assets/images/card/star.png";
import user from "../../../assets/images/card/user.png";
import Frame from "../../../assets/images/card/Frame.png";
import d8wxke from "../../../assets/images/card/d8wxke.png";
import doors from "../../../assets/images/card/doors.png";
import arrowRight from "../../../assets/images/card/arrow-right.png";
import axios from "axios";
import carStyle from "../cars.module.css";
import { NavLink, Link } from "react-router-dom";

export default function AllCars() {
  let [car, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [inputSearch, setInputSearch] = useState([]);

  async function getCars() {
    try {
      setIsLoading(true);
      let { data } = await axios.get("https://myfakeapi.com/api/cars");
      setCars(data?.cars.splice(0, 20));
      setInputSearch(data?.cars.splice(0, 20));
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCars();
  }, []);

  const carImges = [
    { src: car1, alt: "car1" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car1, alt: "car1" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car1, alt: "car1" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car1, alt: "car1" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
    { src: car2, alt: "car2" },
    { src: car3, alt: "car3" },
  ];

  // search
  let handleChange = (event) => {
    setInputSearch(
      car.filter((c) => c.car.toLowerCase().includes(event?.target.value))
    );
  };

  return (
    <>
      <section className="my-3">
        <div className="ms-3">
          <NavLink className="text-info" to={"/home"}>
            Home
          </NavLink>
          <NavLink className="text-info" to={"/home/allCars"}>
            /Cars
          </NavLink>
        </div>
        <div className="input-group mb-3 shadow w-75 mx-auto">
          <span className="input-group-text" id="basic-addon1">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Search by name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button className={`btn ${carStyle.bgCars}`}>Search</button>
        </div>

        <div className="text-center">
          <button className="btn btnWork">POPULAR RENTAL DEALS</button>
          <h3 className="my-3">Most popular cars rental deals</h3>
        </div>
        {isLoading && <p className="text-center">Loading...</p>}
        <div className="container">
          <div className="row g-3">
            {inputSearch.map((car, index) => (
              <div className="col-md-3" key={index}>
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
                        <span className="fw-bold text-black">{car.price}</span>
                        /day
                      </p>
                    </div>
                    <Link to={"/carDetails"} className="btn btn-primary w-100">
                      Rent Now <img src={arrowRight} alt="arrowRight" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
