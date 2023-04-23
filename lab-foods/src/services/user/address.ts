import axios from "axios";

export const getAddress = async () => {
  try {
    const response = await axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile/address`,
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
