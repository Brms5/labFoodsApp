import styled from "styled-components";

export const ActiveOrderCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 160px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  background-color: red;
`;

export const TextOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 75%;
  margin-left: 24px;
`;

export const ActiveOrderTime = styled.div`
    display: flex;
    height: 75%;
    justify-content: center;
    align-items: center;
`;
