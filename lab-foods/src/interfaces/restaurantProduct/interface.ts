import { IRestaurantDetails } from "../restaurants/interface";

export interface IProduct {
  category: string;
  description: string;
  id: string;
  name: string;
  photoUrl: string;
  price: number;
}

export interface IProductCart {
  quantity: number;
  product: IProduct;
}
