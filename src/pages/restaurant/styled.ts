import styled from "styled-components";

export const RestaurantDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
`;

export const RestaurantDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 50px;
`;

export const RestaurantDetailsInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RestaurantImgDiv = styled.img`
  display: flex;
  width: 50%;
  height: 400px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const RestaurantInformationTxt = styled.p`
  display: flex;
  width: 50%;
  height: 20px;
  margin-top: 10px;
  font-size: 20px;
`;

export const RestaurantDetailsMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;
