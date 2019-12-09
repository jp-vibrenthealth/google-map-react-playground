import React from "react";
import ReactDOM from "react-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import constants from "./constants";

import "./styles.css";

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: constants.GMAPS_KEY // ,
    // ...otherOptions
  });

  // const onLoad = React.useCallback(function onLoad(mapInstance) {
  //   // do something with map Instance
  // });

  if (loadError) {
    return <div> Map can't be rendered </div>;
  }

  return isLoaded ? (
    <div className="mapContainer">
      <GoogleMap
        id="example-map"
        center={constants.defaultCenter}
        zoom={constants.defaultZoomLevel}
        // onLoad={onLoad}
      />
    </div>
  ) : (
    <div> Something went wrong </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
