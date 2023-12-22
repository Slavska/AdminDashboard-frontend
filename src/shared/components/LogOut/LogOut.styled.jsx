import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const SvgLogOut = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgba(255, 255, 255, 1);
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export const SvgWrapLogOut = styled.div`
  background: #59b17a;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 44px;
    height: 44px;
  }
`;

export const LogOutBtn = styled.button`
  background: transparent;
  border: none;
`;
