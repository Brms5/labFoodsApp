import { IProduct } from "@/interfaces/restaurants/interface";
import React, { useState } from "react";
import ProductAddModal from "./productAddModal";
import ProductOrderNumber from "./productOrderNumber";
import {
  RestaurantDetailContainer,
  RestaurantCard,
  ImageRestaurantCard,
  TextRestaurantCard,
  OrderNumberDiv,
} from "./style";

interface IRestaurantMenuCard {
  product: IProduct;
}

function RestaurantMenuCard({ product }: IRestaurantMenuCard) {
  const [orderNumber, setOrderNumber] = useState<number>(0);

  console.log("orderNumber", orderNumber);

  return (
    <RestaurantDetailContainer>
      <RestaurantCard>
        <ImageRestaurantCard src={product.photoUrl} />
        <TextRestaurantCard>
          <h3 style={{ width: "160%", color: "#e8222e" }}>{product.name}</h3>
          <span style={{ width: "160%", color: "#b8b8b8" }}>
            {product.description}
          </span>
          <span style={{ fontSize: "20px" }}>R${product.price}</span>
        </TextRestaurantCard>
        <OrderNumberDiv style={{ justifyContent: (orderNumber == 0) ? "flex-end" : "space-between"} }>
          {orderNumber > 0 ? (
            <ProductOrderNumber orderNumber={orderNumber} />
          ) : null}
          <ProductAddModal
            orderNumber={orderNumber}
            setOrderNumber={setOrderNumber}
          />
        </OrderNumberDiv>
      </RestaurantCard>
    </RestaurantDetailContainer>
  );
}

export default RestaurantMenuCard;
