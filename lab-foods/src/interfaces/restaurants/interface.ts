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

export interface IProduct {
  category: string;
  description: string;
  id: string;
  name: string;
  photoUrl: string;
  price: number;
}

