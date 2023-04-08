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
import { Form, GlobalPage, TextStyled } from "@/styles/GlobalStyle";
import { postLogin } from "@/services/authentication/login";
import { useRouter } from "next/router";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState<String>("");

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  const validateEmail = () => {
    if (userEmail.match(pattern)) {
      return false;
    } else if (userEmail.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  const validatePassword = () => {
    if (userPassword.length < 1 || userPassword.length >= 6) {
      return false;
    } else {
      return true;
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const router = useRouter();

  const handleClickSubmit = async () => {
    postLogin(userEmail, userPassword).then((response) => {
      if (response.data.user.hasAddress == true) {
        router.push('/home');
      } else if (response.data.token) {
        router.push('/address');
      }
    }).catch((error) => {
      console.log(error);
    })
  }

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
            value={userEmail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserEmail(event.target.value);
            }}
            error={validateEmail()}
          />
          <FormControl variant="outlined" fullWidth required margin="dense">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={userPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserPassword(event.target.value);
              }}
              error={validatePassword()}
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
            onClick={() => {
              handleClickSubmit();
            }}
          >
            Entrar
          </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                marginTop: "12px",
                textTransform: "none",
              }}
              onClick={() => router.push("/register")}
            >
              Não possui cadastro? Clique aqui.
            </Button>
        </Form>
      </LoginStructureDiv>
    </GlobalPage>
  );
}

export default Login;
