import { CSSReset } from "@/styles/CSSReset";
import { Form, FormStructureDiv, GlobalPage, HorizontalLine, TextStyled } from "@/styles/GlobalStyle";
import React from "react";
import logoPng2x from "../../assets/logoPng2x.png";
import Image from "next/image";
import {
  Button,
  TextField,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

function Address() {
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
            id="outlined-basic-address"
            label="Logradouro"
            placeholder="Rua / Av."
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-number"
            label="Número"
            placeholder="Número"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-complement"
            label="Complemento"
            placeholder="Apto. / Bloco"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-district"
            label="Bairro"
            placeholder="Bairro"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-city"
            label="Cidade"
            placeholder="Cidade"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-state"
            label="Estado"
            placeholder="Estado"
            variant="outlined"
            required
            margin="dense"
            fullWidth
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
          >
            Salvar
          </Button>
        </Form>
      </FormStructureDiv>
    </GlobalPage>
  );
}

export default Address;