"use client";
import React from "react";
import { CSSReset } from "@/CSSReset";
import { HomeDiv } from "./styled";
import Image from "next/image";
import logoPng3x from "../assets/logoPng3x.png";

function Home() {
  return (
    <>
      <CSSReset />
      <HomeDiv>
        <Image src={logoPng3x} alt="Logo" />
      </HomeDiv>
    </>
  );
}

export default Home;
