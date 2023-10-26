import styled from "styled-components";
import Section from "../../styled/section/section";
import Title from "../../ui/title/title";
import VectorRight from "../../../assets/Vector-right.svg";
import imageRight from "../../../assets/image-right.svg";
import imageLeft from "../../../assets/image-left.svg";

export const StyledSection = styled(Section)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${VectorRight});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;


  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 113px;
    height: 114px;
    content: "";
    background-image: url(${imageLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background-image: url(${imageRight});
    background-size: contain;
    background-repeat: no-repeat;
  }

  `;


  export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;
