import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Slider from "../components/Header/Slider";

const Home = () => {
  return (
    <>
      <Header/>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
