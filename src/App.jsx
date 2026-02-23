import React from "react";
import { Outlet } from "react-router";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
