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
import { PutRegisterForm } from "@/interfaces/authentication/interface";
import { useRouter } from "next/router";
import { getProfile, updateProfile } from "@/services/profile/profile";
import { ProfileUpdateHeader } from "./style";

function ProfileUpdate() {
  const [userForm, setUserForm] = useState<PutRegisterForm>({
    name: "",
    email: "",
    cpf: "",
  });

  useEffect(() => {
    getProfile()
      .then((response) => {
        setUserForm({
          name: response.data.user.name,
          email: response.data.user.email,
          cpf: response.data.user.cpf,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFormChange = (e: any) => {
    if (e.target.getAttribute("name") == "formName") {
      setUserForm({
        name: e.target.value,
        email: userForm.email,
        cpf: userForm.cpf,
      });
    } else if (e.target.getAttribute("name") == "formEmail") {
      setUserForm({
        name: userForm.name,
        email: e.target.value,
        cpf: userForm.cpf,
      });
    } else if (e.target.getAttribute("name") == "formCpf") {
      setUserForm({
        name: userForm.name,
        email: userForm.email,
        cpf: e.target.value,
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

  const router = useRouter();
  const handleClickSubmit = async () => {
    if (!validateEmail() && !validateCpf()) {
      updateProfile(userForm)
        .then((response) => {
          router.push("/perfil");
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    } else {
      alert("Preencha os campos corretamente");
    }
  };

  return (
    <GlobalPage>
      <CSSReset />
      <FormStructureDiv>
        <ProfileUpdateHeader>
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
            <h3>Editar</h3>
          </div>
        </ProfileUpdateHeader>
        <HorizontalLine style={{ marginBottom: "16px" }} />
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

export default ProfileUpdate;
