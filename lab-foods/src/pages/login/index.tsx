import { CSSReset } from "@/styles/CSSReset";
import { LoginStructureDiv } from "./styled";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import Link from "next/link";
import { Form, GlobalPage, TextStyled } from "@/styles/GlobalStyle";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <GlobalPage>
      <CSSReset />
      <LoginStructureDiv>
        <Image src={logoPng2x} alt="Logo" priority />
        <TextStyled style={{ margin: "28px 0px 14px 0px" }}>Entrar</TextStyled>
        <Form>
          <TextField
            id="outlined-basic"
            label="E-mail"
            placeholder="email@email.com"
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
            Entrar
          </Button>
          <Link href="/register">
            <Button
              variant="text"
              style={{
                color: "black",
                marginTop: "12px",
                textTransform: "none",
              }}
            >
              Não possui cadastro? Clique aqui.
            </Button>
          </Link>
        </Form>
      </LoginStructureDiv>
    </GlobalPage>
  );
}

export default Login;
