import React, { useState, useEffect } from "react";
import "./car-info.style.css";
import { Location } from "./location";
// import {Map, GoogleApiWrapper} from "google-maps-react";
// import { CarInfo } from "./car-info";

export const ListLocations = () => {
  const [locations, setLocations] = useState([]);
  const [objectData, setObjectData] = useState([]);
  const [show, setShow] = useState(false);
  const [carModel, setCarModel] = useState("");
  const [carLicense, setCarLicense] = useState("");
  const [carState, setCarState] = useState("");

  const LOCATIONS_API =
    "https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations/cars";

  const getLocations = () => {
    fetch(LOCATIONS_API)
      .then(res => res.json())
      .then(data => setLocations(data.locations))
      .catch(() => console.log("Can't fetch locations"));
  }

  const handleChange = (e) => {
    const locationObject = locations.find(obj => obj.address === e.target.value);
    setObjectData(locationObject);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(objectData);
    objectData.cars.map(info => {
      setCarModel(info.model)
      setCarLicense(info.license)
      setCarState(info.state)
    });
  }

  useEffect(() => {
    getLocations();
  });

  return (
    <div>
      <label>Kies locatie: </label>
      <select onChange={handleChange} >
        <option></option>
        {locations.map(location => (
          <Location streetname={location.address} key={location.address} />
        ))}
      </select>
      <button onClick={handleSubmit}>Show data for this location</button>
      <div>
        {show ?
          <div>
            <p>Car model: <span className="carData">{carModel}</span></p>
            <p>License plate: <span className="carData">{carLicense}</span></p>
            <p>Car State: <span className="carData">{carState}</span></p>
          </div>
          : null
        }
      </div>
    </div>
  );
};
