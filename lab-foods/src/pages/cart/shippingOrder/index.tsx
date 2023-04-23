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

  console.log("TOTAL PRICE", totalPrice);

  return (
    <ShippingContainer>
      <div>
        <span>{`Frete R$${restaurantOrder.shipping}`}</span>
      </div>
      <div>
        <span>SUBTOTAL</span>
        <span>{`R$${totalPrice}`}</span>
      </div>
    </ShippingContainer>
  );
}

export default ShippingOrder;
