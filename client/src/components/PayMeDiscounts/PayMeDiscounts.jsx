import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles"; // Ensure you have a similar styles file or adjust as necessary

const PayMeDiscounts = ({ discount }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }} // Adjust height as needed
        image={discount["Image URL"] || "default-placeholder-image-url.jpg"} // Add a default image URL if needed
        title={discount.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {discount.Title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {discount.Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PayMeDiscounts;
