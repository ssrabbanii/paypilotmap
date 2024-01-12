import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates, setChildClicked }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA8w6Kz0KitmEbbjeMJXRILlUqlZ1mO0I0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
