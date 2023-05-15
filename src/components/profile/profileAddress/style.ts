import styled from "styled-components";

export const ProfileAddressContainer = styled.div`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #eeeeee;
  margin-top: 16px;
`;

export const ProfileAddressInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 27.5%;
  gap: 8px;
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const ProfileEdit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 2.5%;
  height: 100%;
`;
