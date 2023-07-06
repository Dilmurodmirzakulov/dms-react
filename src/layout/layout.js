import React from "react";
import Header from "../components/Header";
import MobileTabs from "../components/MobileTabs";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <MobileTabs />
    </>
  );
};

export default Layout;
