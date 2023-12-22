import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${desktop}) {
    align-items: center;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
`;

export const NavItem = styled(NavLink)`
  background: #fff;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover > svg,
  &:focus > svg,
  &.active > svg {
    fill: rgba(89, 177, 122, 1);
    transition: all 250ms linear;
  }
  @media screen and (min-width: ${tablet}) {
    width: 44px;
    height: 44px;
  }
`;

export const SvgNav = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgba(220, 221, 223, 1);
  @media screen and (min-width: ${tablet}) {
    width: 16px;
    height: 16px;
  }
`;
