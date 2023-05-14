import { IOrderHistory } from "@/interfaces/cart/interface";
import React from "react";
import { OrderCard, TextOrderCard } from "./style";

interface IProfileOrders {
  order: IOrderHistory;
}

function ProfileOrders({ order }: IProfileOrders) {
  const date = new Date(order.createdAt);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("pt-BR", options);

  const formattedNumber = order.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <OrderCard>
      <TextOrderCard>
        <h2
          style={{
            display: "flex",
            width: "100%",
            color: "#e8222e",
            marginTop: "10px",
          }}
        >
          {order.restaurantName}
        </h2>
        <span>{formattedDate}</span>
        <h2>{`SUBTOTAL R$${formattedNumber}`}</h2>
      </TextOrderCard>
    </OrderCard>
  );
}

export default ProfileOrders;
