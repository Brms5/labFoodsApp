import MainMenu from "@/components/mainMenu";
import { IOrderHistory } from "@/interfaces/cart/interface";
import { Profile } from "@/interfaces/profile/interface";
import { getOrders } from "@/services/order/order";
import { getProfile } from "@/services/profile/profile";
import { CSSReset } from "@/styles/CSSReset";
import {
  GlobalPage,
  HorizontalLine,
  HorizontalLineSolid,
} from "@/styles/GlobalStyle";
import React, { useEffect, useState } from "react";
import ProfileAccount from "../../components/profile/profileAccount";
import ProfileAddress from "@/components/profile/profileAddress";
import ProfileOrders from "@/components/profile/profileOrders";
import styled from "styled-components";

export const ProfileContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
`;

export const ProfileContainerHeader = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 50px;
`;

function Perfil() {
  const [profile, setProfile] = useState<Profile>();
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    getProfile()
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
    getOrders()
      .then((response) => {
        setOrders(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ordersCard = orders.map(
    (order: IOrderHistory, index: React.Key | null | undefined) => {
      return <ProfileOrders key={index} order={order} />;
    }
  );

  return (
    <GlobalPage>
      <CSSReset />
      <MainMenu />
      <ProfileContainerDiv>
        <ProfileContainerHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h2>Meu perfil</h2>
          </div>
        </ProfileContainerHeader>
        <HorizontalLine />
        {profile ? (
          <>
            <ProfileAccount profile={profile} />
            <ProfileAddress profile={profile} />
          </>
        ) : (
          <></>
        )}
        <div style={{ margin: "16px 0px 16px 0px" }}>
          <h3>Histórico de pedidos</h3>
        </div>
        <HorizontalLineSolid style={{ width: "50%" }} />
        {orders ? (
          ordersCard
        ) : (
          <h3 style={{ marginTop: "16px" }}>Você não realizou nenhum pedido</h3>
        )}
      </ProfileContainerDiv>
    </GlobalPage>
  );
}

export default Perfil;
