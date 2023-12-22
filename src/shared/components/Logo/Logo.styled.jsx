import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const LogoSvg = styled.svg`
  width: 36px;
  height: 36px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: all 250ms linear;
  gap: 14px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export const LogoLinkId = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: all 250ms linear;
  gap: 32px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: 60px;
  }
`;
export const LogoText = styled.p`
  color: #1d1e21;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.6px;
`;

export const LogoPicture = styled.picture`
  width: 44px;
  height: 44px;
`;

export const LogoImg = styled.img`
  width: 44px;
  height: 44px;
`;

export const Text = styled.p`
  color: rgba(29, 30, 33, 0.4);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0 8px;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  fkex-direction: row;
  margin-top: 4px;
`;
