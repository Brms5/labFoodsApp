import {
  PostRegisterForm,
  PutAddressForm,
} from "@/interfaces/authentication/interface";
import axios from "axios";
import { useRouter } from "next/router";

export const postRegister = async (form: PostRegisterForm) => {
  try {
    const response = await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup`,
      {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    window.localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error: any) {
    alert(error.response.data.message);
    return error;
  }
};

export const putAddress = async (form: PutAddressForm) => {
  try {
    const response = await axios.put(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/address`,
      {
        street: form.street,
        number: form.number,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement
      },
      {
        headers: {
          "Content-Type": "application/json",
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    window.localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error: any) {
    alert(error.response.data.message);
    return error;
  }
};
