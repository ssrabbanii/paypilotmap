import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import {
  getPlacesData,
  getPayMeDiscounts,
  getStudentDiscounts,
  getRestaurantInfo,
} from "./api";
import "./App.css";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [payMeDiscounts, setPayMeDiscounts] = useState([]);
  const [studentDiscounts, setStudentDiscounts] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [restaurantInfo, setRestaurantInfo] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);

    getPayMeDiscounts().then((data) => {
      setPayMeDiscounts(data);
      console.log("Fetched PayMe Discounts:", data); // Set the state with fetched data
    });

    getRestaurantInfo().then((data) => {
      setRestaurantInfo(data);
      console.log("Fetched Restaurant Info:", data); // Set the state with fetched data
    });

    getStudentDiscounts().then((data) => {
      setStudentDiscounts(data);
      console.log("Fetched Student Discounts:", data); // Set the state with fetched data
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header restaurantInfo={restaurantInfo} />

      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          {" "}
          <List
            restaurantInfo={restaurantInfo}
            payMeDiscounts={payMeDiscounts}
            studentDiscounts={studentDiscounts}
            childClicked={childClicked}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
