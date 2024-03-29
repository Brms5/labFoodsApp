import axios from "axios";

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

export const getRestaurantDetails = async (id: string | string[] | undefined) => {
  try {
    const response = await axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${id}`,
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
