import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles"; // Ensure you have a similar styles file or adjust as necessary

import JCB from "./JCB.png";
import Cash from "./Cash.png";
import Octopus from "./Octopus.png";
import Visa from "./Visa.jpg";
import Master from "./Master.jpg";
import UnionPay from "./UnionPay.png";
import AE from "./AE.png";
import WeChatPay from "./WeChatPay.png";
import WeChatPayHK from "./WeChatPayHK.jpeg";
import AlipayHK from "./AlipayHK.jpeg";
import Alipay from "./Alipay.jpeg";
import PayMe from "./PayMe.png";
import BoCPay from "./BoCPay.png";
import ApplePay from "./ApplePay.jpeg";
import GooglePay from "./GooglePay.png";
import SamsungPay from "./SamsungPay.png";
import OpenRicePay from "./OpenRicePay.png";
import PayPal from "./PayPal.jpg";

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

const RestaurantInfo = ({ info }) => {
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

        {/* <Typography gutterBottom variant="h5">
          {info["AREA"]}
        </Typography> */}

        <Typography gutterBottom variant="h6">
          {info["LOCATION"]}
        </Typography>

        {/* <Typography gutterBottom variant="h6">
          {info["PRICE RANGE"]}
        </Typography> */}

        <Typography variant="body2" color="textSecondary" component="p">
          Payment Methods Available:
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {info["PM"]}
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

export default RestaurantInfo;
