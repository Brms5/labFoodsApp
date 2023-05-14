import { IOrder, IOrderHistorydata } from "@/interfaces/cart/interface";
import axios from "axios";

export const getOrders = async () => {
  try {
    const response = await axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/orders/history",
      {
        headers: {
          "Content-Type": "application/json",
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    return response.data.orders as IOrderHistorydata;
  } catch (error) {
    return error;
  }
};

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
