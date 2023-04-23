import { IRestaurantOrder } from "@/interfaces/restaurants/interface";
import React from "react";
import { RestaurantContainer } from "./style";

interface IRestaurantDetails {
  restaurantOrder: IRestaurantOrder;
}

function RestaurantDetails({ restaurantOrder }: IRestaurantDetails) {
  return (
    <RestaurantContainer>
      <span style={{ color: "#e8222e" }}>{restaurantOrder.name}</span>
      <span>{restaurantOrder.address}</span>
      <span>{restaurantOrder.deliveryTime} min</span>
    </RestaurantContainer>
  );
}

export default RestaurantDetails;