import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import starList from "../../mocks/starList";
import { GlobalStyle } from "./style";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList}>Контент страницы</PageWrapper>
    </>
  );

}