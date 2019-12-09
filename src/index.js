import React from "react";
import ReactDOM from "react-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import constants from "./constants";

import "./styles.css";

function App() {
  return (
    <div className="mapContainer">
      <LoadScript id="script-loader" googleMapsApiKey={constants.GMAPS_KEY}>
        <GoogleMap
          id="example-map"
          center={constants.defaultCenter}
          zoom={constants.defaultZoomLevel}
        />
      </LoadScript>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
