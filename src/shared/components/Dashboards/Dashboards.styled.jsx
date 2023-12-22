import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const WrapDashboards = styled.div`
  display: flex;
  padding: 20px 20px;
  background: #f7f8fa;
  height: 100vh;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 20px 32px;
  }
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 20px 120px;
  }
`;

export const WrapTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    width: calc((100vw - 160px));
  }
`;
