import React from "react";
import { MainMenuContainer } from "./style";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";

function MainMenu() {
  const router = useRouter();

  const handleRoute = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <MainMenuContainer>
      <button
        onClick={() => handleRoute("home")}
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          color: router.pathname === "/home" ? "red" : "black",
        }}
      >
        <HomeIcon fontSize="large" />
      </button>
      <button
        onClick={() => handleRoute("cart")}
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          color: router.pathname === "/cart" ? "red" : "black",
        }}
      >
        <ShoppingCartIcon fontSize="large" />
      </button>
      <button
        onClick={() => handleRoute("perfil")}
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          color: router.pathname === "/perfil" ? "red" : "black",
        }}
      >
        <PersonIcon fontSize="large" />
      </button>
    </MainMenuContainer>
  );
}

export default MainMenu;
