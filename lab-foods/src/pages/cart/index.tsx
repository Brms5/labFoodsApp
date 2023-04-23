import MainMenu from "@/components/mainMenu";
import { GlobalContext } from "@/context/context";
import { IAddress } from "@/interfaces/address/interface";
import { getAddress } from "@/services/user/address";
import { CSSReset } from "@/styles/CSSReset";
import { GlobalPage, HorizontalLineSolid } from "@/styles/GlobalStyle";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import RestaurantMenuCard from "../restaurant/restaurantMenuCard";
import { RestaurantDetailsMenu } from "../restaurant/styled";
import OrderAddress from "./orderAddress";
import RestaurantDetails from "./restaurantDetails";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRouter } from "next/router";
import ShippingOrder from "./shippingOrder";
import PaymentMethod from "./paymentMethod";
import { Button } from "@mui/material";
import { postOrder } from "@/services/order/order";

function Cart() {
  const { cart, restaurantOrder } = useContext(GlobalContext);
  const [address, setAddress] = useState<IAddress>({
    city: "",
    complement: "",
    neighbourhood: "",
    number: "",
    state: "",
    street: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    getAddress()
      .then((response) => {
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const products = cart.map((item) => {
    return <RestaurantMenuCard key={item.product.id} product={item.product} />;
  });

  const handleConfirmOrder = () => {
    const body = {
      products: cart.map((item) => {
        return {
          id: item.product.id,
          quantity: item.quantity,
        };
      }),
      paymentMethod: paymentMethod,
    };
    console.log("BODY", body);
    postOrder(body, restaurantOrder!.id)
    .then((response) => {
      console.log(response);
      router.push("/home");
      alert("Pedido realizado com sucesso!");
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao realizar pedido");
    });
  };
  
  return (
    <GlobalPage>
      <CSSReset />
      <MainMenu />
      <button type="button" onClick={() => router.back()}>
        <ChevronLeftIcon fontSize="medium" />
      </button>
      <h2>Meu carrinho</h2>
      <OrderAddress address={address} />
      <RestaurantDetails restaurantOrder={restaurantOrder!} />
      <RestaurantDetailsMenu>{products}</RestaurantDetailsMenu>
      <ShippingOrder cart={cart} restaurantOrder={restaurantOrder!} />
      <span>Forma de pagamento</span>
      <HorizontalLineSolid />
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <Button
        variant="contained"
        style={{
          backgroundColor: "#e8222e",
          color: "black",
          marginTop: "12px",
          textTransform: "none",
          height: "48px",
        }}
        // fullWidth
        onClick={() => {
          handleConfirmOrder();
        }}
      >
        Confirmar
      </Button>
    </GlobalPage>
  );
}

export default Cart;
