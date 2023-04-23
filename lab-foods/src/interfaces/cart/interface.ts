import { IProductCart } from "../restaurantProduct/interface";

export interface IShoppingCart {
  products: IProductCart[];
}

export interface IProductOrder {
  id: string;
  quantity: number;
}

export interface IOrder {
  products: IProductOrder[];
  paymentMethod: string;
}
