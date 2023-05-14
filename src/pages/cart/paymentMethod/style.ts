import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 10%;
  height: 70px;
  gap: 8px;
  margin-top: 16px;
  span {
    font-size: 16px;
    font-weight: 500;
    margin-left: 8px;
  }
`;

export const PaymentOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        background: transparent;
        border: none;
        /* width: 100px; */
        cursor: pointer;
    }
`;