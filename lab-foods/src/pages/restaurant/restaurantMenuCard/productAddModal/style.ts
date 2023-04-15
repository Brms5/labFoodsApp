import styled from "styled-components";

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  align-items: flex-end;
  button {
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 35px;
    width: 90px;
    background-color: white;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  align-items: flex-end;
  button {
    border: 1.5px solid red;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: red;
    height: 35px;
    width: 90px;
    background-color: white;
  }
`;