import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Main } from "./style";
import { Outlet } from "react-router";


function PageWrapper() {
  return (
    <>
      <Header />
      <Main >
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;