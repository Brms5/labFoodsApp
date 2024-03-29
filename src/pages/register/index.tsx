import { CSSReset } from "@/styles/CSSReset";
import {
  Form,
  FormStructureDiv,
  GlobalPage,
  HorizontalLine,
  TextStyled,
} from "@/styles/GlobalStyle";
import React, { useState } from "react";
import logoPng2x from "../../assets/logoPng2x.png";
import Image from "next/image";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import { postRegister } from "@/services/authentication/register";
import { PostRegisterForm } from "@/interfaces/authentication/interface";
import { useRouter } from "next/router";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userForm, setUserForm] = useState<PostRegisterForm>({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<String>("");

  const handleFormChange = (e: any) => {
    if (e.target.getAttribute("name") == "formName") {
      setUserForm({
        name: e.target.value,
        email: userForm.email,
        cpf: userForm.cpf,
        password: userForm.password,
      });
    } else if (e.target.getAttribute("name") == "formEmail") {
      setUserForm({
        name: userForm.name,
        email: e.target.value,
        cpf: userForm.cpf,
        password: userForm.password,
      });
    } else if (e.target.getAttribute("name") == "formCpf") {
      setUserForm({
        name: userForm.name,
        email: userForm.email,
        cpf: e.target.value,
        password: userForm.password,
      });
    } else if (e.target.getAttribute("name") == "formPassword") {
      setUserForm({
        name: userForm.name,
        email: userForm.email,
        cpf: userForm.cpf,
        password: e.target.value,
      });
    }
  };

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const validateEmail = () => {
    if (userForm.email.match(pattern)) {
      return false;
    } else if (userForm.email.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = () => {
    if (userForm.password.length < 1 || userForm.password.length >= 6) {
      return false;
    } else {
      return true;
    }
  };

  const patternCpf = /[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/i;
  const validateCpf = () => {
    if (userForm.cpf.match(patternCpf)) {
      return false;
    } else if (userForm.cpf.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const router = useRouter();
  const handleClickSubmit = async () => {
    if (!validateEmail() && !validatePassword() && !validateCpf()) {
      postRegister(userForm)
        .then((response) => {
          console.log("FORA", response);
          window.localStorage.setItem("token", response.token);
          if (response.token) {
            router.push("/address");
          }
        })
        .catch((error) => {
          console.log("FORA", error);
        });
    } else {
      alert("Preencha os campos corretamente");
    }
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
            name="formName"
            value={userForm.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
          />
          <TextField
            id="outlined-basic-email"
            label="E-mail"
            placeholder="email@email.com"
            variant="outlined"
            required
            margin="dense"
            fullWidth
            name="formEmail"
            value={userForm.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateEmail()}
          />
          <TextField
            id="outlined-basic-cpf"
            label="CPF"
            placeholder="111.111.111-11"
            variant="outlined"
            required
            margin="dense"
            fullWidth
            name="formCpf"
            value={userForm.cpf}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFormChange(event);
            }}
            error={validateCpf()}
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
              name="formPassword"
              value={userForm.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormChange(event);
              }}
              error={validatePassword()}
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
              value={confirmPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(event.target.value);
              }}
              error={confirmPassword != userForm.password}
            />
            <FormHelperText hidden={confirmPassword == userForm.password}>
              Deve ser a mesma que a anterior.
            </FormHelperText>
          </FormControl>
          {/* <Link href="/address" style={{width: "100%"}}> */}
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
            Criar
          </Button>
          {/* </Link> */}
        </Form>
      </FormStructureDiv>
    </GlobalPage>
  );
}

export default Register;
