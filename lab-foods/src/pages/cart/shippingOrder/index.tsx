import { IProductCart } from "@/interfaces/restaurantProduct/interface";
import { IRestaurantOrder } from "@/interfaces/restaurants/interface";
import React from "react";
import { ShippingContainer } from "./style";

interface IShippingOrder {
  cart: IProductCart[];
  restaurantOrder: IRestaurantOrder;
}

function ShippingOrder({ cart, restaurantOrder }: IShippingOrder) {
  const totalPrice = cart
    .map((item) => {
      return item.product.price * item.quantity;
    })
    .reduce((a, b) => a + b, 0);

  return (
    <ShippingContainer>
      <span>{`Frete: R$${restaurantOrder.shipping}`}</span>
      <span>{`SUBTOTAL: R$${totalPrice}`}</span>
    </ShippingContainer>
  );
}

export default ShippingOrder;
