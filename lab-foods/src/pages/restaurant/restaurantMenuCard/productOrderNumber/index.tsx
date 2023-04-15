import React from "react";
import { ProductOrderNumberDiv } from "./style";

interface IProductOrderNumber {
  orderNumber: number;
}

function ProductOrderNumber({ orderNumber }: IProductOrderNumber) {
  return (
    <ProductOrderNumberDiv>
      <p>{orderNumber}</p>
    </ProductOrderNumberDiv>
  );
}

export default ProductOrderNumber;
