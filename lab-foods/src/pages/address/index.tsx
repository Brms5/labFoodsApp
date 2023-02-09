import { CSSReset } from "@/styles/CSSReset";
import {
  Form,
  FormStructureDiv,
  GlobalPage,
  HorizontalLine,
  TextStyled,
} from "@/styles/GlobalStyle";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import { PutAddressForm } from "@/interfaces/authentication/interface";
import { putAddress } from "@/services/authentication/register";
import { useRouter } from "next/router";

function Address() {
  const [userForm, setUserForm] = useState<PutAddressForm>({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });
  const [validateForm, setValidateForm] = useState<boolean | undefined>(false);

  const handleFormChange = (e: any) => {
    if (e.target.getAttribute("name") == "formStreet") {
      setUserForm({
        street: e.target.value,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: userForm.state,
        complement: userForm.complement
      });
    } else if (e.target.getAttribute("name") == "formNumber") {
      setUserForm({
        street: userForm.street,
        number: e.target.value,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: userForm.state,
        complement: userForm.complement
      });
    } else if (e.target.getAttribute("name") == "formNeighbourhood") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: e.target.value,
        city: userForm.city,
        state: userForm.state,
        complement: userForm.complement
      });
    } else if (e.target.getAttribute("name") == "formCity") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: e.target.value,
        state: userForm.state,
        complement: userForm.complement
      });
    } else if (e.target.getAttribute("name") == "formState") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: e.target.value,
        complement: userForm.complement
      });
    } else if (e.target.getAttribute("name") == "formComplement") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: userForm.state,
        complement: e.target.value
      });
  };
}

  const router = useRouter();
  const handleClickSubmit = async () => {
    Object.entries(userForm).map((key: any) => {
      if (key[1] == "") {
        setValidateForm(true);
      }
    });
    await putAddress(userForm).then((response) => {
      window.localStorage.setItem("token", response.token);
      if(response.token) {
        router.push("/home");
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <GlobalPage>
      <CSSReset />
      <FormStructureDiv>
        <div style={{ height: "65px", width: "100%" }}>
          <Link href="/register">
            <ChevronLeftIcon fontSize="large" />
          </Link>
          <HorizontalLine />
        </div>
        <TextStyled style={{ margin: "28px 0px 14px 0px" }}>
          Meu endereço
        </TextStyled>
        <Form>
          <TextField
            id="outlined-basic-street"
            label="Logradouro"
            placeholder="Rua / Av."
            variant="outlined"
            required
            margin="dense"
            fullWidth
            value={userForm.street}
            name="formStreet"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateForm && userForm.street.length < 1}
          />
          <TextField
            id="outlined-basic-number"
            label="Número"
            placeholder="Número"
            variant="outlined"
            required
            margin="dense"
            fullWidth
            value={userForm.number}
            name="formNumber"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateForm && userForm.number.length < 1}
          />
          <TextField
            id="outlined-basic-complement"
            label="Complemento"
            placeholder="Apto. / Bloco"
            variant="outlined"
            margin="dense"
            fullWidth
            value={userForm.complement}
            name="formComplement"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
          />
          <TextField
            id="outlined-basic-neighbourhood"
            label="Bairro"
            placeholder="Bairro"
            variant="outlined"
            required
            margin="dense"
            fullWidth
            value={userForm.neighbourhood}
            name="formNeighbourhood"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateForm && userForm.neighbourhood.length < 1}
          />
          <TextField
            id="outlined-basic-city"
            label="Cidade"
            placeholder="Cidade"
            variant="outlined"
            required
            margin="dense"
            fullWidth
            value={userForm.city}
            name="formCity"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateForm && userForm.city.length < 1}
          />
          <TextField
            id="outlined-basic-state"
            label="Estado"
            placeholder="Estado"
            variant="outlined"
            required
            margin="dense"
            fullWidth
            value={userForm.state}
            name="formState"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateForm && userForm.state.length < 1}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e8222e",
              color: "black",
              marginTop: "12px",
              textTransform: "none",
              height: "48px",
            }}
            fullWidth
            onClick={() => {
              handleClickSubmit();
            }}
          >
            Salvar
          </Button>
        </Form>
      </FormStructureDiv>
    </GlobalPage>
  );
}

export default Address;