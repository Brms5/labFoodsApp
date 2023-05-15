import MainMenu from "@/components/mainMenu";
import { GlobalContext } from "@/context/context";
import { IAddress } from "@/interfaces/address/interface";
import { getAddress } from "@/services/user/address";
import { CSSReset } from "@/styles/CSSReset";
import {
  GlobalPage,
  HorizontalLine,
  HorizontalLineSolid,
} from "@/styles/GlobalStyle";
import React, { useContext, useEffect, useState } from "react";
import RestaurantMenuCard from "../../components/restaurant/restaurantMenuCard";
import OrderAddress from "../../components/cart/orderAddress";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { getActiveOrder, postOrder } from "@/services/order/order";
import { IOrderHistory } from "@/interfaces/cart/interface";
import PaymentMethod from "@/components/cart/paymentMethod";
import RestaurantOrderDetails from "@/components/cart/restaurantOrderDetails";
import ShippingOrder from "@/components/cart/shippingOrder";
import styled from "styled-components";

const CartDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
`;

const OrderContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const RestaurantDetailsMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

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
  const [activeOrder, setActiveOrder] = useState<IOrderHistory>();

  const router = useRouter();

  useEffect(() => {
    getAddress()
      .then((response) => {
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error);
      });
    getActiveOrder()
      .then((response) => {
        console.log("response", response);
        setActiveOrder(response.order);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar o pedido ativo");
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
    if (body.products.length === 0) {
      alert("Seu carrinho está vazio");
      return;
    }
    if (paymentMethod === "") {
      alert("Selecione um método de pagamento");
      return;
    }
    if (activeOrder) {
      alert("Você já possui um pedido ativo");
      return;
    }
    postOrder(body, restaurantOrder!.id)
      .then((response) => {
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
      <CartDetailsHeader>
        <div>
          <button
            type="button"
            style={{
              cursor: "pointer",
              background: "transparent",
              border: "none",
            }}
            onClick={() => router.back()}
          >
            <ArrowBackIosIcon fontSize="small" />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "65%",
          }}
        >
          <h2>Meu carrinho</h2>
        </div>
      </CartDetailsHeader>
      <HorizontalLine style={{ width: "50%" }} />
      <OrderAddress address={address} />
      {products.length > 0 ? (
        <OrderContainerDiv>
          <RestaurantOrderDetails restaurantOrder={restaurantOrder!} />
          <RestaurantDetailsMenu>{products}</RestaurantDetailsMenu>
          <ShippingOrder cart={cart} restaurantOrder={restaurantOrder!} />
        </OrderContainerDiv>
      ) : (
        <div
          style={{
            display: "flex",
            height: "200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Carrinho vazio</h3>
        </div>
      )}
      <div style={{ margin: "16px 0px 16px 0px" }}>
        <h3>Forma de pagamento</h3>
      </div>
      <HorizontalLineSolid style={{ width: "50%" }} />
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
          width: "20%",
        }}
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
