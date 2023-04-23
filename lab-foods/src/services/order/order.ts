import { IOrder } from "@/interfaces/cart/interface";
import axios from "axios";

export const postOrder = async (order: IOrder, id: number) => {
  try {
    const response = await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${id}/order`,
      {
        products: order.products,
        paymentMethod: order.paymentMethod,
      },
      {
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getActiveOrder = async () => {
  try {
    const response = await axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/active-order",
      {
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
