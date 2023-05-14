import { IProduct } from "../restaurantProduct/interface";

export interface IRestaurant {
  address: string;
  category: string;
  deliveryTime: number;
  description: string;
  id: string;
  logoUrl: string;
  name: string;
  shipping: number;
}

export interface IRestaurantDetails {
  address: string;
  category: string;
  deliveryTime: number;
  description: string;
  id: string;
  logoUrl: string;
  name: string;
  products: IProduct[];
  shipping: number;
}

export interface IRestaurantOrder {
  id: number;
  name: string;
  address: string;
  deliveryTime: number;
  shipping: number;
}