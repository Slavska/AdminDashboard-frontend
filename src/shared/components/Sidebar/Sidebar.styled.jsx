import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const StyledSidebar = styled.div`
  display: flex;
  align-items: center;
  width: 78px;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  height: 100vh;
  background: #f7f8fa;
  justify-content: space-between;
  border-right: 1px solid rgba(29, 30, 33, 0.1);
  z-index: 100;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 84px;
  }
`;

export const LogOutWrap = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
