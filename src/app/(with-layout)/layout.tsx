"use client";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <Footer></Footer>
    </>
  );
};

export default layout;
