"use client";

import { GlobalContext } from "@/context/context";
import {
  IProduct,
} from "@/interfaces/restaurantProduct/interface";
import React, { useContext, useMemo, useState } from "react";
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
  const { cart } = useContext(GlobalContext);
  const [orderNumber, setOrderNumber] = useState<number>(0);

  const handleOrderNumber = useMemo(() => {
    const productsInCart = cart.map((products) => {
      return products;
    });
    const isProductInCart = productsInCart.find(
      (item) => item.product.id === product.id
    );
    if (isProductInCart) {
      setOrderNumber(isProductInCart.quantity);
    }
    return isProductInCart;
  }, [cart, product]);

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
        <OrderNumberDiv
          style={{
            justifyContent: orderNumber == 0 ? "flex-end" : "space-between",
          }}
        >
          {orderNumber > 0 ? (
            <ProductOrderNumber orderNumber={orderNumber} />
          ) : null}
          <ProductAddModal
            orderNumber={orderNumber}
            setOrderNumber={setOrderNumber}
            product={product}
          />
        </OrderNumberDiv>
      </RestaurantCard>
    </RestaurantDetailContainer>
  );
}

export default RestaurantMenuCard;
