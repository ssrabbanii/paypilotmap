import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import PayMeDiscounts from "../PayMeDiscounts/PayMeDiscounts";
import StudentDiscounts from "../StudentDiscounts/StudentDiscounts";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";

import { useState, useEffect, createRef } from "react";
import useStyles from "./styles";

const List = ({
  places,
  restaurantInfo,
  payMeDiscounts,
  studentDiscounts,
  childClicked,
}) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurant-info");
  const [paymentMethod, setPaymentMethod] = useState("octopus");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const options = [
    "BASE 2 Bar & Restaurant",
    "Shahrazad Lebanese Dining Lounge & Bar",
    "E.TEA Cameron Road",
    "Yifang Taiwan Fruit Tea",
    "Mammy Pancake",
    "Tan Tan Shao",
    "靚靚 不一樣的車仔麵",
    "Bull Logo Place (九鼎記)",
    "California Pizza Kitchen",
    "Mos Burger",
    "御麵坊",
    "Aunty 13 Kitchen in Fortune Metropolis",
    "Tam Jai in Fortune Metropolis (譚仔)",
    "Pizza Hut Whampoa",
    "MouMouClub",
    "Crusta",
    "MCL Festival Walk",
    "American Eagle",
    "Tea in Fortune Metropolis (台屋)",
    "Cafe MED",
    "Milu Thai มิลู่ไทย (耀華街)",
    "Bochord",
    "Soi.29",
    "陀地燒",
    "Malay Grandpa Restaurant",
    "Sukiyaki Nikuya",
    "南香雞飯",
    "GARIGUETTE",
    "Hearth Yakiniku by ATUM",
    "KABOOM",
    "Little Fish (Kam Ma Building)",
    "Flat Iron Steak",
    "Bistro Breton by La Creperie",
    "Man Yuen Restaurant",
    "明發小食",
    "Supreme Steak & Grill",
    "Vission Bakery",
    "REFLECT Restaurant & Bar",
    "The Glam",
    "AOAO",
    "Kotori_Lbird",
    "Bingo & Cook",
    "Jen Cafe",
    "ASOK THAI GARDEN",
    "Hop Hing Hot Pot",
    "TONO DAIKIYA",
    "Sukiyaki Itsuki",
    "GALBI TOWN",
    "周記醬料",
    "家後",
    "Abbraccio",
    "Han Ah Rum Korean Restaurant",
    "ASOK THAI GARDEN",
    "Apinara",
    "Coffee Hwajeon 커피화전",
    "BENKEI Okonomiyaki Teppanyaki",
    "Grind & Brew",
    "Milu Thai มิลู่ไทย (亞士厘道)",
    "雞駅花膠雞米線專門店",
    "Hungry Monkey (金朝陽中心二期 - Midtown)",
    "The Wall Street Bar & Lounge",
    "Juno",
    "Fukuoka Hambageu (Hau Fook Street)",
    "Tuned Coffee & Roastery",
    "CHECK IN TAIPEI (Harbour City)",
    "Together",
    "Momiji Chaya (OP Mall)",
    "Deluxe Daikiya Japanese Restaurant (Causeway Bay Plaza 1)",
    "Coffee by Zion",
    "捌加廿陸天婦羅居酒屋",
    "WoZi",
    "Forbidden Duck (Tai Koo Place)",
    "Relish Kitchen by ALOT",
    "Kikanbo",
    "Gram cafe & pancakes",
    "Sushi Masa",
    "Skewer Kitchen",
    "陀地燒",
    "Thonglor No. 9",
    "HEXA",
    "Sukiyaki Nikuya",
    "The Cheesecake Factory",
    "The Market",
    "Yadllie Plate 야들리애플래이트 (兆萬中心)",
    "TONO DAIKIYA",
    "KABOOM",
    "The Grill Room (The Humphreys)",
    "Mr. Steak Buffet à la minute",
    "Wall Is Eat",
    "Master Beef (King Wah Centre)",
    "MUTA Restaurant by ATUM",
    "The Place",
    "Champak Restaurant by ATUM (THE FOREST)",
    "Grand Ding House",
    "Hearth Yakiniku by ATUM",
    "Cobber Coffee and Tonys Pastry",
  ];

  const [value, setValue] = React.useState("Find Restaurants");
  const [inputValue, setInputValue] = React.useState("");

  const handleFilter = () => {
    if (type === "searchedValue") {
      const filtered = restaurantInfo.filter(
        (info) => info["Restaurant Name"] === value
      );
      setFilteredRestaurants(filtered);
    }
    setType("searchedValue");
  };

  return (
    <div className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <Autocomplete
              value={value}
              classes={{
                value: classes.inputRoot,
                inputValue: classes.inputInput,
              }}
              onChange={(event, newValue) => {
                setValue(newValue);
                handleFilter();
              }}
              inputValue={inputValue}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
      {/* <Typography variant="h4">Discounts around you</Typography> */}

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="all-restaurants"> All Restaurants near you</MenuItem>
          <MenuItem value="studentDiscounts"> Student Discounts</MenuItem>
          <MenuItem value="payMeOffers"> PayMe Offers</MenuItem>
          <MenuItem value="restaurant-info"> Merchant Restaurants</MenuItem>
        </Select>
      </FormControl>

      {/* <FormControl className={classes.formControl}>
        <InputLabel>Payment Method</InputLabel>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <MenuItem value="jcb">JCB</MenuItem>
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="octopus">Octopus</MenuItem>
          <MenuItem value="visaMastercard">VISA+Mastercard</MenuItem>
          <MenuItem value="unionPay">UnionPay</MenuItem>
          <MenuItem value="ae">AE</MenuItem>
          <MenuItem value="weChatPayHK">WeChat Pay (HK)</MenuItem>
          <MenuItem value="weChatPayCN">WeChat Pay (CN)</MenuItem>
          <MenuItem value="alipayHK">Alipay (HK)</MenuItem>
          <MenuItem value="alipayCN">Alipay (CN)</MenuItem>
          <MenuItem value="payMe">PayMe</MenuItem>
          <MenuItem value="bocPay">BoC Pay</MenuItem>
          <MenuItem value="applePay">Apple Pay</MenuItem>
          <MenuItem value="googlePay">Google Pay</MenuItem>
          <MenuItem value="samsungPay">Samsung Pay</MenuItem>
          <MenuItem value="openRicePay">OpenRice Pay</MenuItem>
        </Select>
      </FormControl> */}

      <Grid container spacing={3} className={classes.list}>
        {type === "payMeOffers" ? (
          payMeDiscounts?.map((payMeDiscounts, i) => (
            <Grid item key={i} xs={12}>
              <PayMeDiscounts discount={payMeDiscounts} />
            </Grid>
          ))
        ) : type === "studentDiscounts" ? (
          studentDiscounts?.map((studentDiscounts, i) => (
            <Grid item key={i} xs={12}>
              <StudentDiscounts info={studentDiscounts} />
            </Grid>
          ))
        ) : type === "restaurant-info" ? (
          restaurantInfo?.map((restaurantInfo, i) => (
            <Grid item key={i} xs={12}>
              <RestaurantInfo info={restaurantInfo} />
            </Grid>
          ))
        ) : type === "searchedValue" ? (
          filteredRestaurants?.map((filteredInfo, i) => (
            <Grid item key={i} xs={12}>
              <RestaurantInfo info={filteredInfo} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Card elevation={6}>
              <CardMedia
                style={{ height: 250 }} // Adjust height as needed
                image="https://www.trojanpress.com.au/wp-content/uploads/2019/05/Image-Coming-Soon-02.jpg"
                title="coming soon"
                // Add a default image URL if needed
              />
              <CardContent>
                <Typography gutterBottom variant="h5"></Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default List;
