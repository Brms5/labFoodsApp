import MainMenu from "@/components/mainMenu";
import { CSSReset } from "@/styles/CSSReset";
import { GlobalPage } from "@/styles/GlobalStyle";
import React from "react";

function Perfil() {
  return (
    <GlobalPage>
      <CSSReset />
      <MainMenu />
      <h1>Perfil</h1>
    </GlobalPage>
  );
}

export default Perfil;
