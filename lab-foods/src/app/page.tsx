"use client";
import React from "react";
import { CSSReset } from "@/styles/CSSReset";
import { HomeDiv } from "./styled";
import Image from "next/image";
import logoPng3x from "../assets/logoPng3x.png";
import Link from "next/link";

function Home() {
  return (
    <>
      <CSSReset />
      <Link href="/login">
      <HomeDiv>
        <Image src={logoPng3x} alt="Logo" />
      </HomeDiv>
      </Link>
    </>
  );
}

export default Home;