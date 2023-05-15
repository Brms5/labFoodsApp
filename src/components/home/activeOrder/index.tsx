import { IOrderHistory } from "@/interfaces/cart/interface";
import React from "react";
import { ActiveOrderCard, ActiveOrderTime, TextOrderCard } from "./style";
import ScheduleIcon from "@mui/icons-material/Schedule";

interface IActiveOrder {
  activeOrder: IOrderHistory;
}

function ActiveOrder({ activeOrder }: IActiveOrder) {
  const formattedNumber = activeOrder.totalPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <ActiveOrderCard>
      <ActiveOrderTime>
        <ScheduleIcon fontSize="large" style={{ color: "white" }} />
      </ActiveOrderTime>
      <TextOrderCard>
        <span
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.2rem",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#fff",
          }}
        >
          Pedido em andamento
        </span>
        <span
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          {activeOrder.restaurantName}
        </span>
        <h2>{`SUBTOTAL R$${formattedNumber}`}</h2>
      </TextOrderCard>
    </ActiveOrderCard>
  );
}

export default ActiveOrder;
