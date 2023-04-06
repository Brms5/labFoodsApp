import styled from "styled-components";

export const RestaurantsOptionsStructureDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 50px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  gap: 20px;
  background-color: white;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RestaurantOptionDiv = styled.div`
  display: flex;
  background-color: red;
`;
