import React, { useState, useEffect } from "react";
import { Location } from "./location";
import MapContainer from "./google-maps";

export const ListLocations = () => {
  const [locations, setLocations] = useState([]);
  const [objectData, setObjectData] = useState([]);
  const [show, setShow] = useState(false);
  const [carModel, setCarModel] = useState("");
  const [carLicense, setCarLicense] = useState("");
  const [carState, setCarState] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const LOCATIONS_API =
    "https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations/cars";

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const data = await fetch(LOCATIONS_API);
    const items = await data.json();
    setLocations(items.locations);
  };

  const handleChange = e => {
    const locationObject = locations.find(
      obj => obj.address === e.target.value
    );
    setObjectData(locationObject);
  };

  const handleSubmit = e => {
    e.preventDefault();
    objectData.cars.map(info => {
      setCarModel(info.model);
      setCarLicense(info.license);
      setCarState(info.state);
    });
    setLatitude(objectData.geoPoint.latitude);
    setLongitude(objectData.geoPoint.longitude);
    setShow(true);
  };

  return (
    <div className="container">
      <div className="item search">
        <h1>Greenwheels Locator</h1>
        <select onChange={handleChange}>
          <option>Kies locatie...</option>
          {locations.map(location => (
            <Location streetname={location.address} key={location.address} />
          ))}
        </select>
        <button onClick={handleSubmit}>Toon data</button>
      </div>

      {show ? (
        <React.Fragment>
          <div className="item carData">
            <p>
              Model: <span className="car-data">{carModel}</span>
            </p>
            <p>
              Kenteken: <span className="car-data">{carLicense}</span>
            </p>
            <p>
              Status: <span className="car-data">{carState}</span>
            </p>
          </div>
          <div className="item carImage">
            <img
              src={
                carModel === "VW Golf 7 Variant "
                  ? "https://www.greenwheels.com/themes/mokum/img/models/station.png"
                  : carModel === "VW up!"
                  ? "https://www.greenwheels.com/themes/mokum/img/models/up.png"
                  : "https://www.greenwheels.com/themes/mokum/img/models/caddy.png"
              }
              alt="Greenwheels"
            />
          </div>
          <div className="item map">
            <MapContainer lat={latitude} long={longitude} />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};
