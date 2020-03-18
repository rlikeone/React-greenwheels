import React, { useState, useEffect } from "react";
import "./car-info.style.scss";
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
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
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
    setLatitude(objectData.geoPoint.latitude);
    setLongitude(objectData.geoPoint.longitude);
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
          <div className="car">
            <div>
              <h2>Car info</h2>
              <p>Car model: <span className="car-data">{carModel}</span></p>
              <p>License plate: <span className="car-data">{carLicense}</span></p>
              <p>Car State: <span className="car-data">{carState}</span></p>
            </div>
            <div>
              <h2>Geo location</h2>
              <p>Latitude: <span className="car-data">{latitude}</span></p>
              <p>Longitude: <span className="car-data">{longitude}</span></p>
            </div>
          </div>
          : null
        }
      </div>
    </div>
  );
};
