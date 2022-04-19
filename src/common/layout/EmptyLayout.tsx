import React from "react";
import { Outlet } from "react-router";
import Footer from "../../modules/Home/components/Footer";
import Header from "../../modules/Home/components/Header";

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
