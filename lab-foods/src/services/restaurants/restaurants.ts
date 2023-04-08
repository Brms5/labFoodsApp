import axios from "axios";
import React from "react";

export const getRestaurants = async () => {
  try {
    const response = await axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants`,
      {
        headers: {
          "Content-Type": "application/json",
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
    return error;
  }
};
