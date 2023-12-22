import { createGlobalStyle } from "styled-components";
import Vector from "../../images/elements1xMobile.png";
import VectorDesktop from "../../images/elements1xDesktop.png";
import { breakpoints } from "../styles/breakpoints";

export const GlobalStyles = createGlobalStyle`
body {
 padding:0;
  font-family: Inter;
  letter-spacing: 0.04em;
  max-width: 100vw;
  height:auto;
  background-color:#F8F8F8;
  color: rgba(18, 20, 23, 0.80);
  font-size: 16px;
  line-height: 24px;
  padding: 24px 20px;
  background-image: url(${Vector});
  height: 100%;
  background-repeat: no-repeat;
  background-size: 300px 150px;
  background-position: 100% 105%;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 24px 32px;
    background-image: url(${VectorDesktop});
    background-size: 465px 365px;
    background-position: 100% 125%;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 28px 100px;

  }
  
  }`;
