import { ReactNode } from "react";
import { IProductCart } from "../restaurantProduct/interface";
import { IRestaurantOrder } from "../restaurants/interface";

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextData {
  cart: IProductCart[];
  setCart: Function;
  restaurantOrder: IRestaurantOrder | undefined;
  setRestaurantOrder: Function;
}
