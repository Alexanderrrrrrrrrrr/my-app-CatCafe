import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledSection, Copyright } from "./style";

function Footer() {
  return (
    <StyledSection className="footer">
      <Logo />
      <Copyright className="footer__copyright">Создано  Бабенков А С</Copyright>
    </StyledSection>
  );
}

export default Footer;
