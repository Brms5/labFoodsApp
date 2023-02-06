import { CSSReset } from "@/styles/CSSReset";
import { Form, FormStructureDiv, GlobalPage, HorizontalLine, TextStyled } from "@/styles/GlobalStyle";
import React, { useState } from "react";
import logoPng2x from "../../assets/logoPng2x.png";
import Image from "next/image";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <GlobalPage>
      <CSSReset />
      <FormStructureDiv>
        <div style={{ height: "65px", width: "100%" }}>
          <Link href="/login">
            <ChevronLeftIcon fontSize="large" />
          </Link>
          <HorizontalLine />
        </div>
        <Image src={logoPng2x} alt="Logo" priority />
        <TextStyled style={{ margin: "28px 0px 14px 0px" }}>
          Cadastrar
        </TextStyled>
        <Form>
          <TextField
            id="outlined-basic-name"
            label="Nome"
            placeholder="Nome"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-email"
            label="E-mail"
            placeholder="email@email.com"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            id="outlined-basic-cpf"
            label="CPF"
            placeholder="111.111.111-11"
            variant="outlined"
            required
            margin="dense"
            fullWidth
          />
          <FormControl variant="outlined" fullWidth required margin="dense">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
              placeholder="Mínimo 6 caracteres"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth required margin="dense">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmar
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm"
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirmar"
              placeholder="Mínimo 6 caracteres"
            />
          </FormControl>
          <Link href="/address" style={{width: "100%"}}>
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
              Criar
            </Button>
          </Link>
        </Form>
      </FormStructureDiv>
    </GlobalPage>
  );
}

export default Register;
