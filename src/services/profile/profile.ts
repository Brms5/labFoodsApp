import axios from "axios";

export const getProfile = async () => {
  try {
    const response = await axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile`,
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

export const getProfileAddress = async () => {
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

export const updateProfile = async (body: any) => {
  try {
    const response = await axios.put(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile`,
      body,
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
