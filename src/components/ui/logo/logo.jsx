import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
import { AppRoute } from "../../../const";
import { Text, StyledLogo, StyledLogoMainPage } from "./style";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
