import React from "react";
import { TitleSize } from "../../ui/title/title";
import { StyledSection, StyledTitle } from "./styles";
import Gallery from "../../ui/gallery/galery";
// Галерея котокафе
function CafeGallery({ slides }) {
  return slides && slides.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}


export default CafeGallery;