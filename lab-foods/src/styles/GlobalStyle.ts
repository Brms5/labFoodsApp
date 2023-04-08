import styled from "styled-components";

export const GlobalPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1920px;
  width: 100%;
  border: 1px solid black;
`;

export const HorizontalLine = styled.hr`
  border: 1px groove;
  width: 100%;
`;

export const FormStructureDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75%;
  max-width: 500px;
  width: 100%;
`;

export const TextStyled = styled.p`
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: -0.39px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const RestaurantsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
  /* background-color: yellow; */
`;
