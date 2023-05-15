import styled from "styled-components";

export const RestaurantDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RestaurantCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 400px;
  height: 160px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0 10px 0;
`;

export const ImageRestaurantCard = styled.img`
  display: flex;
  width: 150px;
  height: 160px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TextRestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 130px;
  margin-left: 10px;
  width: 170px;
`;

export const OrderNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 160px;
  width: 90px;
`;
