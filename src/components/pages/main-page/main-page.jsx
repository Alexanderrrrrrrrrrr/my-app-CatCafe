import React from "react";
import About from "../../blocks/about/about";
import StarsList from "../../blocks/starts-list/stars-list";
import { TitleLevel } from "../../../components/ui/title/title";

function MainPage({ stars }) {
  return (
    <>
      <About level={TitleLevel.H1}  />
      <StarsList stars={stars} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;



