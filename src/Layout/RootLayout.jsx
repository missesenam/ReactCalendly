import React from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
import SpaceUp from "../Component/SpaceUp";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <SpaceUp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
