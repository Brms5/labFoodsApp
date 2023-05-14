import { CSSReset } from "@/styles/CSSReset";
import {
  Form,
  FormStructureDiv,
  GlobalPage,
  HorizontalLine,
} from "@/styles/GlobalStyle";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import { PutAddressForm } from "@/interfaces/authentication/interface";
import { putAddress } from "@/services/authentication/register";
import { useRouter } from "next/router";
import { getAddress } from "@/services/user/address";
import { AddressUpdateHeader } from "./style";

function AddressUpdate() {
  const [userForm, setUserForm] = useState<PutAddressForm>({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const [validateForm, setValidateForm] = useState<boolean | undefined>(false);

  useEffect(() => {
    getAddress()
      .then((response) => {
        setUserForm({
          street: response.data.address.street,
          number: response.data.address.number,
          neighbourhood: response.data.address.neighbourhood,
          city: response.data.address.city,
          state: response.data.address.state,
          complement: response.data.address.complement,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFormChange = (e: any) => {
    if (e.target.getAttribute("name") == "formStreet") {
      setUserForm({
        street: e.target.value,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: userForm.state,
        complement: userForm.complement,
      });
    } else if (e.target.getAttribute("name") == "formNumber") {
      setUserForm({
        street: userForm.street,
        number: e.target.value,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: userForm.state,
        complement: userForm.complement,
      });
    } else if (e.target.getAttribute("name") == "formNeighbourhood") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: e.target.value,
        city: userForm.city,
        state: userForm.state,
        complement: userForm.complement,
      });
    } else if (e.target.getAttribute("name") == "formCity") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: e.target.value,
        state: userForm.state,
        complement: userForm.complement,
      });
    } else if (e.target.getAttribute("name") == "formState") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: e.target.value,
        complement: userForm.complement,
      });
    } else if (e.target.getAttribute("name") == "formComplement") {
      setUserForm({
        street: userForm.street,
        number: userForm.number,
        neighbourhood: userForm.neighbourhood,
        city: userForm.city,
        state: userForm.state,
        complement: e.target.value,
      });
    }
  };

  const router = useRouter();
  const handleClickSubmit = async () => {
    Object.entries(userForm).map((key: any) => {
      if (key[1] == "") {
        setValidateForm(true);
      }
    });
    await putAddress(userForm)
      .then((response) => {
        router.push("/perfil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GlobalPage>
      <CSSReset />
      <FormStructureDiv>
        <AddressUpdateHeader>
          <div>
            <Link href="/perfil">
              <ChevronLeftIcon fontSize="large" />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h3>Endereço</h3>
          </div>
        </AddressUpdateHeader>
        <HorizontalLine style={{ marginBottom: "16px" }} />
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

export default AddressUpdate;
