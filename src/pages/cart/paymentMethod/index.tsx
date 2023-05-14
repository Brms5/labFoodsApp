import React from "react";
import { PaymentMethodContainer, PaymentOptionsContainer } from "./style";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";

interface IPaymentMethod {
  paymentMethod: string;
  setPaymentMethod: Function;
}

function PaymentMethod({ paymentMethod, setPaymentMethod }: IPaymentMethod) {
  return (
    <PaymentMethodContainer>
      <PaymentOptionsContainer>
        <button onClick={() => setPaymentMethod("money")} style={{ marginLeft: "16px" }}>
          {paymentMethod === "money" ? (
            <RadioButtonCheckedRoundedIcon />
          ) : (
            <RadioButtonUncheckedRoundedIcon />
          )}
        </button>
        <span>Dinheiro</span>
      </PaymentOptionsContainer>
      <PaymentOptionsContainer>
        <button onClick={() => setPaymentMethod("creditcard")} style={{ marginLeft: "16px" }}>
          {paymentMethod === "creditcard" ? (
            <RadioButtonCheckedRoundedIcon />
          ) : (
            <RadioButtonUncheckedRoundedIcon />
          )}
        </button>
        <span>Cartão de crédito</span>
      </PaymentOptionsContainer>
    </PaymentMethodContainer>
  );
}

export default PaymentMethod;
