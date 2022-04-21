import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const EmptyLayout = () => {
  return (
    <div id="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default EmptyLayout;
