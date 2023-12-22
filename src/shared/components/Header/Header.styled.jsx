import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 17px 0px 17px 72px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);

  background: #f7f8fa;

  @media screen and (min-width: ${tablet}) {
    padding: 15px 0px 15px 80px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 15px 40px 15px 20px;
    z-index: 1000;
  }
`;

export const LogOutWrap = styled.div`
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: flex;
  }
`;

export const SvgMenu = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #1d1e21;
  fill: #1d1e21;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const SvgClose = styled.svg`
  width: 32px;
  height: 32px;
  stroke: rgba(29, 30, 33, 1);
`;

export const BtnMenu = styled.button`
  position: absolute;
  top: 24px;
  left: 20px;
  z-index: 1000;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
  &:hover > svg,
  &:focus > svg {
    opacity: 0.4;
    transition: all 250ms linear;
  }
  background: transparent;
  border: none;
`;

export const SidebarWrap = styled.div`
  display: none;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;
