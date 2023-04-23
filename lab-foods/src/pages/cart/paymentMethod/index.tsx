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
        <button onClick={() => setPaymentMethod("money")}>
          {paymentMethod === "money" ? (
            <RadioButtonCheckedRoundedIcon />
          ) : (
            <RadioButtonUncheckedRoundedIcon />
          )}
        </button>
        <span>Dinheiro</span>
      </PaymentOptionsContainer>
      <PaymentOptionsContainer>
        <button onClick={() => setPaymentMethod("creditcard")}>
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
