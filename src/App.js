import React from "react";
import "./App.css";
import { ListLocations } from "./components/locations/list-locations";

function App() {
  return (
    <div className="App">
      {/* <h1>Car Locator</h1> */}
      <ListLocations />
    </div>
  );
}

export default App;
