import axios from "axios";

export const postLogin = async (email: String, password: String) => {
  try {
    const response = await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
    return error;
  }
};
