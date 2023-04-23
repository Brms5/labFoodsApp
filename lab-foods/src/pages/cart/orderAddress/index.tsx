import { IAddress } from "@/interfaces/address/interface";
import React from "react";
import { OrderAddressContainer } from "./style";

interface IOrderAddress {
  address: IAddress;
}

function OrderAddress({ address }: IOrderAddress) {
  return (
    <OrderAddressContainer>
      <span style={{ color: "#b8b8b8" }}>Endereço de entrega</span>
      <span>{`${address.street}, ${address.number}`}</span>
    </OrderAddressContainer>
  );
}

export default OrderAddress;