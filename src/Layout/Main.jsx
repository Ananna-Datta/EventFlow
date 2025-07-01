import React from "react";
import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div
        style={{ minHeight: "calc(100vh - 289px)" }}
      >
        {/* Content */}
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
