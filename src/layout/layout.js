import React, { useState } from "react";
import Header from "../components/Header";
import MobileTabs from "../components/MobileTabs";

const Layout = ({ children }) => {
  let hello = "Hello world!";
  let hello2 = "Hello world 2!";


  return (
    <>
      <Header hw={hello} hw2={hello2} />
      {children}
      <MobileTabs />
    </>
  );
};

export default Layout;
