import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles"; // Make sure to define appropriate styles

import JCB from "../RestaurantInfo/JCB.png";
import Cash from "../RestaurantInfo/Cash.png";
import Octopus from "../RestaurantInfo/Octopus.png";
import Visa from "../RestaurantInfo/Visa.jpg";
import Master from "../RestaurantInfo/Master.jpg";
import UnionPay from "../RestaurantInfo/UnionPay.png";
import AE from "../RestaurantInfo/AE.png";
import WeChatPay from "../RestaurantInfo/WeChatPay.png";
import WeChatPayHK from "../RestaurantInfo/WeChatPayHK.jpeg";
import AlipayHK from "../RestaurantInfo/AlipayHK.jpeg";
import Alipay from "../RestaurantInfo/Alipay.jpeg";
import PayMe from "../RestaurantInfo/PayMe.png";
import BoCPay from "../RestaurantInfo/BoCPay.png";
import ApplePay from "../RestaurantInfo/ApplePay.jpeg";
import GooglePay from "../RestaurantInfo/GooglePay.png";
import SamsungPay from "../RestaurantInfo/SamsungPay.png";
import OpenRicePay from "../RestaurantInfo/OpenRicePay.png";
import PayPal from "../RestaurantInfo/PayPal.jpg";

const paymentMethodImages = {
  JCB,
  Cash,
  Octopus,
  Visa,
  Master,
  UnionPay,
  AE,
  WeChatPay,
  WeChatPayHK,
  AlipayHK,
  Alipay,
  PayMe,
  BoCPay,
  ApplePay,
  GooglePay,
  SamsungPay,
  OpenRicePay,
  PayPal,
};

const StudentDiscounts = ({ info }) => {
  const classes = useStyles();

  const paymentMethodsArray = info["PAYMENT METHOD(S)"]
    ? info["PAYMENT METHOD(S)"].split(",")
    : [];

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }} // Adjust height as needed
        image={info["IMAGE"] || "default-placeholder-image-url.jpg"} // Add a default image URL if needed
        title={info["Restaurant Name"]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {info["Restaurant Name"]}
        </Typography>

        <Typography gutterBottom variant="h5">
          {info["AREA"]}
        </Typography>

        <Typography gutterBottom variant="h6">
          {info["LOCATION"]}
        </Typography>

        <Typography gutterBottom variant="h6">
          {info["PRICE RANGE"]}
        </Typography>

        <Typography variant="body1" color="textSecondary" component="p">
          Student Discount Available:
        </Typography>

        <Typography variant="subtitle1" color="textSecondary" component="p">
          {info["STUDENT DISCOUNT"]}
        </Typography>

        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
        ></Typography>

        <br />

        <Typography variant="body1" color="textSecondary" component="p">
          Payment Methods Available:
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {/* Map over the payment methods array and display the corresponding images */}
          {paymentMethodsArray.map((method, index) => (
            <img
              key={index}
              src={paymentMethodImages[method.trim()]}
              alt={method.trim()}
              width="50"
              height="37"
            />
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentDiscounts;
