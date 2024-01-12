import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "1186801ebfmsh6b3b8140baffbb9p13e957jsn8b234742ae6c",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPayMeDiscounts = async () => {
  try {
    const response = await axios.get(
      "https://retoolapi.dev/7Wjgs1/paymediscounts"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching PayMe discounts:", error);
  }
};

export const getStudentDiscounts = async () => {
  try {
    const response = await axios.get(
      "https://retoolapi.dev/oG925J/studentdiscounts"
    );
    return response.data; // This will be the array of student discounts
  } catch (error) {
    console.error("Error fetching student discounts:", error);
  }
};

export const getRestaurantInfo = async () => {
  try {
    const response = await axios.get("https://retoolapi.dev/nzgoKU/data");
    return response.data; // This will be the array of student discounts
  } catch (error) {
    console.error("Error fetching restaurant information:", error);
  }
};
